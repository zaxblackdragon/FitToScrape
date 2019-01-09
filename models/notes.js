const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Defines the schema - Note it's an object and the val type are strings
const NoteSchema = new Schema ({
    title: String,
    body: String
});

// Generates the model via mongoose
const Note = mongoose.model("note", NoteSchema);

// Exports the above model
module.exports = Note;