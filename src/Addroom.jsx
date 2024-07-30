// import axios from "axios";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Addroom() {
  const [inputData, setInputData] = useState({
   
        roomno:"",
        hostelfees:"",
        messfees:"",
        total:"",
        
    
  });
 
  const[total,setTotal]=useState(0);
  function calculatetotal()
  {
    setTotal(inputData.hostelfees+inputData.messfees);
  }
  const naviget = useNavigate();

  let handleSubmit = (e) => {
    e.preventDefault();
    let result = validateValues(inputData);
    // setSubmitting(true);

    if (result === true) {
      axios
        .post("http://localhost:2222/roomtable", inputData)
        .then((res) => {
          alert("Data added Successfully");
          naviget("/");
          console.log(res.data);
        })
        .catch((err) => console.log(err));
    } else {
      alert("Please Enter the Valid Inputs!!!");
    }
  };

  // validation Part for add user for student management system
  // const [errors, setErrors] = useState({});
  // const [submitting, setSubmitting] = useState(false);

  const validateValues = (inputData) => {
    if (inputData.roomno.length === 0) {
      alert("Please enter Room No !!! ");
      return false;
    
    } else if (inputData.hostelfees.length === 0) {
      alert("Please enter Your Hostel Fees  !!!");
      return false;
    } else if (inputData.messfees.length === 0) {
      alert("Please Enter the Mess Fess!!!");
      return false;
    } 
    else if (inputData.total.length === 0) {
        alert("Please Enter the Total amount!!!");
        return false;
      } 
  
   
    else {
      return true;
    }
  };

  return (
    <div
      id="add2"
      className="d-flex w-100 vh-100 justify-content-center align-items-center "
    >
      <div className="w-50 border  p-5" style={{color:"white"}} id="add3">
        <form onSubmit={handleSubmit}>
          <h1 className="fst-italic" data-testid="heading" >ADD ROOM'S DATA</h1>
          <div>
            <lable htmlFor="roomno" data-testid="roomno" className="fst-italic">Room No :</lable>
            <input
              type="number"
              
              className="form-control"
              onChange={(e) =>
                setInputData({ ...inputData, roomno: e.target.value })
              }
            />
          </div>
          

          <div>
            <lable htmlFor="hostelfees" data-testid="hostelfees" className="fst-italic">Hostel Fees :</lable>
            <input
              type="number"
              
              className="form-control"
              onChange={(e) =>
                setInputData({ ...inputData, hostelfees: e.target.value })
              }
            />
          </div>

          <div>
            <lable htmlFor="messfees" data-testid="messfees"  className="fst-italic">Mess Fees :</lable>
            <input
              type="number"
              
              className="form-control"
              onChange={(e) =>
                setInputData({ ...inputData, messfees: e.target.value })
              }
            />
          </div>
       
      

          <div>
            <lable htmlFor="total" data-testid="total" className="fst-italic">Total :</lable>
            <input
              type="number"
              
              // placeholder="total"
              className="form-control"
              value={parseInt(inputData.hostelfees)+parseInt(inputData.messfees)}
              onBlur={(e) =>
                setInputData({ ...inputData, total:e.target.value })
              }
            />
          </div>
         
          <br />

          <button className="btn btn-info " data-testid="submitbutton">Submit</button>
        </form>

        
      </div>
    </div>
  );
}

export default Addroom;
