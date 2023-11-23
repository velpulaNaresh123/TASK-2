import EmployeeDetailsModel from "../model/Schema";
import { employeeType } from "../Types/Types";

export const saveEmployeeDetails=async(data:employeeType)=>{
    const res= new EmployeeDetailsModel(data)
    return await res.save();
}
export const getAllEmployee=async()=>{
     return  await EmployeeDetailsModel.find()
}
export const deleteEmployeeDetails=async(id:String)=>{

    return await EmployeeDetailsModel.deleteOne({_id:id}) 
}