 import axios from "axios";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";


function Addstudent() {
  const[columns,setColumns] = useState([]);
  const[records,setRecords] = useState([]);
  const [inputData, setInputData] = useState({
    id:"-1",
    studentname: "",
    department: "",
    year: "",
    roomno: "",
    room:
    {
        id:"",
        roomno:"",
        hostelfees:"",
        messfees:"",
        total:"",
        
    }
  });
 

  // useEffect(() => {
  //   axios
  //     .get("http://localhost:2222/roomtable/all")
  //     .then((response) => {
  //       setColumns(Object.keys(response.data[0]));
  //       setRecords(response.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);
 
 

  const handleSelectChange = async (e) => {
    const roomId = e.target.value;
    console.log(`Selected Room ID: ${roomId}`);
    try {
      const response = await axios.get("http://localhost:2222/roomtable/"+roomId);
      console.log('Room data fetched:', response.data);
      setInputData(prevState => ({
        ...prevState,
        room: {
          ...prevState.room,
          ...response.data,
          id: roomId
        }
      }));
    } catch (err) {
      console.error("Error fetching room data:", err);
    }
  };

  // useEffect(() => {
  //   console.log('Updated inputData:', inputData);
  // }, [inputData]);

  // const naviget = useNavigate();
  // let handleChange = (e) => {
  //   if (e.target.name === "id") {
  //       console.log(e.target.value);
  //       const selectedRecordId = e.target.value;
  //       axios
  //           .get(`http://localhost:2222/roomtable/` + selectedRecordId)
  //           .then((response) => {
  //             setInputData((inputData)=>({
  //                    ...inputData, room: response.data }));
 
  //               })
  //     };
  //   }
  let handleSubmit = (e) => {
    e.preventDefault();
    let result = validateValues(inputData);
    // setSubmitting(true);

    if (result === true) {
      axios
        .post("http://localhost:2222/student", inputData)
        .then((res) => {
          alert("Data added Successfully");
          naviget("/view");
          console.log(res.data);
        })
        .catch((err) => console.log(err));
    } else {
      alert("Please Enter the Valid Inputs!!!");
    }
  };



  const validateValues = (inputData) => {
    if (inputData.studentname.length === 0) {
      alert("Please enter Student Name !!! ");
      return false;
    
    } else if (inputData.department.length === 0) {
      alert("Please enter Your Department  !!!");
      return false;
    } else if (inputData.year.length === 0) {
      alert("Please Enter the Year!!!");
      return false;
    } 
    else if (inputData.roomno.length === 0) {
      alert("Please Enter Your Room no!!!");
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
          <h1 className="fst-italic" data-testid="heading">ADD STUDENT DATA</h1>
          <div>
            <lable htmlFor="studentname" data-testid="studentname" className="fst-italic">StudentName :</lable>
            <input
              type="text"
              
              className="form-control"
              onChange={(e) =>
                setInputData({ ...inputData, studentname: e.target.value })
              }
            />
          </div>
          

          <div>
            <lable htmlFor="department" data-testid="department" className="fst-italic">Department :</lable>
            <input
              type="text"
              
              className="form-control"
              onChange={(e) =>
                setInputData({ ...inputData, department: e.target.value })
              }
            />
          </div>

          <div>
            <lable htmlFor="year" data-testid="year" className="fst-italic">Year :</lable>
            <input
              type="text"  
              
              className="form-control"
              onChange={(e) =>
                setInputData({ ...inputData, year: e.target.value })
              }
            />
          </div>
          
          <div>
            <lable htmlFor="roomno" data-testid="roomno"  className="fst-italic">Room No :</lable>
            <input
              type="number"
              
              className="form-control"
              onChange={(e) =>
                setInputData({ ...inputData, roomno: e.target.value })
              }
            />
          </div>





          <div>
            <lable>Fetch the id :</lable>
            <select onChange={handleSelectChange} className="form-control">
              <option value="">Select a record</option>
              {records.map((record) => (
                <option key={record.id} value={record.id}>
                  {record.id}
                </option>
              ))}
            </select>          </div>

         
          <br />

          <button className="btn btn-info fst-italic "  data-testid="submitbutton">Submit</button>
        </form>

        
      </div>
    </div>
  );
}

export default Addstudent;
