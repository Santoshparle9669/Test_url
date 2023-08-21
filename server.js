const express =require('express')
const  todoRouter  = require('./router/todo/todoRouter')
const { connectDB } = require('./config/db_config')
require('dotenv').config()

const app =express()
PORT = process.env.PORT  || 8000

//database connected//
connectDB();

app.use(express.json());
app.use(express.urlencoded({extended:true}))


app.get("/",(req,res)=>{
    res.send("this is my api = santosh parle :")
})
app.use("/api/todos",todoRouter)

app.listen(PORT,()=>{
    console.log(`runing to server this port :- ${PORT}`)
})