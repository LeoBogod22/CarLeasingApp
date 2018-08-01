import React, { Component } from 'react';

export default class FooterTop extends Component {
  render(){
    return(
      <div className="footer-top light-text">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-4 col-lg-5">
              <h5>ABOUT</h5>
              <p className="mb-0">These extremely popular cars continue to be top choices for many drivers who want dependable, long-lasting cars for their families. Check out our new car specials and financing options that offer great deals on these in-demand new cars.</p>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3 mt-4 mt-md-0">
              <h5>HOURS</h5>
              Sun 10:00 am - 7:00 pm <br/>
              Mon 8:00 am - 9:00 pm <br/>
              Tue 8:00 am - 9:00 pm <br/>
              Wed 8:00 am - 9:00 pm <br/>
              Thu 8:00 am - 9:00 pm <br/>
              Fri 8:00 am - 9:00 pm <br/>
              Sat 8:00 am - 8:00 pm <br/>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-4 mt-4 mt-md-0">
              <h5>CONTACT</h5>
           Direct Motor Group <br/>
              830 Willis Ave, <br/>
         Albertson, NY 11507 <br/>
              Phone: 1.516.765.1003
            </div>
          </div>
        </div>
      </div>
    );
  }
}