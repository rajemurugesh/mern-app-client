import React, { Component } from 'react'
import axios from "axios";
import { Link } from 'react-router-dom';

class Project extends Component {
  constructor(props) {
    super(props);
    this.state = {
      datas: [],
    }
  }

  componentDidMount = () => {
    axios.get("https://limatmernapp.onrender.com/router1/data").then((res) =>{
    const datac = res.data;
    console.log(datac);
    this.setState({ datas: datac});
    });
  };
  
  render() {
    return (
      <React.Fragment>
        <section className="project-search p-3">
          <div className="container-fluid">
            <div className="grid">
              <div className="row">
                <div className="col">
                  <p className="h3 text-center p-2">
                    List of Our Projects
                    <hr className = "w-25 mx-auto mb-4"></hr>
                  </p>
                  <p>
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
              {this.state.datas.length > 0 && 
              this.state.datas.map((pro) => {
                return (
                  <div className="col-md-6" key={pro._id}>
                    <div className="card my-2">
                      <div className="card-body">
                        <div className="row p-2 align-items-center d-flex justify-content-around">
                          <div className="col-md-4">
                            <img src={pro.photo}
                            alt="err"
                            className="contact-file" />
                          </div>

                          <div className="col-md-7">
                            <ul className="list-group">
                              <li className="list-group-item list-group-item-action">
                                Project:
                                <span className="fw-bold">{pro.project}</span>
                              </li>
                              <li className="list-group-item list-group-item-action">
                                  Location:
                                  <span className="fw-bold">
                                    {pro.location}
                                  </span>
                                </li>
                                <li className="list-group-item list-group-item-action">
                                  Year:
                                  <span className="fw-bold">{pro.year}</span>
                                </li>
                            </ul>
                          </div>

                          <div className="col-md-1    d-flex flex-column  align-items-center ">
                          <Link
                                to={`/Components/Projectss/Viewproject/${pro._id}`}
                                className="btn btn-primary my-1"
                              >
                                <i className="fa fa-eye" />
                              </Link>
                          </div>
                        </div>

                      </div>

                    </div>

                  </div>
                );
              })}
            </div>
          </div>

        </section>
      </React.Fragment>
    )
  }
}

export default Project