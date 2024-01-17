const User = require('../models/user');
const Register =async(_Username, _password , _firstName )=>{
    try{
        let data = await User.create({
            username:  _Username,
            password: _password,
            firstName: _firstName
        })
        if(data){
            console.log('user was registered successfully')
        }
    }
    catch(err){
        console.log(err);
    }
};
const login = (_Username, _password )=>{
    try{
        let data = User.find({
            username:  _Username,
            password: _password,
        });
        if(data){
            console.log('logged in successfully')
        }else{
            console.log('امشي سجل يالا');
        }
    }catch(err){
        console.log(err)
    }
}

const getAllUsers = async () => {
    try {
      const data = await User.find({}, 'firstName');
      if(data.length != 0){
        return data;
      }
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };
  
//   const deleteUser = async (_Username) => {
//     try {
//       await User.findOneAndDelete({ username: _Username });
  
//       console.log('User deleted successfully');
//     } catch (err) {
//       console.log(err);
//     }
//   };
  
//   const editUser = async (_Username, _editValue) => {
//     try {
//       const updatedUser = await User.findOneAndUpdate({ username: _Username },{ username: _editValue}, { new: true });
  
//       console.log('User was edited successfully', updatedUser);
//     }catch(err) {
//       console.log(err);
//     }
//   };
  

module.exports ={Register, login, getAllUsers}
  // , deleteUser, editUser};
