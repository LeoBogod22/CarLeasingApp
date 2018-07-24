import React, { Component } from 'react';
import { Table, Row, Col } from 'reactstrap';
import { connect } from 'react-redux';
import { deleteCar } from '../../actions/cars';
import Icon from 'react-icons-kit';
import { bin } from 'react-icons-kit/icomoon';
import { pencil } from 'react-icons-kit/icomoon';
import { Link } from 'react-router-dom';
import TotalMessage from './total_messages';
import TotalInventory from './total_inventory';
import Specials from './specials';
import { CarsRef, timeRef } from './reference';
class Cars extends Component {
  state = {
    Cars: [],
   Carsloading: true
  };
  handleDelete = (id) => {
    this.props.deleteCar(id);
  }


 componentWillMount() { 

CarsRef.on('value', snap => {
      const tasks = [];
      let Cars = []
      snap.forEach(shot => {
       Cars.push({ ...shot.val(), key: shot.key });
      });
      this.setState({ Cars: Cars, CarsLoading: false });
    });
  }


  render(){

      const { Cars, CarsLoading } = this.state;
    const orderedcars = Cars;
      
    let carList;
          
            console.log(Cars.year)
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
