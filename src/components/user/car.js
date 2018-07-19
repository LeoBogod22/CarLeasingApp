import React, { Component } from 'react';
import { CardImg, Button, Row, Col, Table } from 'reactstrap';
import { Link } from 'react-router-dom';
class Car  extends Component {
 render(){
  return (
    <div>
        {this.props.car}
      </div>

       )
  }
}
      

export default Car;
