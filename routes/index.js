const express = require('express');
const router = express.Router();

// Controllers
const todosController = require('../app/controllers/todosController');


// Validators
const todoValidator = require('../app/middleware/validator/todo.validator');

module.exports = app => {
    
    // Routes Todos
    router.get('/todos/get', todosController.read);
    router.get('/todos/todo-read/:id', [ todoValidator.idParamCheck ], todosController.readOne);
    router.post('/todos/todo-create', [ todoValidator.createCheck ], todosController.create);
    router.put('/todos/todo-update', [ todoValidator.updateCheck ], todosController.update);
    router.put('/todos/todo-complete', [ todoValidator.completeCheck ], todosController.complete);
    router.delete('/todos/todo-delete/:id', [ todoValidator.idParamCheck ], todosController.delete);

    app.use(router);
}