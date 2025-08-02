const express=require('express');
const mongoose= require('mongoose')
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const route=require("./routes/userroute.js");
const cors=require('cors');

const app= express();

app.use(express.json());
app.use(cors());
dotenv.config();


const PORT =process.env.POR || 7000;
const MONGOURL= process.env.MONGO_URL;

mongoose.connect(MONGOURL)
.then(()=>{
    console.log("db connected");
    app.listen(PORT,()=>{
        console.log(`server is running on ${PORT}`);
    })
})
.catch((err)=>{
    console.log(err);
})

app.use("/api",route);