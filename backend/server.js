const express = require('express')
const app = express()
const port = 3333
const fs = require("fs");
const cors = require('cors')
const testFolder = "C:/Users/lbezerrs/Documents";

const dados = []

app.use(cors())

fs.readdir(testFolder, (err, files) => {
  files.forEach(file => {
    Array.from(file)
    dados.push(file);
  })
  console.log(dados);
});
const rota = express.Router()

app.get('/', (req, res) => {
  res.send(`${dados}`)
})
app.listen(port, () => {

console.log(`Servidor rodando em http://localhost:${port}`)
console.log('Para derrubar o servidor: ctrl + c');
})

app.use(express.json())

module.exports = rota