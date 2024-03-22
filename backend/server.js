import { Express } from "express";

const app=Express();

app.listen.get('/',(req,res)=>{
    res.send("<h2>server is started</h2>")
})

