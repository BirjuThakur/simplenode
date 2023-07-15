const express = require("express");
const app = express();
const port = process.env.PORT || 5000 ;

app.get("/",(req,res)=>{
    res.send("welcome")
})

app.get("user",(req,res)=>{
    res.send("hello user i am working")
})

app.listen(port,()=>{
    console.log(`running on port ${port}`)
})