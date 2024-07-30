import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./Edit.css";
import Header from "../Nav/Header";

function EditLoan() {
  // const { id } = useParams();
  const [loanNameError, setloanNameError] = useState('');
  const [loanAmountError, setloanAmountError] = useState('');

  const [data, setData] = useState({
    loanAmount: "",
    loanName: "",
    principalAmount: "",
    interestAmount: ""

  });
  const navigate = useNavigate();
  // useEffect(() => {
  //   axios
  //     .get("http://localhost:8005/loan/" + id)
  //     .then((response) => setData(response.data))
  //     .catch((err) => console.log(err));
  // }, []);

  let handleSubmit = (e) => {
    e.preventDefault();
    let result = validateValues(data);
    setSubmitting(true);

    if (result === true) {
      axios.put("http://localhost:8005/loan", data).then((res) => {
        alert("loan data Updated Successfully");
        navigate("/viewloan");
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
      setloanAmountError('loan Amount contain numbers and commas');
      isValid = false;
    }
    else {
      setloanAmountError('');
    }

    if (inputData.interestAmount.length === 0) {
      alert("Please enter loan Count !!!");
      return false;
    }
    return isValid;

  };

  return (
    <>
      <div>
        <Header />
      </div>
      <div class="body">
        <div class="cards">

          <form onSubmit={handleSubmit}>
            <h2 id="align">Update loan's Data</h2>
            <div>
              <lable htmlFor="loanId" role="loanId">ID :</lable>
              <input
                type="number"
                disabled
                name="loanId"
                className="form-control"
                value={data.loanId}
              //onChange={(e) => setData({ ...data, id: e.target.value })}
              />
            </div>

            <div>
              <lable htmlFor="loanName" role="loanName">loan Name :</lable>
              <input
                type="text"
                name="loanName"
                className="form-control"
                value={data.loanName}
                onChange={(e) => setData({ ...data, loanName: e.target.value })}
              />
              {loanNameError && <small className="text-danger">{loanNameError}</small>}

            </div>
            <div>
              <lable htmlFor="loanAmount" role="loanAmount">loan Amount :</lable>
              <input
                type="text"
                name="loanAmount"
                className="form-control"
                value={data.loanAmount}
                onChange={(e) => setData({ ...data, loanAmount: e.target.value })}
              />
              {loanAmountError && <small className="text-danger">{loanAmountError}</small>}
            </div>

            <div>
              <lable htmlFor="principalAmount" role="principalAmount">Principal Amount :</lable>
              <input
                type="text"
                name="principalAmount"
                className="form-control"
                value={data.principalAmount}
                onChange={(e) => setData({ ...data, principalAmount: e.target.value })}
              />
            </div>

            <div>
              <lable htmlFor="interestAmount" role="interestAmount">Interest Amount :</lable>
              <input
                type="text"
                name="interestAmount"
                className="form-control"
                value={data.interestAmount}
                onChange={(e) => setData({ ...data, interestAmount: e.target.value })}
              />
            </div>

            <br />
            <button id="value" className="btn btn-info ">Update</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default EditLoan;
