import React, { Component } from 'react'
import axios from "axios";
import { Link } from 'react-router-dom';
export default class Addproject extends Component {
    constructor(props){
        super(props);
        this.state = {
            photo: "",
            project: "",
            location: "",
            year: "",
            logo: ""
        };
    }
    handleChange = (e) => {
        console.log(e.target.name);
        console.log(e.target.value);
        this.setState({ [e.target.name]: e.target.value });
      };
    
      handleSubmit = (e) => {
        e.preventDefault();
    
        if (
          this.state.photo !== "" &&
          this.state.project !== "" &&
          this.state.location !== "" &&
          this.state.year !=="" &&
          this.state.logo
    
        ) 
        {
          axios
            .post("https://limatmernapp.onrender.com/router1/post", this.state)
            
            .then((res) => {
              this.setState({ photo: "", project: "", location: "", year: "",logo:"" });
              console.log(res);
            });
        }
      };
  render() {
    return (
      <React.Fragment>
        <section className="Add-project">
            <div className="container-fluid mt-5">
                <p className="h4 p-3 text-success fw-bold">Add New project</p>
                <div className="row p-3">
                    <div className="col">

                        <p className="fst-italic">
                        LIMAT Technology Solutions keeps finding strong partnerships to bring solutions and to meet customer requirements by all possible qualified means. 
                      We look forward to helping you in your Business by re-engineering business management and by providing strategic solutions. 
                      We also provide suggestions for the best ICT tools which can serve your business needs. 
                      The partners are one of the main elements who support LIMAT Technology Solutions in helping improve the performance of the business. 
                        </p>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="row mb-5">
                        <div className="col-md-4 mb-5">
                            <form onSubmit={this.handleSubmit}>
                                <div className="mb-2">
                                    <input 
                                    type="text"
                                    className="form-control"
                                    placeholder="photourl"
                                    name="photo"
                                    onChange={(e) => this.handleChange(e)}
                                    value={this.state.photo}
                                    />
                                </div>
                                <div className="mb-2">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="projectname"
                      name="project"
                      onChange={(e) => this.handleChange(e)}
                      value={this.state.project}
                    />
                  </div>
                  <div className="mb-2">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Location"
                      name="location"
                      onChange={(e) => this.handleChange(e)}
                      value={this.state.location}
                    />
                  </div>
                  <div className="mb-2">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="year"
                      name="year"
                      onChange={(e) => this.handleChange(e)}
                      value={this.state.year}
                    />
                    
                  </div>
                  <div className="mb-2">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="logo"
                      name="logo"
                      onChange={(e) => this.handleChange(e)}
                      value={this.state.logo}
                    />
                    
                  </div>

                  <div className="mb-4">
                    <input
                      type="submit"
                      className="btn btn-success"
                      value="create"
                    />
                    <Link
                      to="/admin"
                      className="btn btn-danger ms-2"
                    >
                      Back
                    </Link>
                  </div>

                            </form>
                        </div>

                    </div>

                </div>
            </div>

        </section>
      </React.Fragment>
    )
  }
}
