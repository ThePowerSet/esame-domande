# Domande Esame 📚

Web app per raccogliere e condividere le domande degli esami universitari con i tuoi amici.

**Funzionalità:**
- Aggiungi domande con materia, testo, risposta opzionale, sessione e nome
- Filtra per materia o cerca per testo
- Tutte le domande in un Google Sheet condiviso
- Funziona su mobile e desktop

---

## Setup (5 minuti, una volta sola)

### 1. Crea il Google Sheet

Vai su [sheets.google.com](https://sheets.google.com) e crea un nuovo foglio. Dagli un nome tipo **"Domande Esame"**.

### 2. Apri l'editor di Apps Script

Nel foglio aperto: menu **Estensioni → Apps Script**

Si apre l'editor. Cancella tutto il codice di default che c'è.

### 3. Incolla il codice server (`Code.gs`)

Copia il contenuto del file `Code.gs` di questa repo e incollalo nell'editor.

### 4. Aggiungi il file HTML

Nell'editor di Apps Script:
- Clicca **+** accanto a "File" nel pannello di sinistra
- Seleziona **HTML**
- Chiamalo esattamente `index` (senza estensione, la aggiunge lui)
- Cancella tutto il contenuto e incolla il contenuto del file `index.html` di questa repo

### 5. Salva e deploya

1. Clicca **Salva** (icona del dischetto o Ctrl+S)
2. Clicca **Distribuisci → Nuova distribuzione**
3. Tipo: **App web**
4. Esegui come: **Me**
5. Chi ha accesso: **Chiunque** (anche anonimi)
6. Clicca **Distribuisci**
7. Copia il link che appare — quello è l'URL da condividere con i tuoi amici!

> La prima volta ti chiede di autorizzare lo script ad accedere al tuo Google Sheet. Clicca "Avanzate" → "Vai a [nome script]" → "Consenti".

---

## Come aggiornare

Se modifichi il codice, devi fare una **nuova distribuzione**:
- Distribuisci → Gestisci distribuzioni → Modifica → Versione: "Nuova versione" → Aggiorna

---

## Struttura

| File | Descrizione |
|------|-------------|
| `Code.gs` | Backend: legge/scrive su Google Sheets |
| `index.html` | Frontend: UI con Alpine.js + Tailwind CSS |
| `appsscript.json` | Configurazione del progetto GAS |
