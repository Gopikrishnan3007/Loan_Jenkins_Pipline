import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./Edit.css";
import Header from "../Nav/Header";

function EditCustomer() {
  // const { id } = useParams();
  const [customerNameError, setCustomerNameError] = useState('');
  const [data, setData] = useState({
    customerName: "",
    customerAddress: "",
    date: "",
    time: "",

  });




  const navigate = useNavigate();
  // useEffect(() => {
  //   axios
  //     .get("http://localhost:8005/customer/" + id)
  //     .then((response) => setData(response.data))
  //     .catch((err) => console.log(err));
  // }, []);

  let handleSubmit = (e) => {
    e.preventDefault();
    let result = validateValues(data);
    setSubmitting(true);

    if (result === true) {
    axios.put("http://localhost:8005/customer", data)
      .then((res) => {
      alert("customer Updated Successfully");
      navigate("/View");
      console.log(res.data);
    })
    .catch((err) => console.log(err));
    } else {
      // alert("Please Enter the Valid Inputs!!!");
    }
  };
  const [submitting, setSubmitting] = useState(false);

  const validateValues = (inputData) => {
    let isValid = true;

    const regexLettersOnly = /^[A-Za-z ]+$/;

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
    }  if (inputData.date.length === 0) {
      alert("Please enter Date  !!!");
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
            <h2 id="align">Update customer Data</h2>
            <div>
              <lable htmlFor="customerId">ID :</lable>
              <input
                type="number"
                disabled
                name="customerId"
                className="form-control"
                value={data.customerId}
                //onChange={(e) => setData({ ...data, id: e.target.value })}
              />
            </div>

            <div>
              <lable htmlFor="customerName"role="customername">Customer Name :</lable>
              <input
                type="text"
                name="customerName"
                className="form-control"
                value={data.customerName}
                onChange={(e) => setData({ ...data, customerName: e.target.value })}
              />
            {customerNameError && <small className="text-danger">{customerNameError}</small>}

            </div>

            <div>
              <lable htmlFor="customerAddress" role="address">Customer Address :</lable>
              <input
                type="text"
                name="customerAddress"
                className="form-control"
                value={data.customerAddress}
                onChange={(e) => setData({ ...data, customerAddress: e.target.value })}
              />
            </div>

            <div>
              <lable htmlFor="customerMobileNo" role="customerMobileNo">Mobile No :</lable>
              <input
                type="text"
                name="customerMobileNo"
                className="form-control"
                value={data.customerMobileNo}
                onChange={(e) => setData({ ...data, customerMobileNo: e.target.value })}
              />
            </div>

            <div>
              <lable htmlFor="date" role="date">Date :</lable>
              <input
                type="date"
                name="date"
                className="form-control"
                value={data.date}
                onChange={(e) => setData({ ...data, date: e.target.value })}
              />
            </div>

            <div>
              <lable htmlFor="accountNumber" role="accountNumber">Account Number :</lable>
              <input
                type="text"
                name="accountNumber"
                className="form-control"
                value={data.accountNumber}
                onChange={(e) => setData({ ...data, accountNumber: e.target.value })}
              />
            </div>
            
            <br/>
            <button id="value" className="btn btn-info ">Update</button>
          </form>
        </div>
    </div>
    </>
  );
}

export default EditCustomer;
