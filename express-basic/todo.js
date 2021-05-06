const express = require("express");
const app = express();
//express
app.use(express.urlencoded());
app.use(express.json());

let todos = [{
    id:1,
    text :"I need to learn nodeJS",
    status  : false, //not DONE
    timestamp: new Date()
},{
    id:2,
    text :"I need to learn reactJS",
    status  : true, //not DONE
    timestamp: new Date()
}];

app.get("/todos",(req,res)=>{
    res.send(todos);
})

app.delete("/todo/:todoID/",(req,res)=>{
    //console.log("this is also running");
    //console.log("checkout the parameters:",req.params);
    console.log(req.params.todoID);
    todos=todos.filter(e=>e.id!==parseInt(req.params.todoID));//id to delete from todo
    console.log(todos);
    res.sendStatus(200);
})

app.put("/todo/:todoID",(req,res)=>{
   const todos =req.params;
   console.log(req.params.todoID);
   todos= todos.map(e=> {
    if(e.id===parseInt(req.params.todoID)){
        e.text=req.body.text;
        e.timestamp=new Date();
        e.status=req.body.status;

        return e;
    }else{
        return e;
    }
});
console.log(todos)
console

app.post("/todo",(req,res)=>{
    const newTodo = req.body;
    newTodo.timestamp=new Date();
    newNode.id=todos[todos.length-1].id + 1;
    todos.push(newTodo);
    console.log(todos);
    //todos.push(req.body);
    res.status(201).send(todos);
})
//when new todo is added, add a new element to array

//display all todos = GET

//toggel a todo status

//delete a todo

//edit the given todo

app.listen(9999, ()=>{
    console.log("the server is running! ");
})