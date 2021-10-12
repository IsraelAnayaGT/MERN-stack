/*  crearemos las funciones que ejecutara el servidor cuando un url es visitada*/
const notesCtrl = {};

const Note = require("../models/Note");

//almacena
notesCtrl.getNotes = async (req, res) => {
  const notes = await Note.find(); // [{}, {}, {}]
  res.json(notes);
};

notesCtrl.createNote = async (req, res) => {
  const { title, content, date, author } = req.body;
  const newNote = new Note({
    title: title,
    content: content,
    date: date,
    author: author,
  });
  await newNote.save();
  res.json({ message: "Note saved" });
};

notesCtrl.getNote = async (req, res) => {
  const note = await Note.findById(req.params.id);
  console.log(note);
  res.json(note);
};

notesCtrl.updateNote = async (req, res) => {
  const { title, content, author } = req.body;
  await Note.findByIdAndUpdate(
    { _id: req.params.id },
    {
      title,
      content,
      author,
    }
  );
  res.json({ message: "Note Update" });
};

notesCtrl.deleteNote = async (req, res) => {
  await Note.findByIdAndDelete(req.params.id);
  res.json({ message: "Note Deleted" });
};

module.exports = notesCtrl;
