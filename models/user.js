const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    username:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    firstName:{
        type: String,
        // required: true,
        minLength: 3,
        maxLength: 15
    },
    age:{
        type: Number,
        minLength: 13
    }
})

const User = mongoose.model('User',userSchema);
module.exports = User;