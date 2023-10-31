require ("dotenv").config();
const cors =require("cors");
const express = require("express");
const connectDB =require("./connectDB")
const Student =require("./models/student")
const app=express();
const PORT =process.env.PORT || 8000;


connectDB();
app.use(cors());
app.use(express.urlencoded( {extended: true}));
app.use(express.json());


app.get("/", (req, res) =>{
    res.json("I can run");
});

app.listen(PORT, ()=>{
    console.log(`server is running on port: ${PORT}`)
})