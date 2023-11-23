//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
//import './App.css'
import DisplayEmpDetails from './components/DisplayEmpDetails'
import EmployeeInpute from './components/EmployeeInputs'
import ButtonAppBar from './components/Header'
import {Routes,Route} from 'react-router-dom'

//import EmployeeInpute, { EmpInterface } from './components/EmployeeInputs'
//import EmployeeInpute from './components/EmployeeInputs'

function App() {
 // const [count, setCount] = useState(0)

  //  const handleChange=(input:EmpInterface)=>{
  //   const inputdata=input;
  //  // console.log(inputdata)
  //  }
   

  return (
    <>
     <ButtonAppBar></ButtonAppBar>
     
     
            <Routes>                        
            <Route path='/' element={<EmployeeInpute/>} />
            <Route path='/getallEmployees' element={<DisplayEmpDetails></DisplayEmpDetails>} />              
            </Routes>
     
    </>
  )
}

export default App

 
