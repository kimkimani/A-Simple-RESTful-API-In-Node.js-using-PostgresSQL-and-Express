const express = require("express");

const router = express.Router();

const Todo = require('../controllers/Todo');

//Get all todos.
router.get('/', async (req,res) => {

    let todos = await new Todo().getTodos();

    return res.render('home',{
        todos
    });

});


//Create a todo.
router.post('/todo', async (req,res) => {

    let {title} = req.body;

    await new Todo().createTodo({title},res);

    return res.redirect('/')

});

//Update a todo.
router.put('/todos/:todoId', async (req,res) => {

    let {todoId} = req.params;

    await new Todo().updateTodo(todoId,res);

    let todos = await new Todo().getTodos();

    return res.render('home',{
        todos
    });

});

//Delete a todo.
router.delete('/todos/:todoId', async (req,res) => {

    let {todoId} = req.params;

    await new Todo().deleteTodo(todoId);

    let todos = await new Todo().getTodos();

    return res.render('home',{
        todos
    });
    
});

module.exports = router;