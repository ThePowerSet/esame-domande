# Exam Questions 📚

A lightweight web app for university students to collectively track and share exam questions — built on Google Apps Script with a Google Sheet as the database. No server, no cost, no installation required.

![Languages](https://img.shields.io/badge/languages-6-indigo)
![License](https://img.shields.io/badge/license-MIT-green)
![Platform](https://img.shields.io/badge/platform-Google%20Apps%20Script-blue)

---

## Features

- **Shared database** — everyone sees all questions in real time, stored in a Google Sheet you own
- **Organized by subject** — color-coded tags, filterable chips, and full-text search
- **Optional answers** — show/hide answers per card to use it as a study tool
- **Name-based ownership** — only you can delete your own questions (soft protection via localStorage)
- **6 languages** — Italian, English, Spanish, French, German, Portuguese; auto-detected from browser, switchable at any time
- **Works on mobile** — responsive layout, touch-friendly
- **Zero infrastructure** — runs entirely inside Google's platform, free forever

---

## How it works

```
Browser (index.html)
    │
    │  google.script.run.*()
    ▼
Google Apps Script (Code.gs)
    │
    │  SpreadsheetApp API
    ▼
Google Sheet (your data)
```

The frontend is a single HTML file served by Google Apps Script. It calls server-side functions (`getQuestions`, `addQuestion`, `deleteQuestion`) which read and write to a Google Sheet in your Drive.

---

## Setup guide

> **Time required:** ~5 minutes. You only do this once.

### Step 1 — Create a Google Sheet

1. Go to [sheets.google.com](https://sheets.google.com)
2. Click **Blank** to create a new spreadsheet
3. Give it a name (e.g. *Exam Questions*)

### Step 2 — Open the Apps Script editor

Inside your new spreadsheet, click the menu:

```
Extensions → Apps Script
```

A new tab opens with a code editor. You'll see a default empty function — **delete it**.

### Step 3 — Add the server code

1. In the editor, make sure you're in the file called `Code.gs` (it's selected by default on the left panel)
2. Delete any existing content
3. Copy the entire content of [`Code.gs`](./Code.gs) from this repository
4. Paste it into the editor

### Step 4 — Add the HTML file

1. In the left panel, click the **+** icon next to "Files"
2. Select **HTML**
3. Name it exactly `index` (without any extension — Apps Script adds `.html` automatically)
4. A new tab opens with default HTML content — **delete it**
5. Copy the entire content of [`index.html`](./index.html) from this repository
6. Paste it into the editor

### Step 5 — Save the project

Press **Ctrl + S** (or **Cmd + S** on Mac), or click the floppy disk icon in the toolbar.

### Step 6 — Deploy as a web app

1. Click **Deploy** in the top-right corner
2. Select **New deployment**
3. Click the gear icon ⚙️ next to "Select type" and choose **Web app**
4. Fill in the settings:
   - **Description:** anything you want (e.g. *v1*)
   - **Execute as:** `Me`
   - **Who has access:** `Anyone` (this makes it publicly accessible — no Google login required)
5. Click **Deploy**

### Step 7 — Authorize the script

The first time you deploy, Google will ask for permission to let the script access your spreadsheet.

1. Click **Authorize access**
2. Choose your Google account
3. You may see a warning: *"Google hasn't verified this app"* — this is normal for personal scripts
4. Click **Advanced** → **Go to [your project name] (unsafe)**
5. Click **Allow**

### Step 8 — Copy and share the URL

After authorization, you'll see a screen with a **Web app URL** that looks like:

```
https://script.google.com/macros/s/AKfycb.../exec
```

**That's your app.** Copy the link and share it with your friends — that's all they need.

> The sheet and the data live in your Google Drive. Your friends don't need a Google account to use the app.

---

## How to update the code

When the code in this repository changes, you need to:

1. Copy the updated file content (e.g. `index.html`)
2. Open your Apps Script project (from the spreadsheet: **Extensions → Apps Script**)
3. Select the corresponding file tab
4. Replace the content and save
5. Click **Deploy → Manage deployments**
6. Click the pencil ✏️ icon on your existing deployment
7. Change **Version** from the current one to **"New version"**
8. Click **Deploy**

The URL stays the same — no need to re-share it.

---

## Project structure

```
esame-domande/
├── Code.gs          # Server-side: reads and writes to Google Sheets
├── index.html       # Client-side: UI (Alpine.js + Tailwind CSS)
├── appsscript.json  # Apps Script manifest (used with clasp CLI)
└── README.md
```

### Tech stack

| Layer | Technology |
|---|---|
| Backend | Google Apps Script (V8 runtime) |
| Database | Google Sheets |
| Frontend | HTML + [Alpine.js](https://alpinejs.dev) + [Tailwind CSS](https://tailwindcss.com) |
| Hosting | Google Apps Script Web App |

---

## Data schema

The app automatically creates a sheet named **Domande** with these columns:

| Column | Description |
|---|---|
| `id` | UUID generated at insert time |
| `timestamp` | ISO 8601 date of submission |
| `materia` | Subject / course name |
| `domanda` | The exam question |
| `risposta` | Optional answer |
| `sessione` | Exam session label (e.g. "June 2026") |
| `nome` | Name of who submitted the question |

---

## Contributing

Pull requests are welcome. For major changes, open an issue first.

To add a new language, add a new key to the `LANGS` object in `index.html` following the existing pattern, and add its `<option>` to the language selector.

---

## License

[MIT](./LICENSE) — use it, fork it, share it.
