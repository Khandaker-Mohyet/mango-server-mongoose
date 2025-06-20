import express from "express"
import cors from "cors"
import config from "./config"
import mongoose from "mongoose"
import { userRouter } from "./modules/user/user.route"
import { mangoRouter } from "./modules/mango/mango.route"

const app = express()

app.use(cors())
app.use(express.json())

app.use(userRouter)
app.use(mangoRouter)


app.get("/",(req,res)=>{
    res.send({success: true, message:"Khandaker Mohyet Work station"})
})



app.listen(config.port,()=>{
    console.log(`Khandakers Server Running successfully`)
})


async function server(){
    try {
        
        await mongoose.connect(config.database_url!)

        console.log(`mongoose connected on port ${5000}`)
    } catch (error) {
        console.log(error)
    }
}

server()