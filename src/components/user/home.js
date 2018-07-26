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
        <CarsList/>

      </div>

    );
  }
}
export default UserHomePage;
