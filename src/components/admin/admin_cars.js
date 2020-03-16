import React, { Component } from 'react';
import { Table, Row, Col } from 'reactstrap';
import { connect } from 'react-redux';
import { deleteCar } from '../../actions/cars';
import Icon from 'react-icons-kit';
import { bin } from 'react-icons-kit/icomoon';
import { pencil } from 'react-icons-kit/icomoon';
<<<<<<< HEAD
import { Link } from 'react-router-dom';
import TotalMessage from './total_messages';
import TotalInventory from './total_inventory';
import Specials from './specials';

class Cars extends Component {

  handleDelete = (id) => {
    this.props.deleteCar(id);
  }

  render(){
<<<<<<< HEAD

      const { Cars, CarsLoading } = this.state;
    const orderedcars = Cars;
      
    let carList;
          
    if (CarsLoading) {
        carList = <div className="TaskList-empty">Loading...</div>; 

    } 
     else if (Cars.length) {
        carList = (
            <ul className="TaskList">
              {Cars.map(car => (
    
      
              <tr>
                <th scope="row"></th>
                <td>{car.year}</td>
                <td>{car.make}</td>
                <td>{car.model}</td>
                <td>{car.body_type}</td>
                <td>{car.engine}</td>
                  <td>{car.ext_color}</td>
                <td><img src={car.link} height="92" /> </td>
                <td>{car.price}</td> 
        
                <td>
                 
          
                </td>
                 <td>

                 
              </td>
              <Link to={{ pathname:`/admin/editcar/${car.id}`, state: { car } }} >
               <Icon icon={pencil} />
              </Link>
              </tr>
            ))}
           
            </ul>
           );
      }
    
        let totalInventory = this.props.cars ? this.props.cars : null;
        let totalMessages = this.props.messages ? this.props.messages : null;
        let specials = this.props.cars ? this.props.cars : null;

        return(
          <div className="container">
            <br/>
            <Row>
              <Col md="4">
                <TotalMessage totalMessages={totalMessages}/>
              </Col>
              <Col md="4">
             
              </Col>
              <Col md="4">
                <Specials specials={specials}/>
              </Col>
            </Row>
            <br/>
            <div className="card border-primary mb-3">
            <div className="card-header text-white bg-primary">INVENTORY</div>
            <div className="card-body">
              <Table hover>
                <thead className="text-success">
                  <tr>
                    <th>ID</th>
                    <th>YEAR</th>
                    <th>MAKE</th>
                    <th>MODEL</th>
                    <th>BODY</th>
                    <th>COLOR</th>
                    <th>PRICE</th>
                    <th>STATUS</th>
                    <th>EDIT</th>
                    <th>DELETE</th>
                  </tr>
                </thead>
                <tbody>
                  {carList}
                </tbody>
              </Table>
            </div>
          </div>
=======
=======

class Cars extends Component {
  render(){

    console.log('admin dashboard: ', this.props.cars);

>>>>>>> parent of 0453b9b... working on edit car
    let inventory = this.props.cars ? this.props.cars.map(car => {
      return(
        <tr>
          <th scope="row">{car.id}</th>
          <td>{car.year}</td>
          <td>{car.make}</td>
          <td>{car.model}</td>
          <td>{car.body_type}</td>
          <td>{car.int_color}</td>
          <td>{car.price}</td>
          <td>{car.status ? "Available" : "Sold"}</td>
<<<<<<< HEAD
          <td>
            <Link to={`/admin/editcar/${car.id}`}>
              <Icon icon={pencil} />
            </Link>
          </td>
          <td><Icon
            className="text-danger"
            icon={bin}
            onClick={(e)=>this.handleDelete(car.id)}
          /></td>
=======
          <td><Icon icon={pencil} /></td>
          <td><Icon icon={bin} /></td>
>>>>>>> parent of 0453b9b... working on edit car
        </tr>
      )
    }) : null;

    let totalInventory = this.props.cars ? this.props.cars : null;
    let totalMessages = this.props.messages ? this.props.messages : null;
    let specials = this.props.cars ? this.props.cars : null;

    return(
      <div className="container">
        <br/>
        <Row>
          <Col md="4">
            <TotalMessage totalMessages={totalMessages}/>
          </Col>
          <Col md="4">
            <TotalInventory totalInventory={totalInventory} />
          </Col>
          <Col md="4">
            <Specials specials={specials}/>
          </Col>
        </Row>
        <br/>
        <div className="card border-primary mb-3">
        <div className="card-header text-white bg-primary">INVENTORY</div>
        <div className="card-body">
          <Table hover>
            <thead className="text-success">
              <tr>
                <th>ID</th>
                <th>YEAR</th>
                <th>MAKE</th>
                <th>MODEL</th>
                <th>BODY</th>
                <th>COLOR</th>
                <th>PRICE</th>
                <th>STATUS</th>
                <th>EDIT</th>
                <th>DELETE</th>
              </tr>
            </thead>
            <tbody>
              {inventory}
            </tbody>
          </Table>
>>>>>>> parent of 67c49d0... ldld
        </div>
      </div>
    </div>
    );
  }
}

function mapStateToProps(state, props){
  return{
    cars: state.cars,
    messages: state.messages

  }
}

export default connect(mapStateToProps, {deleteCar})(Cars);
