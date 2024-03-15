import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app=express()
console.log("vishal verma is here ")
app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true
}))
app.use(express.json({limit:"16kb"}))
app.use(express.urlencoded({extended:true}))
app.use(express.static("public"))
app.use(cookieParser()) 

app.get("/",(req,res)=>{
    res.send("server is ready to use")
})

export default app