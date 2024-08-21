const express=require("express")
const app=express();


app.get("/",(req,res)=>{
   return res.status(200).json({
      message: "hello world"
   })
})

app.listen(3000,()=>{
   console.log("server start");
})