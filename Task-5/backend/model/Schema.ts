import { Schema,model } from "mongoose";
import { employeeType } from "../Types/Types";

const EmployeeDB=new Schema<employeeType>({
    name:{
        type:String,
        required:true
    },
    dept:{
        type:String,
        required:true

    },
    salary:{
        type:Number,
        required:true
    }
})
const EmployeeDetailsModel=model<employeeType>('EmpDetail-task',EmployeeDB)
 export default EmployeeDetailsModel;   