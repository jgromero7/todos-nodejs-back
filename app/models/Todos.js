const mongoose = require('mongoose');
const { Schema } = mongoose;

// Model Todos
const TodosSchema = new Schema({
    task: { type: String, required: true },
	isCompleted: { type: Boolean, default: false, require: true },
}, { timestamps: true , versionKey: false });

module.exports = mongoose.model('Todos', TodosSchema);