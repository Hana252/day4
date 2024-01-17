const todoController = require('../controllers/TodoController');
const express = require ('express');
const route = express.Router();
// const bcrypt = require('bcrypt'); 


route.post('/todos', async function(req, res){
    try{
        const { username, title, tags } = req.body;
        const newTodo = await todoController.createTodo({
            username,
            title,
            tags
        });

        res.json(newTodo);
    }catch(err){
        res.status(500).json({ error: "السيرفر ف ذمة الله" });
    }
});



route.get('/todos/:userID', async function(req, res){
    try{
        const id = req.params.id;
        const todos = await todoController.getTodos(id);
        if (todos) {
            res.json({ todos });
        } else {
            res.status(404).json({ error: "User not found" });
        }
    }catch(err){
        res.status(500).json({ error: "السيرفر ف ذمة الله" });
    }
});

route.delete('/todos/:id', async function(req, res){
    try{
        const id = req.params.id;
        const deletedTodo = await todoController.deleteTodo(id);
        if (deletedTodo) {
            res.json({ message: "يلا ف داهية" });
        } else {
            res.status(404).json({ error: "اجيبهالك منين دي بالله ما هي مش قاعدة" });
        }
    }catch(err){
        res.status(500).json({ error: "السيرفر ف ذمة الله" });
    }
});

route.patch('/todos/:id', async function(req, res){
    try{
        const id = req.params.id;
        const { title, tags } = req.body;
        const updatedTodo = await todoController.editTodo(id, { title, tags });
        if (updatedTodo) {
            res.json({ message: "غيرتها و اتبطيت !!", todo: updatedTodo });
        } else {
            res.status(404).json({ error: "مفيش يستا" });
        }
    }catch(err){
        res.status(500).json({ error: "السيرفر ف ذمة الله" });
    }
});

module.exports = route;