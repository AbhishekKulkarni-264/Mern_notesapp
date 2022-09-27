const express=require("express")
const notes = require("./data/notes")
const dotenv=require('dotenv')

const app=express()



const PORT=process.env.PORT||3000


app.get("/",(req,res)=>{
    res.send("hello there")
})


app.get('/api/notes',(req,res)=>{
res.send(notes)
}
)


app.get('/api/notes/:id',(req,res)=>{
     
    const note= notes.find((n)=>  n._id === req.params.id );
    res.send(note)
     
    }
    )




app.listen(PORT,()=>{
    console.log(`server started on ${PORT}`);
})