const express = require('express')
const db = require('./db')
const app = express()
const AlunosDatabase = db.AlunosDatabase()

app.use(express.json())


app.get('/teste',async (req, res) => {
  res.status(200).send(await AlunosDatabase.list())
})

app.get('/teste/:id', async (req, res) => {
    res.status(200).send(await AlunosDatabase.get(req.params.id));
});


app.post('/teste', async (req, res) => {
    res.status(200).send(await AlunosDatabase.insert(req.body))
})

app.put('/teste/:id', async (req, res) => {
    res.status(200).send(await AlunosDatabase.update(req.body, req.params.id))
})

app.delete('/teste/:id', async (req, res) => {
    res.status(200).send(await AlunosDatabase.del(req.params.id))
})

app.listen(5000,() => {
    console.log('servidor rodando')
})