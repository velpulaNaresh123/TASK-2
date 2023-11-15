import React, { useEffect, useRef, useState } from "react";
import axios from 'axios';
//import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
// ... (your imports)

const Postdata = () => {
  // ... (your existing code)
  const [result, setResult] = useState([]);
  const [spamsg, setSpamsg] = useState(null);
  const names = useRef(null);
  const currentAccountType = useRef(null);
  const savingsAccountType = useRef(null);
  const accbalance = useRef(null);

  const getdata = async () => {
    try {
      const data = await axios.get("http://localhost:8000/getallaccounts");
      const d = data.data;
      console.log(d);
      setResult(d);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const post_data = async () => {
    const accountType = currentAccountType.current.checked
      ? currentAccountType.current.value
      : savingsAccountType.current.value;

    const res = await axios.post("http://localhost:8000/post", {
      holder: names.current.value,
      type: accountType,
      balance: accbalance.current.value,
    }
      
    );
    // console.log(res)

    // setResult(res)
  };
  const activateacc=async()=>{
      const activate=await axios.put()
  }



  const handleAccountTypeChange = () => {
    const selectedAccountType = currentAccountType.current.checked
                         ? currentAccountType.current.value
                        : savingsAccountType.current.value;
              setActyp(selectedAccountType);

  };
  const activate=async(id)=>{
    const active=await axios.put(`http://localhost:8000/accounts/${id}/activate`)
          await getdata()
          setSpamsg(active.data)
     console.log(active) 

  }


  return (
    <>
      <div className="container mt-5">
        <h1>Enter The Details</h1>
        <table className="table">
          <thead>
            <tr>
              <td>Account Holder Name</td>
              <td>
                <input type="text" className="form-control" ref={names} />
              </td>
            </tr>
            <tr>
              <td>Account type</td>
              <td>
                <label className="form-check-label">
                  <input
                    type="radio"
                    value="current"
                    name="opt"
                    className="form-check-input"
                    ref={currentAccountType}
                    onChange={handleAccountTypeChange}
                  />
                  Current
                </label>
                <label className="form-check-label">
                  <input
                    type="radio"
                    value="savings"
                    name="opt"
                    className="form-check-input"
                    ref={savingsAccountType}
                    onChange={handleAccountTypeChange}
                  />
                  Savings
                </label>
              </td>
            </tr>
            <tr>
              <td>Account Balance</td>
              <td>
                <input type="number" className="form-control" ref={accbalance} />
              </td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <button className="btn btn-primary" onClick={post_data}>Submit</button>
              </td>
              <td>
                <button className="btn btn-secondary" onClick={getdata}>GET All Records</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <br /><br />

      <div className="container mt-5">
        <table className="table" border={2} cellPadding={6} cellSpacing={10}>
          <thead>
            <tr>
              <td>Account Number</td>
              <td>Account Holder Name</td>
              <td>Account Type</td>
              <td>Account Status</td>
              <td>Account Balance</td>
              <td>Activate Account</td>
            </tr>
          </thead>
          <tbody>
            {result.map((element, index) => {
              return (
                <tr key={index}>
                  <td>{element.accno}</td>
                  <td>{element.names}</td>
                  <td>{element.acctype}</td>
                  <td>{element.status}</td>
                  <td>{element.accbalance}</td>
                  <td><button className="btn btn-success" onClick={()=>activate(element.accno)}>Activate</button>
                  </td>
                  
                </tr>
              );
            })}
          </tbody>
        </table>
        {spamsg && <span style={{ color: 'green' }}>{spamsg}</span>}
      </div>
    </>
  );
};

export default Postdata;
