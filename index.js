const cors = require('cors')
const express = require('express')
const app = express()
const bodyParser = require('body-parser')

let notes = [{
        "id": 1,
        "content": "HTML is easy",
        "date": "2019-05-30T17:30:31.098Z",
        "important": true
    },
    {
        "id": 2,
        "content": "Browser can execute only Javascript",
        "date": "2019-05-30T18:39:34.091Z",
        "important": false
    },
    {
        "id": 3,
        "content": "GET and POST are the most important methods of HTTP protocol",
        "date": "2019-05-30T19:20:14.298Z",
        "important": false
    },
    {
        "content": "Apples",
        "date": "2019-11-17T15:10:29.169Z",
        "important": false,
        "id": 4
    }
]

// body-parser
app.use(bodyParser.json)

app.get('/', (req, res) => {
    res.send('<h1>Hello World!</h1>')
})

app.get('/notes', (req, res) => {
    res.json(notes)
})

app.post('/notes', (req, res) => {
    const note = req.body

    console.log(note)

    res.json(note);
})

app.get('/notes/:id', (req, res) => {
    const id = Number(req.params.id)
    const note = notes.find(note => note.id === id)

    if(note) {
        res.json(note)
    } else {
        res.status(404).end()
    }
})

app.delete('/notes/:id', (req, res) => {
    const id = Number(req.params.id)
    notes = notes.filter(note => notes.id !== id)
    res.status(204).end()
})

const PORT = 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})