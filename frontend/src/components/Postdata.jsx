import React, { useEffect, useRef, useState } from "react";
import axios from 'axios'
// ... (your imports)

const Postdata = () => {
  const [result, setResult] = useState([]);
  const [actyp, setActyp] = useState();
  const names = useRef(null);
  const currentAccountType = useRef(null);
  const savingsAccountType = useRef(null);
  const accbalance = useRef(null);

  const post_data = async () => {
    const accountType = currentAccountType.current.checked
      ? currentAccountType.current.value
      : savingsAccountType.current.value;

    const res = await axios.post("http://localhost:8000/post", {
      holder: names.current.value,
      type: accountType,
      balance: accbalance.current.value,
    });
    // console.log(res)

    // setResult(res)
  };

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

  const handleAccountTypeChange = () => {
    const selectedAccountType = currentAccountType.current.checked
                         ? currentAccountType.current.value
                        : savingsAccountType.current.value;
              setActyp(selectedAccountType);

  };

  return (
    <>
      <div>
        <h1>Enter The Details</h1>
        <table>
          <thead>
            <tr>
              <td>Account Holder Name</td>
              <td>
                <input type="text" ref={names}></input>
              </td>
            </tr>
             <tr>
              <td>Account type</td>
              <td>
                <label>
                  <input
                    type="radio"
                    value="current"
                    name="opt"
                    ref={currentAccountType}
                    onChange={handleAccountTypeChange}
                  />
                  Current
                </label>
                <label>
                  <input
                    type="radio"
                    value="savings"
                    name="opt"
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
                <input type="number" ref={accbalance}></input>
              </td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <button onClick={post_data}>Submit</button>
              </td>
              <td>
                <button onClick={getdata}>GET All Records</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div><br></br><br></br><br></br>

      <div>
        <table border={2} cellPadding={6} cellSpacing={10}>
          <thead>
            <tr>
              <td>Account Number</td>
              <td>Account Holder Name</td>
              <td>Account Type</td>
              <td>Account Status</td>
              <td>Account Balance</td>
            </tr>
          </thead>
          <tbody>
            {result.map((element, index) => {
              return (
                <>
                  <tr key={index}>
                    <td>{element.accno}</td>
                    <td>{element.names}</td>
                    <td>{element.acctype}</td>
                    <td>{element.status}</td>
                    <td>{element.accbalance}</td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Postdata;
