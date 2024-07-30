import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Add.css";
import Header from "../Nav/Header";

function Addloan() {

  const [loanNameError, setloanNameError] = useState('');
  const [loanAmountError, setloanAmountError] = useState('');
  const [principalAmountError, setprincipalAmountError] = useState('');
  const [interestAmountError, setinterestAmountError] = useState('');



  const [inputData, setInputData] = useState({
    loanName: "",
    loanAmount: "",
    principalAmount: "",
    interestAmount:""
  });


  const naviget = useNavigate();

  let handleSubmit = (e) => {
    e.preventDefault();
    let result = validateValues(inputData);
    setSubmitting(true);

    if (result === true) {
      axios
        .post("http://localhost:8005/loan", inputData)
        .then((response) => {
          alert("Data added Successfully");
          naviget("/viewloan");
          console.log(response.data);
        })
        .catch((err) => console.log(err));
      }
  };


  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  const validateValues = (inputData) => {
    let isValid = true;

    const regexLettersOnly = /^[A-Za-z ]+$/;
    const regexNumbersOnly = /^[0-9,]+$/;

    if (inputData.loanName.length === 0) {
      alert("Please enter loan Name !!! ");
      return false;
    }

    if (!regexLettersOnly.test(inputData.loanName)) {
      setloanNameError('loan Name contain only letters');
      isValid = false;
    } 
    else {
      setloanNameError('');
    }

    if (inputData.loanAmount.length === 0) {
      alert("Please enter loan Amount !!! ");
      return false;
    }
    if (!regexNumbersOnly.test(inputData.loanAmount)) {
      setloanAmountError('loan Amount contain only numbers and commas');
      isValid = false;
    } 
    else {
      setloanAmountError('');
    }
    
    if (inputData.principalAmount.length === 0) {
      alert("Please enter Principal Amount  !!!");
      return false;
    }
    if (!regexNumbersOnly.test(inputData.principalAmount)) {
      setprincipalAmountError('Principal Amount contain only numbers and commas');
      isValid = false;
    } 
    else {
      setprincipalAmountError('');
    }
    if (inputData.interestAmount.length === 0) {
      alert("Please enter interest Amount !!!");
      return false;
    }
    if (!regexNumbersOnly.test(inputData.interestAmount)) {
      setinterestAmountError('Interest Amount contain only numbers and commas');
      isValid = false;
    } 
    else {
      setinterestAmountError('');
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
        <form onSubmit={handleSubmit}>
          <h2 id="align">Add New loan Data</h2>

          <div>
            <lable htmlFor="loanName" role="loanName">loan Name :</lable>
            <input
              type="text"
              name="loanName"
              className="form-control"
              placeholder="Enter loan Name"
              // onkeyup="sum();
              onChange={(e) =>
                setInputData({ ...inputData, loanName: e.target.value })
              }
            />
            {loanNameError && <small className="text-danger">{loanNameError}</small>}
          </div>
          <div>
            <lable htmlFor="loanAmount" role="loanAmount">loan Amount :</lable>
            <input
              type="text"
              name="loanAmount"
              className="form-control"
              placeholder="Enter loan Amount"
              onChange={(e) =>
                setInputData({ ...inputData, loanAmount: e.target.value })
              }
            />
            {loanAmountError && <small className="text-danger">{loanAmountError}</small>}

          </div>
          <div>
            <lable htmlFor="principalAmount" role="principalAmount">Principal Amount :</lable>
            <input
              type="text"
              name="principalAmount"
              className="form-control"
              placeholder="Enter Principal Amount"
              onChange={(e) =>
                setInputData({ ...inputData, principalAmount: e.target.value })
              }
            />
            {principalAmountError && <small className="text-danger">{principalAmountError}</small>}

          </div>
          <div>
            <lable htmlFor="interestAmount" role="interestAmount :">Interest Amount :</lable>
            <input
              type="text"
              name="interestAmount"
              className="form-control"
              placeholder="Enter Interest Amount"
              onChange={(e) =>
                setInputData({ ...inputData, interestAmount: e.target.value })
              }
            />
            {interestAmountError && <small className="text-danger">{interestAmountError}</small>}

          </div>





          <br />
          <center><button className="btn btn-primary">Submit</button></center>
        </form>


      </div>
    </div>
    </>
  );
}

export default Addloan;
