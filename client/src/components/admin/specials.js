import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Specials extends Component{
  render(){
    
    let specialsOnCars = this.props.cars ? this.props.cars.map(car =>{
      return(
        <p key={car.id}>
          <Link to={`/admin/editcar/${car.id}`}>
          {car.year} {car.make} {car.model} - {car.sale}%
        </Link>
        </p>
      )
    }) : null;

    return(
      <div>
        <div className="card text-white bg-primary mb-3">
          <div className="card-header">SPECIALS</div>
          <div className="card-body">
            {specialsOnCars}
          </div>
        </div>
      </div>
    );
  }
}



export default Specials;
