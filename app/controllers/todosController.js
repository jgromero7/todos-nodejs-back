const todosController = {};

// Import Models
const Todos = require('../models/Todos');

todosController.read = async (req, res) => {

    await Todos.find({}, (err, todos) => {

        // If an error occurred while querying - return errors
        if (err) return res.status(500).send({ message: 'Internal Error Server', data: null });
        
        // Returns Data
        return res.status(200).send({ message: 'Read Todos Successfuly', data: todos });
    });
}

todosController.readOne = async (req, res) => {
    // Destructuring Data
    const { id } = req.params;

    try {
        // Search ID
        existID = await Todos.findOne({ _id: id });

        // If exist ID return errors
        if (!existID) return res.status(404).send({ message: 'The id not found', data: null});
        
    } catch (err) {
        console.error(err);
        return res.status(500).send({ message: 'Internal Error Server', data: null });
    }

    await Todos.findOne({ _id: id }, (err, todo) => {

        // If an error occurred while querying - return errors
        if (err) return res.status(500).send({ message: 'Internal Error Server', data: null });
        
        // If task it has no value - return errors
        if (!todo) return res.status(404).send({ message: 'ID todo not found', data: null });
        
        // Returns Data
        return res.status(200).send({ message: 'Read Todo By ID Successfuly', data: todo });
    });
};

todosController.create = async (req, res) => {
    // Destructuring Data
    const { task } = req.body;

    try {
        // Search For Task
        existTask = await Todos.findOne({ task });

        // If exist task return errors
        if (existTask) return res.status(409).send({ message: 'The task is already exist', data: null});
        
    } catch (err) {
        console.error(err);
        return res.status(500).send({ message: 'Internal Error Server', data: null });
    }

    // Create Object    
    const newTodo = new Todos({ task });
    await newTodo.save((err, todo) => {

        // If an error occurred while querying - return errors
        if (err) return res.status(500).send({ message: 'Internal Error Server', data: null });

        // Returns Data
        return res.status(200).send({ message: 'Create todo successfuly', data: todo });
    });
};

todosController.update = async (req, res) => {
    // Destructuring Data
    const { id, task } = req.body;

    try {
        // Search ID
        existID = await Todos.findOne({ _id: id });

        // If exist ID return errors
        if (!existID) return res.status(404).send({ message: 'The id not found', data: null});
        
    } catch (err) {
        console.error(err);
        return res.status(500).send({ message: 'Internal Error Server', data: null });
    }

    try {
        // Search For Task
        existTask = await Todos.findOne({ task });

        // If exist task return errors
        if (existTask) return res.status(409).send({ message: 'The task is already exist', data: null});
        
    } catch (err) {
        console.error(err);
        return res.status(500).send({ message: 'Internal Error Server', data: null });
    }

    // Update Register
    await Todos.findByIdAndUpdate({_id: id}, { task }, (err, todo) => {

        // If an error occurred while querying - return errors
        if (err) return res.status(500).send({ message: 'Internal Error Server', data: null });

        // Returns Data
        return res.status(200).send({ message: 'Updated successfuly', data: null });
    });    
};

todosController.complete = async (req, res) => {
    // Destructuring Data
    const { id, isCompleted } = req.body;

    try {
        // Search ID
        existID = await Todos.findOne({ _id: id });

        // If exist ID return errors
        if (!existID) return res.status(404).send({ message: 'The id not found', data: null});
        
    } catch (err) {
        return res.status(500).send({ message: 'Internal Error Server', data: null });
    }

    // Update Register
    await Todos.findByIdAndUpdate({_id: id}, { isCompleted }, (err, todo) => {

        // If an error occurred while querying - return errors
        if (err) return res.status(500).send({ message: 'Internal Error Server', data: null });

        // Returns Data
        return res.status(200).send({ message: 'Complete successfuly', data: null });
    });    
};

todosController.delete = async (req, res) => {
    // Destructuring Data
    const { id } = req.params;

    try {
        // Search ID
        existID = await Todos.findOne({ _id: id });

        // If exist ID return errors
        if (!existID) return res.status(404).send({ message: 'The id not found', data: null});
        
    } catch (err) {
        console.error(err);
        return res.status(500).send({ message: 'Internal Error Server', data: null });
    }

    // Update Register
    await Todos.findByIdAndDelete({_id: id}, (err, todo) => {

        // If an error occurred while querying - return errors
        if (err) return res.status(500).send({ message: 'Internal Error Server', data: null });

        // Returns Data
        return res.status(200).send({ message: 'Deleted successfuly', data: null });
    });
};

module.exports = todosController;