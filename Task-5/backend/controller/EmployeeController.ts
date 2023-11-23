import { Request,Response } from "express";
import express from 'express'
import { saveEmployeeDetails, getAllEmployee, deleteEmployeeDetails } from "../service/EmployeeService";
const router=express.Router()
export default router;
router.post("/post",async(req:Request,res:Response)=>{     
        const data=req.body;
        const resu=await  saveEmployeeDetails(data)
        res.json(resu)
})
router.get('/getdata',async(req:Request, res:Response)=>{
        const AllEmp  = await getAllEmployee()
        res.send(AllEmp)
       
})
router.delete("/deleteonerec/:id",async(req:Request, res:Response)=>{
        try{
            const id=req.params.id;
            await deleteEmployeeDetails(id)
            res.json("Deleted Successfully")
        } 
        catch(err)
        {
            res.json("Failed To Delete")
        }     
    
})

