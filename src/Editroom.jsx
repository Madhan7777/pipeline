import React, { useEffect, useState }from 'react'
// import axios from "axios";
import {useNavigate, useParams} from "react-router-dom";

function Editroom() {
    const { id }= useParams();
    const [data, setData]= useState([]);
    const navigate= useNavigate();
    // useEffect(()=>{
    //     axios
    //     .get("http://localhost:2222/roomtable/" + id)
    //     .then((response)=> setData(response.data))
    //     .catch((err)=> console.log(err));

    // },[]);

    let handleSubmit = (e) => {
        e.preventDefault();
        axios.put("http://localhost:2222/roomtable" , data).then((res)=>{
            alert("User updated successfully");
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
            <h1 data-testid="heading">ROOM DETAILS</h1>
            <div>
              <lable htmlFor="id" data-testid="id" className="fst-italic">ID :</lable>
              <input
                type="number"
                disabled
                
                className="form-control"
                value={data.id}
                //onChange={(e) => setData({ ...data, name: e.target.value })}
              />
            </div>

            <div>
              <lable htmlFor="roomno" data-testid="roomno" className="fst-italic">Room No :</lable>
              <input
                type="number"
                
                className="form-control"
                value={data.roomno}
                onChange={(e) => setData({ ...data, roomno: e.target.value })}
              />
            </div>
           
            

            <div>
              <lable htmlFor="hostelfees" data-testid="hostelfees" className="fst-italic">Hostel Fees :</lable>
              <input
                type="number"
                
                className="form-control"
                value={data.hostelfees}
                onChange={(e) => setData({ ...data, hostelfees: e.target.value })}
              />
            </div>

            <div>
              <lable htmlFor="messfees" data-testid="messfees" className="fst-italic">Mess Fees :</lable>
              <input
                type="number"
                
                className="form-control"
                value={data.messfees}
                onChange={(e) => setData({ ...data, messfees: e.target.value })}
              />
            </div>
            
           
            <div>
            <lable htmlFor="total"  data-testid="total" className="fst-italic">Total :</lable>
            <input
              type="number"
             
              className="form-control"
              value={parseInt(data.hostelfees)+parseInt(data.messfees)}
              onBlur={(e) =>
                setData({ ...data, total:e.target.value})
              }
            />
          </div>
            
            <br />

            <button className="btn btn-info " data-testid="updatebutton" class="fst-italic">Update</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Editroom;
