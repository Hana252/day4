const userController = require('../controllers/UserController');
const todoController = require('../controllers/TodoController')
const express = require ('express');
const route = express.Router();
// const multer = require('multer');
const bcrypt = require('bcrypt'); 

route.get('/', function(req, res){ //done
    res.send('first step is done');
})
route.post('/register', async function(req, res){ //done
    const {username, password} = req.body;
    bcrypt.hash(password, 10, async function(err, hash){
        const data = await userController.Register(username, hash);
        console.log(data);
        res.send("فل اوي ")
    })
})


route.post('/login', async function(req, res){
    try{
        const { username, password } = req.body;
        const user1 = await user.findOne({ username: username });
        if(user1){
            const matchUser = await bcrypt.compare(password, user1.password);
            if(matchUser){
                const user = await userController.login(username, password);
                console.log("نورت بيتك");
                res.json({
                    message: "logged in successfully",
                    username: user.username
                    // todos: user.todos
                });
            }else{
                res.status(401).json({ error: "Invalid credentials" });
            }
        }else{
            res.status(401).json({ error: "Invalid credentials" });
        }
    }catch(err){
        res.status(400).send(err);
    }
});




// route.post('/login', async function(req, res){ //done
//     try{
//         const { username, password } = req.body;
//         const user1= await user.findOne({username:username});
//         const matchUser= bcrypt.compare(password,user1.password)
//         if(matchUser){
//         const user = await userController.login(username, password);
//         console.log("نورت بيتك");
//         }
        // if(user){
        //     // const todos = await todoController.getTodos(user._id);
        //     // const todos = await todoController.getTodos(_id);
        //     res.json({
        //         message: "logged in successfully",
        //         username: user.username,
        //         todos: todos
        //     });
        // }
//         else{
//             res.status(401).send(err);
//         }
//     }catch(err){
//         res.status(400).send(err);
//     }
// });

route.get('/getUsers', async function(req, res){// done done done

    try{
        const data = await userController.getAllUsers();
        if(data != "err"){
            res.json({
                data: data,
                message: "فل",
                status: 200
            })
        }else{
            res.send("It is not exist");
        }

    }catch(err){
        console.log(err)

    }
})

// route.patch('/users/:id', async function(req, res){
//     try{
//         const { id } = req.params;
//         const { firstName, lastName } = req.body;
//         const updatedUser = await userController.editUser(id, { firstName, lastName });
//         if(updatedUser){
//             res.json({
//                 message: "user was edited successfully",
//                 user: updatedUser
//             });
//         }else{
//             res.status(404).json({ error: "User not found" });
//         }
//     }catch(err){
//         res.status(400).json({ error: err.message });
//     }
// });



module.exports= route;