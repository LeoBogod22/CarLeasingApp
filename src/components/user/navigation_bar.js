import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  Button,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';import { withRouter } from "react-router";
import Icon from 'react-icons-kit';
import { car } from 'react-icons-kit/fa/car';
import { Redirect,Link } from 'react-router-dom'
import app from "../config/dev";
export default class NavigatioBar extends React.Component {


  constructor(props) {
    super(props);
    this.state={
     authenticated: false,
      currentUser: null,
       redirect: false,
 
    
      isOpen: false
    
   
  }
  this.toggle = this.toggle.bind(this);
  this.signout = this.signout.bind(this);

}
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

 signout(){
   app.auth().signOut().then((user) => {
    this.setState ({ redirect: true })
  
    })

}

componentWillMount() {
app.auth().onAuthStateChanged((user) => {
     
 
    if (user) {
      this.setState({
        currentUser: user,
        authenticated: true
      })
    } else {
      this.setState({
        currentUser: null,
        authenticated: false
      })
    }
      });
  }
  render() {
     const { redirect } = this.state;

     if (redirect) {
       return <Redirect to='/signout'/>;
     }
 const authenticated = this.state.authenticated;
    return (
      <div>
        <Navbar color="danger" dark expand="md">
          <div className="container">
            <NavbarBrand href="/">
            <Icon className="car-icon" icon={car}/>
             Direct Motor Group</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink href="/cars">CARS</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/contact">SELL CAR</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/service">SERVICES</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/">HOME</NavLink>
                </NavItem>
                <UncontrolledDropdown nav>
                  <DropdownToggle nav caret>
                    ABOUT
                  </DropdownToggle>
                     
                  <DropdownMenu >
                    {authenticated ? ( 
                    <DropdownItem>
                        <Button className="btn-btn-primary btn-block" onClick={this.signout}>Sign Out </Button>
                    </DropdownItem>
                    ) : (
                         <Link to="/login" className="dropdown-item"> Login </Link> 
                    )}
                    {authenticated ? ( 
                        <Link to="/user" className="dropdown-item"> my profile </Link>
                    ) : (
                         <Link to="/signup" className="dropdown-item"> Sign Up </Link> 
                    )}
                    <DropdownItem>
                      ABOUT US
                    </DropdownItem>
                    
                    <Link to="/contact"> <DropdownItem>
                      CONTACT US
                    </DropdownItem> </Link>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </Nav>
            </Collapse>
          </div>
        </Navbar>
      </div>
    );
  }
}