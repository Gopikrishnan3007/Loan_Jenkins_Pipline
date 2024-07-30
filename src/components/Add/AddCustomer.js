import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Add.css";
import Header from "../Nav/Header";

function Addcustomer() {
  const [records, setRecords] = useState([]);
  const [data, setData] = useState([])
  const [customerNameError, setCustomerNameError] = useState('');
  const [customerMobileNoError, setcustomerMobileNoError] = useState('');
  const [accountNumberError, setaccountNumberError] = useState('');


  const [inputData, setInputData] = useState({
    customerName: "",
    customerAddress: "",
    customerMobileNo: "",
    date: "",
    accountNumber: "",
    loan:
    {
      loanId: "",
      loanAmount: "",
      loanName: "",
      principalAmount: "",
      interestAmount: ""

    }

  });
  // useEffect(() => {
  //   loadData();
  // }, []);

  // const loadData = async () => {
  //   await axios.get("http://localhost:8005/loan/getLoanid")
  //     .then((res) => {
  //       console.log(res.data);
  //       setRecords(res.data);
  //       return res.data;
  //     })
  //     .catch((err) => console.error(err));
  // };


  const naviget = useNavigate();

  let handleChange = (e) => {
    if (e.target.name === "loanId") {
      console.log(e.target.value);
      const selectedRecordId = e.target.value;
      axios
        .get(`http://localhost:8005/loan/` + selectedRecordId)
        .then((response) => {
          setInputData((inputData) => ({
            ...inputData, loan: response.data
          }));

        })
    };
  }

  let handleSubmit = (e) => {
    e.preventDefault();
    let result = validateValues(inputData);
    setSubmitting(true);



    if (result === true) {
      axios
        .post("http://localhost:8005/customer", inputData)
        .then((res) => {
          alert("Data added Successfully");
          naviget("/View");
          console.log(res.data);
        })
        .catch((err) => console.log(err));
    } else {
      // alert("Please Enter the Valid Inputs!!!");
    }
  };

  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  const validateValues = (inputData) => {

    let isValid = true;

    const regexLettersOnly = /^[A-Za-z ]+$/;
    const regexNumbersOnly = /^[0-9+]+$/;
    const regexNumbersOnly1 = /^[0-9]+$/;


    if (inputData.customerName.length === 0) {
      alert("Please enter Customer Name !!! ");
      return false;
    } 
    if (!regexLettersOnly.test(inputData.customerName)) {
      setCustomerNameError('Name should contain only letters');
      isValid =  false;
    } else {
      setCustomerNameError('');
    }
    
    if (inputData.customerAddress.length === 0) {
      alert("Please enter Customer Address  !!! ");
      return false;
    } 
    if (inputData.customerMobileNo.length === 0) {
      alert("Please enter Customer Mobile Number  !!!");
      return false;
    }
    if (!regexNumbersOnly.test(inputData.customerMobileNo)) {
      setcustomerMobileNoError('Enter a valid Mobile Number');
      isValid = false;
    } 
    else {
      setcustomerMobileNoError('');
    }
    if (inputData.date.length === 0) {
      alert("Please Select Date  !!!");
      return false;
    }
    if (inputData.accountNumber.length === 0) {
      alert("Please enter Account Number  !!!");
      return false;
    }  
    if (!regexNumbersOnly1.test(inputData.accountNumber)) {
      setaccountNumberError('Enter a valid Account Number');
      isValid = false;
    } 
    else {
      setaccountNumberError('');
    }
    
      return isValid;
  };

  return (
    <>
    <div>
      <Header />
    </div>
    <div class="body4">      
        <div class="cards">
        <form onSubmit={handleSubmit} >
          <h2 id="align">Add New customer Data</h2>
          <div>
            <lable htmlFor="customerName" role="customername">Customer Name</lable>
            <input
              type="text"
              name="customerName"
              className="form-control"
              placeholder="Enter Customer Name" 
              onChange={(e) =>
                setInputData({ ...inputData, customerName: e.target.value })
              }
            />
            {customerNameError && <small className="text-danger">{customerNameError}</small>}
          </div>
          


          <div>
            <lable htmlFor="customerAddress"role="address">Address :</lable>
            <input
              type="text"
              name="customerAddress"
              className="form-control"
              placeholder="Enter Customer Address"
              onChange={(e) =>
                setInputData({ ...inputData, customerAddress: e.target.value })
              }
            />
          </div>

          <div>
            <lable htmlFor="customerMobileNo"role="customerMobileNo">Mobile No :</lable>
            <input
              type="text"
              name="customerMobileNo"
              className="form-control"
              placeholder="Customer Mobile No"
              onChange={(e) =>
                setInputData({ ...inputData, customerMobileNo: e.target.value })
              }
            />
            {customerMobileNoError && <small className="text-danger">{customerMobileNoError}</small>}
          </div>
          


          <div>
            <lable htmlFor="date" role="date">Date :</lable>
            <input
              type="date"
              name="date"
              className="form-control"
              placeholder="DD/MM/YYYY"
              onChange={(e) =>
                setInputData({ ...inputData, date: e.target.value })
              }
            />
          </div>
          <div>
            <lable htmlFor="accountNumber" role="accountNumber">Account Number :</lable>
            <input
              type="text"
              name="accountNumber"
              className="form-control"
              placeholder="Account Number"
              onChange={(e) =>
                setInputData({ ...inputData, accountNumber: e.target.value })
              }
            />
          {accountNumberError && <small className="text-danger">{accountNumberError}</small>}

          </div>

          
          


          <br />
          <div>
            <label htmlFor="loanId" role="loanId">loan Id :</label>

            <select
              class="form-select select"
              required="required"
              name="loanId"
              title="Select loan ID "
              onChange={handleChange}
            >
              <option name="loanId" selected="selected">
                Select One
              </option>
              {records.map((items) => (
                <option value={items} key={items}>
                  {items}
                </option>
              ))}
            </select>
          </div>
          <br />
          <center><button className="btn btn-primary">Submit</button></center>
        </form>
      </div>
    </div>
    </>
  );
}

export default Addcustomer;