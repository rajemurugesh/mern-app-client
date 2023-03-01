import React, { useState } from "react"
import axios from "axios"
import { Link, useNavigate } from "react-router-dom"



// const Login = ({ setLoginUser}) => {
const Login = () => {

  const Navigate = useNavigate();

    const [user, setUser] = useState({email: "", password: "" })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value,
        });
    };

    const handleSubmit =  async(e) => {
        e.preventDefault();
    
        console.log("working");
    
        const { email, password } = user;
    
        console.log(email);
        console.log(password);
    
         await axios
            .post("https://limatmernapp.onrender.com/router0/login", user)
    // console.log(user)
            .then(res => {

                // console.log(res)
                
                localStorage.setItem("auth", JSON.stringify(res));
                Navigate("/admin")
               
            })
    };

  return (
    <>
      <div>
        <div className="container shadow my-5">
          <div className="row p-5 ">
            <div
              className="col-md-5 py-3 d-flex flex-column
              align-items-center text-white justify-content-center form"
            >
              <h1>Welcome Back</h1>
              <p className="lead text-center">
                Enter your credentials to Login
              </p>
              <h5 className="mb-4">OR</h5>
              <Link
                to="/"
                className="btn btn-outline-light 
                  rounded-pill pb-2 w-50"
              >
                Home
              </Link>
            </div>

            <div className="col-md-6 p-5">
              <h1 className="text-center">Login</h1>

              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label">Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    onChange={handleChange}
                    value={user.email}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    name="password"
                    onChange={handleChange}
                    value={user.password}
                  />
                </div>
                <button type="submit" className="btn btn-outline-primary w-100">
                  submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;