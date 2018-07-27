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
 
     Name: '',
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
        <Navbar color="primary" dark expand="md">
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
                  <NavLink href="/">FINANCE</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/service">SERVICE</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/">PARTS</NavLink>
                </NavItem>
                <UncontrolledDropdown nav>
                  <DropdownToggle nav caret>
                    ABOUT
                  </DropdownToggle>
                     
                  <DropdownMenu >
                   {authenticated ? ( 

                    <DropdownItem onClick={this.signout}>
                        <Button classname="btn-btn-primary">SignOut </Button>
                        <br></br> 
                        <Link to="/user"> my cars </Link>

                        </DropdownItem>
      ) : (
      <DropdownItem>
        <Link to="/login"> LOGIN  </Link> <br></br>
         <Link to="/signup"> SIGN UP</Link> 
       </DropdownItem>
      )}
     
                    <DropdownItem>
                      ABOUT US
                    </DropdownItem>
                    <DropdownItem>
                      STAFF
                    </DropdownItem>
                    <DropdownItem>
                      CONTACT US
                    </DropdownItem>
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