import  Express  from "express";



const port=8080;
const app=Express();


app.get('/',(req,res)=>{
    res.send("<h2>server is started</h2>")
})
app.get('/about',(req,res)=>{
    res.send('about')
})
app.listen(port,()=>{
    console.log("http://localhost:8080","server is started");
})
