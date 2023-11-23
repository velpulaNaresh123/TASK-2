import React from 'react'
import ReactDOM from 'react-dom/client'
//import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import EmployeeInpute from './components/EmployeeInputs.tsx'
import DisplayEmpDetails from './components/DisplayEmpDetails.tsx'
import ButtonAppBar from './components/Header.tsx'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ButtonAppBar></ButtonAppBar>
    <BrowserRouter>
    
    <center>
    <EmployeeInpute></EmployeeInpute>
    <DisplayEmpDetails></DisplayEmpDetails>
    </center>
    </BrowserRouter>
  </React.StrictMode>,
)
