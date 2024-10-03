const { GoogleSpreadsheet } = require('google-spreadsheet'); 
const { JWT } = require('google-auth-library')
const credenciais = require('./credenciais.json');
const arq = require('./arquivo1.json')


const SCOPES = [
  'https://www.googleapis.com/auth/spreadsheets'
];

const jwt = new JWT({
  email: credenciais.client_email,
  key: credenciais.private_key,
  scopes: SCOPES,
});

async function GetDoc() {
  const doc = new GoogleSpreadsheet(arq.id, jwt)
  await doc.loadInfo()
  return doc
}

async function ReadWorkSheet() {
  let sheet = (await GetDoc()).sheetsByIndex[0]
  let rows = await sheet.getRows()
  let users = rows.map(row => {
    return row.toObject()
  })
  return users
}

async function AddUsers(data = {}) {
  const response = await fetch('https://apigenerator.dronahq.com/api/T6znF0y1/teste',{
    method: 'POST',
    headers:{
      "content-type": "application/json",
    },
    body:JSON.stringify(data),
  })
  return response.json()
}

async function TrackData() {
  let data = await ReadWorkSheet()
  data.map(async (user) => {
    let response = await AddUsers(user)
    console.log(response)
  })
  return console.log('dados copiados com sucesso')
}

TrackData()