import React, { useEffect, useState }from 'react'
import axios from "axios";
import {useNavigate, useParams} from "react-router-dom";

function Editstudent() {

    const { id }= useParams();
    const [data, setData]= useState([]);
    const navigate= useNavigate();
    // useEffect(()=>{
    //     axios
    //     .get("http://localhost:2222/student/" + id)
    //     .then((response)=> setData(response.data))
    //     .catch((err)=> console.log(err));

    // },[]);

    let handleSubmit = (e) => {
        e.preventDefault();
        axios.put("http://localhost:2222/student" , data).then((res)=>{
            alert("Student updated successfully");
            navigate("/");
        });
    };

  return (
    <div>
      <div
        id="add2"
        className="d-flex w-100 vh-100 justify-content-center align-items-center "
      >
        <div className="w-50 border p-5" style={{color:"white"}} id="add3">
          <form onSubmit={handleSubmit}>
            <h1 data-testid="heading">HOSTEL Management System</h1>
            <div>
              <lable htmlFor="id"  data-testid="id" className="fst-italic">ID :</lable>
              <input
                type="text"
                disabled
               
                className="form-control"
                value={data.id}
                //onChange={(e) => setData({ ...data, name: e.target.value })}
              />
            </div>

            <div>
              <lable htmlFor="studentname" data-testid="studentname" className="fst-italic">StudentName :</lable>
              <input
                type="text"
                
                className="form-control"
                value={data.studentname}
                onChange={(e) => setData({ ...data, studentname: e.target.value })}
              />
            </div>
           
            

            <div>
              <lable htmlFor="department" data-testid="department" className="fst-italic">Department :</lable>
              <input
                type="text"
                
                className="form-control"
                value={data.department}
                onChange={(e) => setData({ ...data, department: e.target.value })}
              />
            </div>

            <div>
              <lable htmlFor="year" data-testid="year" className="fst-italic">Year :</lable>
              <input
                type="text"
                
                className="form-control"
                value={data.year}
                onChange={(e) => setData({ ...data, year: e.target.value })}
              />
            </div>
            
            <div>
              <lable htmlFor="roomno" data-testid="roomno"  className="fst-italic">Room No :</lable>
              <input
                type="number"
                
                className="form-control"
                value={data.roomno}
                onChange={(e) => setData({ ...data, roomno: e.target.value })}
              />
            </div>
            
            <br />

            <button className="btn btn-info " data-testid="updatebutton" className="fst-italic">Update</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Editstudent;
