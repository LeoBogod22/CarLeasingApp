import React, { Component } from 'react';
import JumboTron from './jumbotron';
import Services from './services';
import firebase from 'firebase';
import CarsList from './cars_list'
class UserHomePage extends Component {
  render(){
    return(
      <div>
        <JumboTron />
        <Services />
         <CarsList db={firebase} />
      </div>

    );
  }
}
export default UserHomePage;
