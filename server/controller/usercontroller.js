const User =require('../model/usermodel');


 // create
 const create = async(req,res)=>{
    try {
        const {name,email,address}=req.body;
        const userr= await User.findOne({email});
        if(userr)
            throw new Error("User Already Exists!")
       const newUser= await User.create({
            name,
            email,
            address,
        });

        res.status(201).send("User created Sucessfully");


    } catch (error) {
        res.status(400).send(error.message);
    }
 } 

 const getAllUser=async(req,res)=>{
    try {

        //find the users
        const data = await User.find();

        if(!data || data.length===0)
            throw new Error("No User Exists!");

        res.status(200).send(data);

    } catch (error) {
        res.status(400).send(error.message);
    }
 }

 const getUserById = async(req,res)=>{
    try {
     // id lo
     const id = req.params.id;
     const userExist= await User.findById(id);
    if(!userExist)
        throw new Error("No User Exists!")
    res.status(200).send(userExist);
        
    } catch (error) {
        res.status(400).send(error.message);
    }
 }


 const updateUser= async(req,res)=>{
    try {
        const id = req.params.id;
     const userExist= await User.findById(id);
    if(!userExist)
        throw new Error("No User Exists!");

   const updata= await User.findByIdAndUpdate(id,req.body,{new:true})
        
    res.status(200).send("Updated ");  
    } catch (error) {
        res.status(400).send(error.message);
    }
 }


 const deleteUser = async(req,res)=>{
    try {
         const id = req.params.id;
     const userExist= await User.findById(id);
    if(!userExist)
        throw new Error("No User Exists!");

    await User.findByIdAndDelete(id);
    res.status(200).send("USer Deleted!")
        
    } catch (error) {
         res.status(400).send(error.message);
    }
 }
 module.exports = {
  create,
  getAllUser,
  getUserById,
  updateUser,
  deleteUser,

};
