import React, { Component } from 'react';
import { Form, FormGroup, FormControl, Label, Button, Input, Row, Col, Alert } from 'reactstrap';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createCar } from '../../actions/cars';
import { Link } from 'react-router-dom';
import { CarsRef, timeRef } from './reference';
import trim from 'trim';
class NewCar extends Component {

  state = {
    year: '',
    make: '',
    model: '',
    trim: '',
    engine: '',
    link2: '',
    link3:'',
    drive_type: '',
    body_type: '',
    ext_color: '',
    int_color: '',
    transmission: '',
    price: 0,
    sale: 0,
    status: true,
    vin: '',
    link: '',
    elect_stab: '',
  	wireless: '',
  	seat: '',
  	keyless: '',
  	trip_comp: '',
  	tire_pressure: '',
  	wiper: '',
    id: '',
  	headlight: '',
    alertMsg: false
  }

 onSubmit = (e) => {
    e.preventDefault();
let carid = CarsRef.push().key;
   const NewCar= {
    id: carid,
      body_type: this.state.body_type.trim(),
      wiper: this.state.wiper,
      sale: this.state.sale,
      headlight: this.state.headlight,
      make: this.state.make,
      seat: this.state.seat,
      tire_pressure: this.state.tire_pressure,
      link: this.state.link,
      engine: this.state.engine,
      wireless: this.state.wireless,
      transmission:this.state.transmission,
      vin:this.state.vin,
      link2: this.state.link2, 
      link3: this.state.link3,
      keyless: this.state.keyless,
      price: this.state.price,
ext_color: this.state.ext_color,
            checked: false,
      starred: false,
      timestamp: timeRef

          
    };
  

  if (NewCar.body_type.length) {
     CarsRef.child(carid).set(NewCar);
      this.setState({ body_type: '' });
      this.setState({ wiper: '' });
      this.setState({ make: '' });
      this.setState({wireless:''});
      this.setState({link:''});
       this.setState({ headlight: '' });
       this.setState({price: ''});
       this.setState({transmission: ''});
       this.setState({engine: ''});
          this.setState({vin: ''});
          this.setState({link2: ''});
            this.setState({ext_color: ''});
            this.setState({sale: ''});
           this.setState({keyless: ''});
          this.setState({link3: ''});
           this.setState({tire_pressure: ''})
    }
    this.props.history.push('/admin');
  };
  alertMsgClose = () => {
    this.setState({ alertMsg: false });
  }

  render() {

    return (
      <div className="container">
        <br/>
        <div className="card border-primary mb-3">
          <div className="card-header text-white bg-primary">ADD NEW CAR</div>
          <div className="card-body text-primary">
            <Form onSubmit={this.handleSubmit}>
              <Row>
                <Col md="3">
                  <FormGroup>
                    <Label for="year">Year</Label>
                    <Input type="select" name="select" id="year"
                      value={this.state.year}
                      onChange={(e) => this.setState({year: e.target.value})}
                      >
                      <option value="" disabled selected>Select Year</option>
                      <option>2018</option>
                    </Input>
                  </FormGroup>
                </Col>
                <Col md="3">
                  <FormGroup>
                    <Label for="make">Make</Label>
                    <Input type="select" name="select" id="make"
                      value={this.state.make}
                      onChange={(e) => this.setState({make: e.target.value})}
                      >
                      <option value="" disabled selected>Select Make</option>
                      <option>Audi</option>
                      <option>Honda</option>
                      <option>Lamborghini</option>
                      <option>Maserati</option>
                      <option>Subaru</option>
                      <option> Nissan </option>
                      <option> Jeep </option>
                      <option> Land Rover </option>
                      <option> Mercedes </option>
                      <option> Infiniti </option> 
                      <option>Toyota</option>
                      <option>BMW </option>
                      <option> Ford </option>
                      <option> Cadillac </option> 
                    </Input>
                  </FormGroup>
                </Col>
                <Col md="3">
                  <FormGroup>
                    <Label for="model">Model</Label>
                    <Input type="select" name="select" id="model"
                      value={this.state.model}
                      onChange={(e) => this.setState({model: e.target.value})}
                      >
                      <option value="" disabled selected>Select Model</option>
                      <option>Accord</option>
                      <option>Odyssey</option>
                      <option> Qx-30</option>
                      <option>supra</option>
                      <option>elantra</option>
                      <option> Disocvery Sport</option>
                      <option>X5</option>
                      <option> A7 </option>
                      <option>Ghibli </option>
                      <option> S clasS </option>
                      <option> Maxima </option>
                      <option> ALtima </option>
                        <option> Grand Charaokee </option>
                      <option>CR-V</option>
                      <option>4 Runner</option>
                      <option>Avalon</option>
                      <option>Tocoma</option>
                      <option>C-Class</option>
                      <option>A3</option>
                      <option>Q3</option>
                      <option>740i</option>
                      <option>A5</option>
                      <option>Gran Turismo</option>
                      <option>Levante</option>
                      <option> Mondeo </option>
                      <option>Aventador</option>
                      <option>Outback</option>
                      <option>Corolla</option>
                            <option>Camry</option>
                    </Input>
                  </FormGroup>
                </Col>
                <Col md="3">
                  <FormGroup>
                    <Label for="body">Body</Label>
                    <Input type="select" name="select" id="body"
                      value={this.state.body_type}
                      onChange={(e) => this.setState({body_type: e.target.value})}
                      >
                      <option value="" disabled selected >Select Body</option>
                      <option>Convertible</option>
                      <option>Coupe</option>
                      <option>Hatchback</option>
                      <option>Sedan</option>
                      <option>SUV</option>
                      <option>Truck</option>
                      <option>Van</option>
                    </Input>
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col md="3">
                  <FormGroup>
                    <Label for="trim">Trim</Label>
                    <Input type="text" id="trim"
                      value={this.state.trim}
                      onChange={(e) => this.setState({trim: e.target.value})}
                    />
                  </FormGroup>
                </Col>
                <Col md="3">
                  <FormGroup>
                    <Label for="engine">Engine</Label>
                    <Input type="text" id="engine"
                      value={this.state.engine}
                      onChange={(e) => this.setState({engine: e.target.value})}
                    />
                  </FormGroup>
                </Col>
                <Col md="3">
                  <FormGroup>
                    <Label for="drivetype">Drive Type</Label>
                    <Input type="text" id="drivetype"
                      value={this.state.drive_type}
                      onChange={(e) => this.setState({drive_type: e.target.value})}
                    />
                  </FormGroup>
                </Col>
                <Col md="3">
                  <FormGroup>
                    <Label for="Exteriorcolor">Exterior Color</Label>
                    <Input type="text" id="Exteriorcolor"
                      value={this.state.ext_color}
                      onChange={(e) => this.setState({ext_color: e.target.value})}
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col md="3">
                  <FormGroup>
                    <Label for="intcolor">Interior Color</Label>
                    <Input type="text" id="intcolor"
                      value={this.state.int_color}
                      onChange={(e) => this.setState({int_color: e.target.value})}
                    />
                  </FormGroup>
                </Col>
                <Col md="3">
                  <FormGroup>
                    <Label for="transmission">Transmission</Label>
                    <Input type="text" id="transmission"
                      value={this.state.transmission}
                      onChange={(e) => this.setState({transmission: e.target.value})}
                    />
                  </FormGroup>
                </Col>
                <Col md="3">
                  <FormGroup>
                    <Label for="Price">Price</Label>
                    <Input type="text" id="Price"
                      value={this.state.price}
                      onChange={(e) => this.setState({price: e.target.value})}
                    />
                  </FormGroup>
                </Col>
                <Col md="3">
                  <FormGroup>
                    <Label for="sale">Sale</Label>
                    <Input type="text" id="sale"
                      value={this.state.sale}
                      onChange={(e) => this.setState({sale: e.target.value})}
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col md="3">
                  <FormGroup>
                    <Label for="status">Status</Label>
                    <Input type="text" id="status"
                      value={this.state.status}
                      onChange={(e) => this.setState({status: e.target.value})}
                    />
                  </FormGroup>
                </Col>
                <Col md="3">
                  <FormGroup>
                    <Label for="vin">VIN</Label>
                    <Input type="text" id="vin"
                      value={this.state.vin}
                      onChange={(e) => this.setState({vin: e.target.value})}
                    />
                  </FormGroup>
                </Col>
                <Col md="3">
                  <FormGroup>
                    <Label for="link">Image Link</Label>
                    <Input type="text" id="link"
                      value={this.state.link}
                      onChange={(e) => this.setState({link: e.target.value})}
                    />
                  </FormGroup>
                </Col>
                <Col md="3">
                  <FormGroup>
                    <Label for="electstab">Electronic stability</Label>
                    <Input type="text" id="electstab"
                      value={this.state.elect_stab}
                      onChange={(e) => this.setState({elect_stab: e.target.value})}
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col md="3">
                  <FormGroup>
                    <Label for="wireless">Wireless phone connectivity</Label>
                    <Input type="text" id="wireless"
                      value={this.state.wireless}
                      onChange={(e) => this.setState({wireless: e.target.value})}
                    />
                  </FormGroup>
                </Col>
                <Col md="3">
                  <FormGroup>
                    <Label for="split">Image two</Label>
                    <Input type="text" id="split"
                      value={this.state.link2}
                      onChange={(e) => this.setState({link2: e.target.value})}
                    />
                  </FormGroup>
                </Col>
                <Col md="3">
                  <FormGroup>
                    <Label for="remote">img link3</Label>
                    <Input type="text" id="remote"
                      value={this.state.link3}
                      onChange={(e) => this.setState({link3: e.target.value})}
                    />
                  </FormGroup>
                </Col>
                <Col md="3">
                  <FormGroup>
                    <Label for="trip">Trip computer</Label>
                    <Input type="text" id="trip"
                      value={this.state.trip_comp}
                      onChange={(e) => this.setState({trip_comp: e.target.value})}
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col md="3">
                  <FormGroup>
                    <Label for="low">Low tire pressure warning</Label>
                    <Input type="text" id="low"
                      value={this.state.tire_pressure}
                      onChange={(e) => this.setState({tire_pressure: e.target.value})}
                    />
                  </FormGroup>
                </Col>
                <Col md="3">
                  <FormGroup>
                    <Label for="wiper">Rear window wiper</Label>
                    <Input type="text" id="wiper"
                      value={this.state.wiper}
                      onChange={(e) => this.setState({wiper: e.target.value})}
                    />
                  </FormGroup>
                </Col>
                <Col md="3">
                  <FormGroup>
                    <Label for="headlight">Fully automatic headlights</Label>
                    <Input type="text" id="headlight"
                      value={this.state.headlight}
                      onChange={(e) => this.setState({headlight: e.target.value})}
                    />
                  </FormGroup>
                </Col>
                <Col md="3">

                </Col>
              </Row>
              <Row>
                <Col md="10">
                  <FormGroup>
                    <Alert
                      isOpen={this.state.alertMsg}
                      toggle={this.alertMsgClose}
                      color="success">
                      Car saved!
                    </Alert>
                  </FormGroup>
                </Col>
                <Col md="1">
               <form onSubmit={this.onSubmit}>
 

    <Button className="btn btn-primary btn-large centerButton" type="submit">Save</Button>
    </form>
                </Col>
                <Col md="1">
                  <FormGroup>
                    <Link to={`/admin/`}>
                      <button type="button" className="btn btn-danger">Cancel</button>
                    </Link>
                  </FormGroup>
                </Col>
              </Row>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    createCar: bindActionCreators(createCar, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(NewCar);
