import dotenv from "dotenv"
import connectDB from "./db/db.js"
import app from "./app.js"

dotenv.config({path:"./.env"})

connectDB().then(()=>{
    const port =process.env.PORT || 8000;
    app.listen(port,()=>{
     console.log(`server is running at port: ${port}  http://localhost:${port}`)
    })
}).catch((error)=>{
  console.log('mongodb connection failed ',error)
})
