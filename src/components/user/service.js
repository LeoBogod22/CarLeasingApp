
import React, { Component } from 'react';
import { Card, CardImg, CardBody,
  CardTitle, Button } from 'reactstrap';
import { Link } from 'react-router-dom'
export default class Service extends Component{

 render(){
    return(


  <div>
        {/* Navigation */}
       
        {/* Masthead */}
        <br></br>
        <header className="masthead text-white text-center">
          <div className="overlay" />
          <div className="container">
            <div className="row">
              <div className="col-xl-9 mx-auto">
                <h1 className="mb-5">Our Services And Cars</h1>
              </div>
              <div className="col-md-10 col-lg-8 col-xl-7 mx-auto">
                <form>
                  <div className="form-row">
                    <div className="col-12 col-md-9 mb-2 mb-md-0">
                      <input type="email" className="form-control form-control-lg" placeholder="Enter your email..." />
                    </div>
                    <div className="col-12 col-md-3">
                     <Link to="/signup"> <button type="submit" className="btn btn-block btn-lg btn-primary">Sign up!</button></Link>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </header>
        {/* Icons Grid */}
        <section className="features-icons bg-light text-center">
          <div className="container">
            <div className="row">
              <div className="col-lg-4">
                <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                  <div className="features-icons-icon d-flex">
                    <i className="icon-screen-desktop m-auto text-primary" />
                  </div>
                  <h3>Super Customer service</h3>
                  <p className="lead mb-0">superior customer service, unmatched by any other company in the entire region.!!</p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                  <div className="features-icons-icon d-flex">
                    <i className="icon-layers m-auto text-primary" />
                  </div>
                  <h3>Skilled Technicians</h3>
                  <p className="lead mb-0"> highly professional attention to your demands!</p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="features-icons-item mx-auto mb-0 mb-lg-3">
                  <div className="features-icons-icon d-flex">
                    <i className="icon-check m-auto text-primary" />
                  </div>
                  <h3>Easy to Use</h3>
                  <p className="lead mb-0">Whatever your car needs, we can get the job done!</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Image Showcases */}
        <section className="showcase">
          <div className="container-fluid p-0">
            <div className="row no-gutters">
              <div className="col-lg-6 order-lg-2 text-white showcase-img" style={{backgroundImage: 'url("http://automotive-experts.com/wp-content/uploads/2018/03/Best-Vehicle-Repair-Service-660x495.jpg")'}} />
              <div className="col-lg-6 order-lg-1 my-auto showcase-text">
                <h2>!00% customer satisfaction!</h2>
                <p className="lead mb-0">When you you order from us we guarantee you 100% customer satisfaction!  SImply call us or contact us</p>
              </div>
            </div>
            <div className="row no-gutters">
              <div className="col-lg-6 text-white showcase-img" style={{backgroundImage: 'url("https://www.nissan.ca/content/dam/nissan/ca/owners/navigation/service-plans/extended_protection_plans.png")'}} />
              <div className="col-lg-6 my-auto showcase-text">
                <h2>Updated For Newest theft Protection!</h2>
                <p className="lead mb-0">Ultimate Anti-Theft Protection !! </p>
              </div>
            </div>
            <div className="row no-gutters">
              <div className="col-lg-6 order-lg-2 text-white showcase-img" style={{backgroundImage: 'url("img/bg-showcase-3.jpg")'}} />
              <div className="col-lg-6 order-lg-1 my-auto showcase-text">
                <h2>Newest Cars Available!</h2>
                <p className="lead mb-0">Lorem ipsum ish shotem istatel </p>
              </div>
            </div>
          </div>
        </section>
        {/* Testimonials */}
        <section className="testimonials text-center bg-light">
         
        </section>
        {/* Call to Action */}
        <section className="call-to-action text-white text-center">
          <div className="overlay" />
          <div className="container">
            <div className="row">
              <div className="col-xl-9 mx-auto">
                <h2 className="mb-4">Ready to get started? Sign up now!</h2>
              </div>
              <div className="col-md-10 col-lg-8 col-xl-7 mx-auto">
                <form>
                  <div className="form-row">
                    <div className="col-12 col-md-9 mb-2 mb-md-0">
                      <input type="email" className="form-control form-control-lg" placeholder="Enter your email..." />
                    </div>
                    <div className="col-12 col-md-3">
                <Link to="/signup"> <button type="submit" className="btn btn-block btn-lg btn-primary">Sign up!</button></Link>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
       </div>

   

       );
  }
}
