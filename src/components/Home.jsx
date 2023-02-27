import React from 'react'
import { Link } from "react-router-dom";
import About from "./About";
import Services from "./Services";
import Client from "./Client";
import Project from "./Project";
import Contact from "./Contact";

const Home = () => {
  return (
    <div className="container-fluid">
          <div className="row  mt-5 py-3">
            <div className="col-md-6 align-items-center">
              <h3 className="disply-6 fw-folder mb-4 text-center text-decoration-underline ">
                Welcome to Limat Tech Solutions
              </h3>
              
              <p className="mb-4">
              In today’s world of burgeoning modern technologies, 
              LIMAT Technology Solutions provides stellar IT solutions in Chennai which include a variety of services like website designing, 
              mobile application development, Hosting services, 
              Application development and DevOps and automation support for your applications. 
              LIMAT Technology Solutions can help you in reaching your target of enhancing your business. 
              We transcend every aspect of quality required to deliver high-performing business solutions.
                
              In today’s world of burgeoning modern technologies, 
              LIMAT Technology Solutions provides stellar IT solutions in Chennai which include a variety of services like website designing, 
              mobile application development, Hosting services, 
              Application development and DevOps and automation support for your applications. 
              LIMAT Technology Solutions can help you in reaching your target of enhancing your business. 
              We transcend every aspect of quality required to deliver high-performing business solutions.
              </p>

              <p className="text-center">
                <Link
                  className=" btn btn-outline-primary me-4 rounded-pill px-4 py-2 mb-2"
                  to="/contact"
                >
                  Get Quote
                </Link>

                <Link
                  className=" btn btn-outline-primary  rounded-pill px-4 py-2 mb-2"
                  to="/services"
                >
                  Our Services
                </Link>
              </p>
            </div>

            <div className="col-md-6 ">
              <h3 className="disply-4 mb-4 fw-folder  text-center text-decoration-underline">
                Our Services
              </h3>
              
              <img
                src="mob app.png"
                alt="errr"
                className="rounded contact-file1"
              />
            </div>
          </div>
          <About />
          <Services />
          <Client />
          <Project />
          <Contact />
          </div>
  )
}

export default Home;