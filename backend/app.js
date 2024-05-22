const express= require("express");
const app= express();
require("./connection/connection");
app.listen(1000,()=>{
    console.log("Server Started");
})