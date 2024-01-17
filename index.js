const mongoose = require('mongoose');
// const User = require('./models/user');
// const Todo = require('./models/todo');
// const userController = require('./controllers/UserController');
// const todoController = require('./controllers/TodoController');

const express = require('express');
const app = express();
const userRoute= require('./routes/userRoute');
const todoRoute = require('./routes/todoRoutes')
const port = 3000;

mongoose.connect('mongodb://127.0.0.1:27017/Hana').then(()=>{
    console.log("ya5ty ya5ty :>")
}).catch(err=>{
    console.log(err);
})

app.use(express.urlencoded({extended:true}));
app.use('/user', userRoute);
app.use('/todos',todoRoute)
app.listen(port, ()=> console.log(`my server is listening ${port}!`))


// userController.Register('HanaRamadan', '124578', 'Hana', 25);
// userController.Register('ُEsraa', '55555', 'Esraa', 23);
// userController.Register('Ahmed', '124578', 'Hana', 25);
// userController.Register('3elaaa', '9999', 'Alaa', 25);
// userController.login('HanaRamadan', '124578');
// userController.getAllUsers();
// userController.editUser('Ahmed', 'عباس');
// userController.deleteUser('HanaRamadan');
// todoController.createTodo('HanaRamadan', 'prayFirst','888');
// todoController.createTodo('Ahmed', 'Study ya 3m','8945');
// todoController.editTodo()

