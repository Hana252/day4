// const todo = require('../models/todo');
// const user = require('../models/user');
const createTodo = async (_userId, _title, _tags) => {
    try {
        const data = await todo.create({ userId: _userId, title: _title, tags: _tags });
        // const data = await todo.create({ userId: user._id, title: _title, tags: _tags });
        //  await User.findOne({ username: _username });
        console.log(data)
    } catch (err) {
        console.log(err);
    }
};
  
  const getTodos = async (_userId) => {
    try {
      const data = await todo.find({ userId: _userId });
  
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };
  
  const editTodo = async (_todoId, _editData) => {
    try {
      const updatedTodo = await todo.findOneAndUpdate({ _id: _todoId },{ title:_editData}, { new: true });
  
      console.log('Todo edited successfully', updatedTodo);
    } catch (err) {
      console.log(err);
    }
  };
  
  const deleteTodo = async (_todoId) => {
    try {
      await todo.findOneAndDelete({ _id: _todoId });
  
      console.log('Todo deleted successfully');
    } catch (err) {
      console.log(err);
    }
  };
  
module.exports = { createTodo, getTodos, editTodo, deleteTodo};
  