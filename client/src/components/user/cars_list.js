import React, { Component } from 'react';
import { connect } from 'react-redux';
import Car from './car';
import { CarsRef, timeRef } from '../admin/reference';

import { CardImg, Button, Row, Col, Table } from 'reactstrap';
import { getsinglecar } from '../../actions/cars';
import Icon from 'react-icons-kit';
import { bin } from 'react-icons-kit/icomoon';
import { getCarsThunk } from '../../actions/cars';
import { Link } from 'react-router-dom';



class CarsList extends Component {
  // ...



  state = {
    Cars: [],
   Carsloading: true
  };
  handleDelete = (id) => {
    this.props.deleteCar(id);
  }


componentDidMount(){
    const {dispatch, match} = this.props;
    dispatch(getCarsThunk());
}

 componentWillMount() { 

CarsRef.on('value', snap => {
      const tasks = [];
      let Cars = []
      snap.forEach(shot => {
       Cars.push({ ...shot.val(), key: shot.key });
      });
      console.log(Cars);
      this.setState({ Cars: Cars, CarsLoading: false });
    });
  }


  render() {
    const { Cars, CarsLoading } = this.state;
    const orderedcars = Cars;
  
    let carList;

  
    if (CarsLoading) {
      carList = <div className="TaskList-empty">Loading...</div>;
    } else {
    
      carList = (      
          <div className="container">
            <div className="row">
              {Cars.map(car => (
                <div className="col-md-6 col-lg-12">
                  <div className="row">
                    <div className="col-12">
                      <div className="card border-secondary mb-3">
                        <div className="card-header text-success">
                          <h4>
                            <Link to={`/cars/${car.id}`}>
                            </Link>
                          </h4>
                        </div>
                        <div className="card-body">
                          <div className="row">
                            <div className="col-lg-5">
                              <CardImg
                                className="m-lg-2"
                                top
                                width="100%"
                                src={car.link}
                                alt={car.make}
                              />
                            </div>
                            <div className="col-sm-6 col-md-12 col-lg-4">
                              <Table className="striped">
                                <tbody>
                                  <tr>
                                    <td className="width-140px">Engine:</td>
                                    <td>{car.engine}</td>
                                  </tr>
                                  <tr>
                                    <td className="width-140px">Drive Type:</td>
                                    <td>{car.drive_type}</td>
                                  </tr>
                                  <tr>
                                    <td className="width-140px">Body:</td>
                                    <td>{car.body_type}</td>
                                  </tr>
                                  <tr>
                                    <td className="width-140px">Exterior Color:</td>
                                    <td>{car.ext_color}</td>
                                  </tr>
                                  <tr>
                                    <td className="width-140px">Interior Color:</td>
                                    <td>{car.int_color}</td>
                                  </tr>
                                  <tr>
                                    <td className="width-140px">Transmission:</td>
                                    <td>{car.transmission}</td>
                                  </tr>
                                  <tr>
                                    <td className="width-140px">VIN:</td>
                                    <td>{car.vin}</td>
                                  </tr>
                                </tbody>
                              </Table>
                            </div>
                            <div className="col-sm-6 col-md-12 col-lg-3">
                              <Table className="striped text-sm-right text-md-left text-lg-right">
                                <tbody>
                                  <tr>
                                    <td className="text-primary width-140px">
                                      <strong>MSRP:</strong>
                                    </td>
                                    <td className="text-primary">
                                      <strong>${car.price}</strong>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="text-danger width-140px">
                                      Dealer Discount:
                                    </td>
                                    <td className="text-danger">
                                      {car.sale}%
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="text-primary width-140px">
                                      <strong>Total:</strong>
                                    </td>
                                    <td className="text-primary">
                                      <strong>
                                        ${car.price - (car.price * car.sale) / 100}
                                      </strong>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="text-primary width-140px">
                                      Est. Lease:
                                    </td>
                                    <td className="text-primary">
                                      $230/m*
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="text-primary width-140px">
                                      Est. Finance:
                                    </td>
                                    <td className="text-primary">
                                      $330/m*
                                    </td>
                                  </tr>
                                  <tr>
                                    <td colSpan="2">
                                      <Link to={{ pathname:`/cars/${car.id}`, state: { car } }} >
                                        <Button className="btn btn-success btn-block">
                                          View
                                        </Button>
                                      </Link>
                                    </td>
                                  </tr>
                                </tbody>
                              </Table>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
      );
    }

    return carList;
  }
}


function mapStateToProps(state, props){
  return{
    cars: state.cars,
    messages: state.messages
  }
}

export default connect(mapStateToProps)(CarsList)