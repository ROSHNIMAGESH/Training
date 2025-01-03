var express = require('express')
var app = express()
const PORT = 3001
app.get('/',(req,res)=>{
    res.send("Welcome to backend server")
})
app.get('/json',(req,res)=>{
    res.json({server:"Welcome to backend",url:"localhost",port:PORT})
})
app.get('/static',(req,res)=>{
    res.sendFile('C:/Users/roshn/OneDrive/Documents/FullStack_Training/Fullstack_Backend/index.html')
})
app.listen(PORT,()=>{
    console.log(`Backend Server Started\nUrl: http://localhost:${PORT}`);
})