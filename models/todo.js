const mongoose = require('mongoose');

const todoSchema = mongoose.Schema({
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    title:{
        type: String,
        required: true,
        minLength: 5,
        maxLength: 20,
    },
    status: { 
        type: String,
        default: 'to-do' 
    },
    tags: {
         type: String,
         maxLength: 10 
        },
    createdAt: { 
        type: Date, 
        default: Date.now 
    },

})

const Todo = mongoose.model('Todo',todoSchema);
Todo.createIndexes( { title : 1 } );
module.exports = Todo;