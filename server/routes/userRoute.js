const express=require('express');

const {create,getAllUser,getUserById,updateUser,deleteUser} = require("../controller/usercontroller");

const route = express.Router();

route.post("/user",create);
route.get("/users",getAllUser);
route.get("/users/:id",getUserById);
route.put("/update/user/:id",updateUser);
route.delete("/delete/user/:id",deleteUser);



module.exports=route;