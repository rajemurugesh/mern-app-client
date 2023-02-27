import React from "react";
// import './About.css';
const About = () => {
  return (

    <div className="container-fluid">
      <div className="py-4 bg-light">
        <div className="row">
          <div className="col-md-12 my-auto">
            <h4 className="text-center">ABOUT US</h4>
          </div>
        </div>
      </div>


      <div className="card mb-3">
        <div className="row">
          <div className="col-md-6">
            <img src="blog.jpg" className="contact-file1 " alt="Blog" />
          </div>
          <div className="col-md-6">
            <div className="card-body">
              <h5 className="card-title">
                Who We Are</h5>
              <hr className="w-25 mx-left " />
              <h1>LIMAT Technology Courses</h1>
              <p className="card-text">In today’s world of burgeoning modern technologies, LIMAT Technology Solutions<br></br> provides stellar IT solutions in Chennai which include a variety of services like <br></br>website designing, mobile application development, Hosting services, Application <br></br>development and DevOps and automation support for your applications. LIMAT <br></br>Technology Solutions can help you in reaching your target of enhancing your<br></br> business. We transcend every aspect of quality required to deliver high-performing<br></br> business solutions.</p>
              <p className="card-text">In today’s world of burgeoning modern technologies, LIMAT Technology Solutions<br></br> provides stellar IT solutions in Chennai which include a variety of services like <br></br>website designing, mobile application development, Hosting services, Application <br></br>development and DevOps and automation support for your applications. LIMAT <br></br>Technology Solutions can help you in reaching your target of enhancing your<br></br> business. We transcend every aspect of quality required to deliver high-performing<br></br> business solutions.</p>
            </div>
          </div>
        </div>
      </div>
    </div>


  );
};
export default About;