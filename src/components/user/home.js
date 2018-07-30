import React, { Component } from 'react';
import JumboTron from './jumbotron';
import Services from './services';
import firebase from 'firebase';
import CarsList from './cars_list';
import TopSearchBar from './top_search_bar';
import NavigationBar from './navigation_bar';
class UserHomePage extends Component {
  render(){
    return(
      <div>
    

        <JumboTron />
        <Services />
        <br></br><h1 id="d"> Latest Cars </h1> <br></br>
        <CarsList/>

      </div>

    );
  }
}
export default UserHomePage;