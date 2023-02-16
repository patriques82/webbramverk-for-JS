const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: false }));

const notes = [
  { content: "test1" },
  { content: "test2" }
]

app.get('/', (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
})

app.get('/notes', (req, res) => {
  res.sendFile(__dirname + "/views/notes.html");
});

app.get('/data.json', (req, res) => {
  res.send(notes)
})

app.post('/new_note', (req, res) => {
  notes.push({ content: req.body.note });
  res.redirect('/notes');
})

app.listen(3000, () => console.log(__dirname));