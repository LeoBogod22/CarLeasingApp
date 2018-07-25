import React, { Component } from 'react';
import JumboTron from './jumbotron';
import Services from './services';
import firebase from 'firebase';
import CarsList from './cars_list';
import TopSearchBar from './top_search_bar';
import NavigationBar from './navigation_bar';
class Signout extends Component {
  render(){
    return(
      <div>
    
       <NavigationBar/>
        <JumboTron />
        <Services />
        <CarsList/>
         <p>Our Mission at DirectMotorGroup  is to build relationships that are consistent with our core values as we strive to fulfill the needs from  every customer. We have built a reputation in Brooklyn, Staten Island, Queens, New Jersey, and Long Island on providing courteous, honest-service, and we never lose sight of what makes us successful; Our Customers, Employees, Business Partners and Investors. Because of this, we have seen a proven track record of success spanning 10 years. This is why we strive daily to exceed their expectations. Our services include, Auto Leasing, Sales, Insurance, Financing, Early Lease Termination, Trade-Ins, Lease Transfers, and much more. We are pleased to announce that DirectMotorGroup is now accredited with the greater New York Chamber of Commerce. Make new car leasing experience a pleasant one. </p>
      </div>

    );
  }
}
export default Signout;
