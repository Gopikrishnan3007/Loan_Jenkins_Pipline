import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./View.css";
import Header from "../Nav/Header";

function Viewloan() {
  const [columns, setColumns] = useState([]);
  const [records, setRecords] = useState([]);
  const navigate = useNavigate();

  useEffect(() => { 
    axios
      .get("http://localhost:8005/loan/all")
      .then((response) => {
        setColumns(Object.keys(response.data[0]));
        setRecords(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  let handleSubmit = (id) => {
    const conf = window.confirm("Do you want to delete");
    if (conf) {
      axios
        .delete("http://localhost:8005/loan/" + id)
        .then((res) => {
          alert("record has deleted");
          navigate("/viewloan");
          window.location.reload();
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <>
    <div>
      <Header />
    </div>

    <div class="body2">
        <div className="container ">
          <center><h1 id="app2" className="text-center cardsHead">
            Loan List
          </h1></center>

          <div className="text-end">
            <Link to="/createloan" className="btn btn-primary">
              Add +
            </Link>
          </div>
          <br />
          <table className="tables table-bordered  table-striped w-100 border shadow px-10 pb-10 rounded ">
            <thead>
              <tr>
                {columns.map((c, i) => (
                  <th key={i}>{c}</th>
                ))}
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {records.map((d, i) => (
                <tr key={i}>
                  <td>{d.loanId}</td>
                  <td>{d.loanAmount}</td>
                  <td>{d.loanName}</td>
                  <td>{d.principalAmount}</td>
                  <td>{d.interestAmount}</td>


                  <td>
                    <Link
                      to={`/updateloan/${d.loanId}`}
                      className="btn btn-sm btn-success "
                    >
                      Update
                    </Link>
                    <button
                      onClick={(e) => handleSubmit(d.loanId)}
                      className="btn btn-sm ms-1 btn-danger"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      </>
  );
}

export default Viewloan;
