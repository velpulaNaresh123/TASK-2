import axios from "axios";
import { useState } from "react";
import EmployeeInpute from "./components/EmployeeInputs";
import { EmpDetailsType } from "./store/EmployeeStore";
import DisplayEmpDetails from "./components/DisplayEmpDetails";
function App() {
  const [allEmployees, setAllEmployees] = useState<EmpDetailsType[]>([]);
  console.log(allEmployees);
  const handleAddEmpDetails = async (EmpObj: EmpDetailsType) => {
    await axios.post("http://localhost:7000/emp/post", EmpObj);
    getAllEmpValues();
  };
  const getAllEmpValues = async () => {
    const details = await axios.get("http://localhost:7000/emp/getdata");
    setAllEmployees(details.data);
    console.log(details.data);
  };
  const deleteRec = async (element: string) => {
    await axios.delete(`http://localhost:7000/emp/deleteonerec/${element}`);
    getAllEmpValues();
  };

  return (
    <>
      <EmployeeInpute addEmpDetails={handleAddEmpDetails}></EmployeeInpute>
      <DisplayEmpDetails
        allEmployees={allEmployees}
        deleteHandle={deleteRec}
      ></DisplayEmpDetails>
    </>
  );
}

export default App;
