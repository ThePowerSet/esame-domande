const SHEET_NAME = 'Domande';

function doGet() {
  return HtmlService.createHtmlOutputFromFile('index')
    .setTitle('Domande Esame')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL)
    .addMetaTag('viewport', 'width=device-width, initial-scale=1');
}

function getSheetOrCreate_() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
    sheet.appendRow(['id', 'timestamp', 'materia', 'domanda', 'risposta', 'sessione', 'nome']);
    sheet.setFrozenRows(1);
    const header = sheet.getRange(1, 1, 1, 7);
    header.setBackground('#4F46E5').setFontColor('#FFFFFF').setFontWeight('bold');
    sheet.setColumnWidth(4, 350);
    sheet.setColumnWidth(5, 350);
  }
  return sheet;
}

function getQuestions() {
  const sheet = getSheetOrCreate_();
  const data = sheet.getDataRange().getValues();
  if (data.length <= 1) return [];
  return data.slice(1)
    .filter(row => row[0])
    .map(row => ({
      id: String(row[0]),
      timestamp: row[1] ? new Date(row[1]).toISOString() : '',
      materia: String(row[2] || ''),
      domanda: String(row[3] || ''),
      risposta: String(row[4] || ''),
      sessione: String(row[5] || ''),
      nome: String(row[6] || 'Anonimo')
    }))
    .reverse();
}

function addQuestion(data) {
  const sheet = getSheetOrCreate_();
  const id = Utilities.getUuid();
  sheet.appendRow([
    id,
    new Date(),
    (data.materia || '').trim(),
    (data.domanda || '').trim(),
    (data.risposta || '').trim(),
    (data.sessione || '').trim(),
    (data.nome || 'Anonimo').trim()
  ]);
  return { success: true };
}

function deleteQuestion(id) {
  const sheet = getSheetOrCreate_();
  const data = sheet.getDataRange().getValues();
  for (let i = 1; i < data.length; i++) {
    if (String(data[i][0]) === String(id)) {
      sheet.deleteRow(i + 1);
      return { success: true };
    }
  }
  return { success: false };
}
