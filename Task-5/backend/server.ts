import mongoose from "mongoose";
import express from 'express'
import cors from 'cors'
import router from "./controller/EmployeeController";
const app=express()
app.use(express.json())
app.use(cors())
app.use('/emp',router)
mongoose.connect(`mongodb://127.0.0.1:27017/EmpDetailsTask`).then(()=>{console.log('DB connected')})

app.listen(7000,()=>{console.log('Server Running')})