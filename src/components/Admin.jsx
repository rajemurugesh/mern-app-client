import React from 'react';
import axios from "axios";
import {useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Admin = () => {
  const Navigate = useNavigate();
  const [datas, setData] = useState([]);
  console.log(datas);
  const getId = async () => {
    let res = await axios.get(`https://limatmernapp.onrender.com/router1/data`);
    console.log(res);
    setData(res.data);
  };
  useEffect(()=>{
    getId();
  }, []);
  const handlelogout = () => {
    localStorage.clear();
    Navigate('/')
  };

  const handleDelete = async (_id) => {
    try {
      console.log("working")
      await axios.delete(`https://limatmernapp.onrender.com//router1/delete/${_id}`);
      await getId();
    } catch (error) {
      console.error(error);
      //Handle the error appropriately
    }
  };
  

  return (
    <>
    <section className="project-search p-3">
      <div className="container-fluid">
        <div className="grid">
          <div className="row">
            <div className="col">
              <p className="h2 text-center p-2">
                <Link className="btn btn-primary ms-2"
                to="/components/Projectss/Addproject">
                  <i className="fa fa-plus-circle me-2" />
                  Add New Project
                </Link>

                <button className="btn btn-success m-2" 
                onClick={handlelogout} 
                >
                  <i className="fa fa-sign-out p-1" aria-hidden="true"></i>
                  Logout
                </button>
              </p>
              <p className="fst-italic">
              LIMAT Technology Solutions keeps finding strong partnerships to bring solutions and to meet customer requirements by all possible qualified means. 
                      We look forward to helping you in your Business by re-engineering business management and by providing strategic solutions. 
                      We also provide suggestions for the best ICT tools which can serve your business needs. 
                      The partners are one of the main elements who support LIMAT Technology Solutions in helping improve the performance of the business.
                </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="project-list">
      <div className="container-fluid">
        <div className="row mb-5">
          {datas.length > 0 && 
          datas.map((pro) => {
            return(
              <div className="col-md-6" key={pro._id}>
                <div className="card my-2">
                  <div className="card-body">
                    <div className="row p-2 align-items-center d-flex justify-content-around">
                      <div className="col-md-4">
                        <img src={pro.photo}
                        alt="err"
                        className="contact-file"/>
                      </div>
                      
                      <div className="col-md-7">
                        <ul className="list-group">
                          <li className="list-group-item list-group-item-action">
                            Project:
                            <span className="fw-bold">{pro.project}</span>
                            </li>
                            <li className="list-group-item list-group-item-action">
                            Location:
                            <span className="fw-bold">{pro.location}</span>
                            </li>
                            <li className="list-group-item list-group-item-action">
                            Year:
                            <span className="fw-bold">{pro.year}</span>
                            </li>
                        </ul>
                      </div>

                      <div className="col-md-1   d-flex flex-column align-items-center">
                        <Link to={`/components/Projectss/Editproject/${pro._id}`}
                        className="btn btn-secondary my-1"
                        >
                          <i className="fa fa-pen" />
                        </Link>
                        <button onClick={(e) => handleDelete(pro._id)}
                        className="btn btn-success my-1">
                          <i className="fa fa-trash" />
                        </button>
                        <Link to={`/components/Projectss/Viewproject/${pro._id}`}
                        className="btn btn-primary my-1">
                          <i className="fa fa-eye" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

    </section>
    </>
  )
}

export default Admin