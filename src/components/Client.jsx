import React, {Component} from 'react'
import axios from "axios";

class Client extends Component {
  constructor(props){
    super(props);
    this.state={
      datas: [],
    };
  }

  componentDidMount = () =>{
    axios.get("https://limatmernapp.onrender.com/router1/data").then((res)=>{
    const datac = res.data;
    console.log(datac);
    this.setState({ datas: datac });
    });
  };

  render () {
    return (
      <React.Fragment>
      <section className="client">
          <div className="conatiner">
              <div className="row p-4 mb-5">
                  <div  className="col">
                      <p className="h3 text-center">
                      List of Our Clients
  
                      <hr className="w-25 mx-auto mb-4"></hr>
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
  
          <div  className="row mb-5">
              {this.state.datas.length > 0 &&
                this.state.datas.map((pro) => {
                  return (
                    <div className="col-md-4" key={pro._id}>
                      <div className="card my-1">
                        <div className="card-body ">
                          <div className="row justify-content-center align-items-center">
                            <div className="col p-1">
                              <img
                                src={pro.logo}
                                alt="err"
                                className="contact-file0"
                                
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>   
      </section>
      </React.Fragment>
    )
  }
}


export default Client;