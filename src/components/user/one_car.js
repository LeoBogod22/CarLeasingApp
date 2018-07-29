import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col, Button} from 'reactstrap';
import Img from 'react-image';
import { Table } from 'reactstrap';
import Icon from 'react-icons-kit';
import { car } from 'react-icons-kit/fa/car';
import { facebook } from 'react-icons-kit/fa/facebook';
import { twitter } from 'react-icons-kit/fa/twitter';
import { instagram } from 'react-icons-kit/fa/instagram';
import { googlePlus } from 'react-icons-kit/fa/googlePlus';
import ContactForm from './contact';
import { getsinglecar } from '../../actions/cars';
import { CarsRef, CarssRef, timeRef } from '../admin/reference';
import app from "../config/dev";
import { Slide } from 'react-slideshow-image';
import { Redirect,Link } from 'react-router-dom'
import JumboTron from './jumbotron';

var g_car_id;
class OneCar extends Component {

   state = {
    year: '',
    make: '',
    model: '',
    authenticated: false,
    trim: '',
    engine: '',
    drive_type: '',
    body_type: '',
    ext_color: '',
    int_color: '',
    transmission: '',
    price: 0,
    sale: 0,
    status: true,
    vin: '',
    link3:'',
    link: '',
    link2: '',
    elect_stab: '',
    wireless: '',
    seat: '',
    keyless: '',
    trip_comp: '',
    tire_pressure: '',
    wiper: '',
    id:'',
    headlight: '',
    alertMsg: false
  }

componentDidMount(){
    const {dispatch, match} = this.props;
    dispatch(getsinglecar(match.params.id));
}

save(){
  
    // Create a new ref and log it’s push key
    app.auth().onAuthStateChanged((user) => {

        //this was the variable u were using and is undefined
        //this.props.location.state.car.id
        //alert("car has been saved!")
        //var car_id1 = window.location.href.split('/')[4];
        alert(this.props.location.state.car.id);
        const newUser = {
            userID: user.uid,
           
            id: this.props.location.state.car.id,
            make: this.props.location.state.car.make,
            link:this.props.location.state.car.link,
            price: this.props.location.state.car.price,
            ext_color: this.props.location.state.car.ext_color
        }
        //push the Object newUser so that it's saved to firebase
        CarssRef.push(newUser);
          
        //Display all keys and id value of all cars 
        CarssRef.on("value", function(snapshot) {
            snapshot.forEach(function(data) {
                    console.log("The user with key : " + data.key + " has an id value of : " + data.val().userID + "has saved the car : " + data.val().car);
                });

        });
     });


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

  render(){
    const authenticated = this.state.authenticated;

   

    let id = this.props.car ? this.props.car.id : null;
    let year = this.props.car ? this.props.car.year : null;
    let make = this.props.car ? this.props.car.make : null;
    let model = this.props.car ? this.props.car.model : null;
    let trim = this.props.car ? this.props.car.trim : null;
    let image = this.props.car ? this.props.car.link : null;
    let price = this.props.car ? this.props.car.price : null;
    let sale = this.props.car ? this.props.car.sale : null;
    let vin = this.props.car ? this.props.car.vin : null;
    let g66price = price - price * sale/100;
 
    let electronic = this.props.car ? this.props.car.elect_stab : null;
    let wireless = this.props.car ? this.props.car.wireless : null;
    let seat = this.props.car ? this.props.car.seat : null;
    let keyless = this.props.car ? this.props.car.keyless : null;
    let tripComp = this.props.car ? this.props.car.trip_comp : null;
    let tirePressure = this.props.car ? this.props.car.tire_pressure : null;
    let wiper = this.props.car ? this.props.car.wiper : null;
    let headlight = this.props.car ? this.props.car.headlight : null;
 const {dispatch, loading} = this.props;
 

  
const images = [
  this.props.location.state.car.link,
 this.props.location.state.car.link2,
 this.props.location.state.car.link3
];
    let content = null;
      if (loading) {

        content = (<p>Loading...</p>)
    } else {
        content = (
            <div className="container">
                <div className="card border-secondary mb-3">
                    <div className="card-header">
                        <h3> {this.props.car.make} {this.props.car.model} {trim} </h3>
                        <p className="vin-stock"><strong>VIN:</strong> {vin},  <strong>STOCK ID: </strong> {id}</p>
                    </div>
                </div>
                <div className="image-n-price border-secondary mb-3">
                    <div className="row">
                        <div className="col-md-8 mb-3">
                            <JumboTron images={images} />
                        </div>
                        <div className="col-md-4">
                            <div className="card border-secondary mb-3 d-md-none d-lg-block">
                                <div className="card-header text-success"><h5>Detail Pricing</h5></div>
                                <div className="card-body one-car-price">
                                    <Table className="striped table-sm text-sm-right text-md-left text-lg-right mb-0">
                                        <tbody>
                                        <tr>
                                            <td>
                                                <strong>MSRP:</strong>
                                            </td>
                                            <td>
                                                <strong>${this.props.car.price}</strong>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="text-danger">Dealer's Discount:</td>
                                            <td className="text-danger">{this.props.car.sale}%</td>
                                        </tr>
                                        <tr>
                                            <td className="text-success">
                                                <strong>G66 Price</strong>
                                            </td>
                                            <td className="text-success">
                                                <strong>${g66price}</strong>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td colSpan="2">&nbsp;</td>
                                        </tr>
                                        <tr>
                                            <td>Estimated Lease:</td>
                                            <td>$199/pm**</td>
                                        </tr>
                                        <tr>
                                            <td>Estimated Finance:</td>
                                            <td>$250/pm**</td>
                                        </tr>
                                        </tbody>
                                    </Table>
                                    <hr className="m-0"/>
                                </div>
                            </div>
                            <div className="card border-secondary mb-0">
                                <div className="card-header text-success"><h5>Reach Us</h5></div>
                                <div className="card-body text-primary">
                                    <h5>Phone: (602) 362-2670</h5>
                                    <h6>515 E Grant St,
                                    Phoenix, AZ 85004</h6>
                                    <br/>
                                    {authenticated ? ( 
                                        <Button classname="btn-btn-primary" onClick={()=>this.save()}>save </Button>                      
                                    ) : (      
                                        <Link to="/login"> Login to save  </Link>    
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12 d-none d-md-block d-lg-none">
                            <div className="card border-secondary mb-0">
                                <div className="card-header text-success"><h5>Detail Pricing</h5></div>
                                <div className="card-body one-car-price">
                                    <Table className="striped table-sm text-right mb-0">
                                        <tbody>
                                        <tr>
                                            <td>
                                                <strong>MSRP:</strong>
                                            </td>
                                            <td>
                                                <strong>${this.props.car.price}</strong>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="text-danger">Dealer's Discount:</td>
                                            <td className="text-danger">{this.props.car.sale}%</td>
                                        </tr>
                                        <tr>
                                            <td className="text-success">
                                                <strong>G66 Price</strong>
                                            </td>
                                            <td className="text-success">
                                                <strong>${g66price}</strong>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td colSpan="2">&nbsp;</td>
                                        </tr>
                                        <tr>
                                            <td>Estimated Lease:</td>
                                            <td>$199/pm**</td>
                                        </tr>
                                        <tr>
                                            <td>Estimated Finance:</td>
                                            <td>$250/pm**</td>
                                        </tr>
                                        </tbody>
                                    </Table>
                                    <hr className="m-0"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-8 mb-3">
                        <div className="card border-secondary">
                            <div className="card-header text-success"><h5>Highlighted Features</h5></div>
                            <div className="card-body">
                                <div className="feature-highlight">
                                    <div className="row">
                                        <div className="col-sm-6 mb-1 py-1 border-bottom">
                                            <Icon className="car-icon" icon={car}/> {this.props.car.electronic}
                                        </div>
                                        <div className="col-sm-6 mb-1 py-1 border-bottom">
                                            <Icon className="car-icon" icon={car}/> {this.props.car.wireless}
                                        </div>
                                        <div className="col-sm-6 mb-1 py-1 border-bottom">
                                            <Icon className="car-icon" icon={car}/> {seat}
                                        </div>
                                        <div className="col-sm-6 mb-1 py-1 border-bottom">
                                            <Icon className="car-icon" icon={car}/> {keyless}
                                        </div>
                                        <div className="col-sm-6 mb-1 py-1 border-bottom">
                                            <Icon className="car-icon" icon={car}/> {tripComp}
                                        </div>
                                        <div className="col-sm-6 mb-1 py-1 border-bottom">
                                            <Icon className="car-icon" icon={car}/> {tirePressure}
                                        </div>
                                        <div className="col-sm-6 mb-1 py-1 border-bottom">
                                            <Icon className="car-icon" icon={car}/> {wiper}
                                        </div>
                                        <div className="col-sm-6 mb-1 py-1 border-bottom">
                                            <Icon className="car-icon" icon={car}/> {headlight}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card border-secondary mb-3">
                            <div className="card-header text-success"><h5>Share This Vehicle</h5></div>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-lg-3 col-md-6 col-sm-3 col-6 text-center">
                                        <Icon className="text-muted" icon={facebook} size={50}/>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-3 col-6 text-center">
                                        <Icon className="text-muted" icon={twitter} size={50}/>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-3 col-6 text-center">
                                        <Icon className="text-muted" icon={instagram} size={50}/>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-3 col-6 text-center">
                                        <Icon className="text-muted" icon={googlePlus} size={50}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 mb-3">
                        <div className="card border-success">
                            <div className="card-header text-white bg-success">
                                <h5>Schedule Test Drive</h5></div>
                            <div className="card-body text-success">
                                <ContactForm className="1" showTitle="false"/>
                            </div>
                        </div>
                        <br/>
                    </div>
                </div>
            </div>
        )
    }
    return (
        <div> { content }</div>
    );
  }
}
function mapStateToProps(state){
  return{
    car: state.car,
    loading: state.loading
  }
}
export default connect(mapStateToProps,null)(OneCar)