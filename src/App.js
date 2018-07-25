import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getCars } from './actions/cars';
import { getMessages } from './actions/message';
import firebase from 'firebase';
// User Components
import NavigationBar from './components/user/navigation_bar';
import TopSearchBar from './components/user/top_search_bar';
import FooterTop from './components/user/footer_top';
import FooterBottom from './components/user/footer_bottom';
import UserHomePage from './components/user/home';
import CarsList from './components/user/cars_list';

import Searchresults from './components/user/searchresult';
import OneCar from './components/user/one_car';

// Admin Components
import AdminNavigatioBar from './components/admin/admin_top_navigation';
import Cars from './components/admin/admin_cars';
import NewCar from './components/admin/newcar';
import Messages from './components/admin/messages';
import EditCar from './components/admin/edit_car';

import PrivateRoute from "./PrivateRoute";
import Login from "./Login";
import app from "./components/config/dev";

import Home from "./components/user/home";

import User from "./components/user/user";
import SignUp from "./SignUp";
import ContactForm from './components/user/contact';
import SignOut from './components/user/SignOut';
class App extends Component {

  componentDidMount(){

    this.props.getMessages();
  }
  state = { loading: true, authenticated: false, user: null };

  componentWillMount() {
    app.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({
          authenticated: true,
          currentUser: user,
          loading: false
        });
      } else {
        this.setState({
          authenticated: false,
          currentUser: null,
          loading: false
        });
      }
    });
  }

  render() {

    const { authenticated, loading } = this.state;
      if (loading) {
      return <p>Loading..</p>;
    }

    return (
      <div className="App">
        <Router>
          <div>
            <Switch>
              <Route path='/admin/' render={() => (
                <div>

                  <AdminNavigatioBar />
                  <Route exact path='/admin/' component={Cars} />
                  <Route exact path='/admin/newcar' component={NewCar} />
                  <Route exact path='/admin/editcar/:carid' component={EditCar} />
                  <Route exact path='/admin/messages' component={Messages} />

                </div>
              )} />

              <Route path ='/' render={(props) => (
                <div>
                    <NavigationBar />
                    <TopSearchBar {...props}/>
                    <Route exact path='/' component={UserHomePage} />
                    <PrivateRoute
            exact
            path="/home"
           component={User}
            authenticated={authenticated}
          />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/signup" component={SignUp} />
                     <Route exact path="/signout" component={SignOut} />
                    <Route exact path='/cars' component={CarsList} />
                    <Route exact path='/cars2/:make' component={Searchresults} />
                    <Route exact path='/cars/:id' component={OneCar} />
                    <Route exact path='/contact' component={ContactForm}/>
                    <FooterTop />
                    <FooterBottom />
                </div>
            )} />

            </Switch>
          </div>
        </Router>

      </div>
    );
  }
}

function mapDispatchToProps(dispatch){
  return{
      getMessages: bindActionCreators(getMessages, dispatch)
  }
}

export default connect(null, mapDispatchToProps) (App);
