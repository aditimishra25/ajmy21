const express = require("express");
const app = express();
//express
const students={
    "student1":{
        "name": "Aditi",
        "age": 22,
    },
    "student2":{
        "name": "Sid",
        "age": 23,
    },

}

app.get("/student1",(req,res)=>{           //API handler
   res.status(404).send(students.student1) 
})
app.get("/student2",(req,res)=>{
    res.send(students.student2) 
 })

 app.get("/hello",(req,res)=>{
    res.send("helloWorld!")
 })
app.listen(9999, ()=>{
    console.log("the server is running! ");
})