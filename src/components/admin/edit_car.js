import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { editCar } from '../../actions/cars';
import { Form, FormGroup, Label, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import Img from 'react-image';

class EditCar extends Component{

  updateOneCar = (values) => {
    this.props.editCar(values);
  }

  render(){

<<<<<<< HEAD
editcar = (e) => {


    e.preventDefault();
      alert(this.props.match.params.carid);
  const NewCar= {

      body_type: this.state.body_type.trim(),
      wiper: this.state.wiper,
      headlight: this.state.headlight,
      make: this.state.make,
      link: this.state.link,
      engine: this.state.engine,
      transmission:this.state.transmission,
      vin:this.state.vin,
      seat: this.state.seat, 
      price: this.state.price,
      sale: this.state.sale,
ext_color: this.state.ext_color,
            checked: false,
      starred: false,
      timestamp: timeRef

          
    };
    CarsRef.child(this.props.match.params.carid).update(NewCar);


    this.setState({ body_type: ''});
      this.setState({ wiper: ''});
      this.setState({ make: ''});   
      this.setState({link:''});
       this.setState({ headlight: '' });
       this.setState({price: ''});
       this.setState({transmission: ''});
       this.setState({engine: ''});
          this.setState({vin: ''});
            this.setState({ext_color: ''});
            this.setState({id: ''});
            this.setState({sale: ''});

                this.props.history.push('/admin');
    }

  componentDidMount(){
    alert('ddlL');
}

    
 deleteTask = (e) => {

    e.preventDefault();
    alert("Car Will Be Deleted !")
    CarsRef.child(this.props.match.params.carid).remove();
        this.props.history.push('/admin');
  };

=======
    let image = this.props.initialValues ? this.props.initialValues.link : null;
>>>>>>> parent of 67c49d0... ldld

    return(

      <div className="container">
        <br/>
        <div className="card border-primary mb-3">
          <div className="card-header text-white bg-primary">EDIT CAR</div>
          <div className="card-body text-primary">
            <Form
              onSubmit={this.props.handleSubmit(this.updateOneCar)}
              >
              <Row>
                <Col md="12">
                  <Img className="admin-car-image" src={image} />
                </Col>
                <br/>
              </Row>
              <Row>
                <Col md="3">
                  <FormGroup>
                    <Label for="year">Year</Label><br/>
                    <Field name="year" id="year" component="input" type="text" />
                  </FormGroup>
                </Col>
                <Col md="3">
                  <FormGroup>
<<<<<<< HEAD
                    <Label for="make">Make : {this.props.location.state.car.make}</Label>
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
                      <option>Toyota</option>
                    </Input>
=======
                    <Label for="make">Make</Label><br/>
                    <Field name="make" component="input" type="text" />

>>>>>>> parent of 67c49d0... ldld
                  </FormGroup>
                </Col>
                <Col md="3">
                  <FormGroup>
<<<<<<< HEAD
                    <Label for="model">Model - {this.props.location.state.car.model}</Label>
                    <Input type="select" name="select" id="model"
                      value={this.state.model}
                      onChange={(e) => this.setState({model: e.target.value})}
                      >
                      <option value="" disabled selected>Select Model</option>
                      <option>Accord</option>
                      <option>Odyssey</option>
                      <option>CR-V</option>
                      <option>4 Runner</option>
                      <option>Avalon</option>
                      <option>Tocoma</option>
                      <option>C-Class</option>
                      <option>A3</option>
                      <option>Q3</option>
                      <option>A5</option>
                      <option>Gran Turismo</option>
                      <option>Levante</option>
                      <option>Aventador</option>
                      <option>Outback</option>
                      <option>Corolla</option>
                    </Input>
=======
                    <Label for="model">Model</Label><br/>
                    <Field name="model" component="input" type="text" />

>>>>>>> parent of 67c49d0... ldld
                  </FormGroup>
                </Col>
                <Col md="3">
                  <FormGroup>
<<<<<<< HEAD
                    <Label for="body">Body: {this.props.location.state.car.body}</Label>
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
=======
                    <Label for="body">Body</Label><br/>
                    <Field name="body_type" component="input" type="text" />

>>>>>>> parent of 67c49d0... ldld
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col md="3">
                  <FormGroup>
<<<<<<< HEAD
                    <Label for="trim">Trim: {this.props.location.state.car.trim}</Label>
                    <Input type="text" id="trim"
                      value={this.state.trim}
                      onChange={(e) => this.setState({trim: e.target.value})}
                    />
=======
                    <Label for="trim">Trim</Label><br/>
                    <Field name="trim" component="input" type="text" />

>>>>>>> parent of 67c49d0... ldld
                  </FormGroup>
                </Col>
                <Col md="3">
                  <FormGroup>
<<<<<<< HEAD
                    <Label for="engine">Engine: {this.props.location.state.car.engine}</Label>
                    <Input type="text" id="engine"
                      value={this.state.engine}
                      onChange={(e) => this.setState({engine: e.target.value})}
                    />
=======
                    <Label for="engine">Engine</Label><br/>
                    <Field name="engine" component="input" type="text" />

>>>>>>> parent of 67c49d0... ldld
                  </FormGroup>
                </Col>
                <Col md="3">
                  <FormGroup>
<<<<<<< HEAD
                    <Label for="drivetype">Drive Type: {this.props.location.state.car.drive_type}</Label>
                    <Input type="text" id="drivetype"
                      value={this.state.drive_type}
                      onChange={(e) => this.setState({drive_type: e.target.value})}
                    />
=======
                    <Label for="drivetype">Drive Type</Label><br/>
                    <Field name="drive_type" component="input" type="text" />

>>>>>>> parent of 67c49d0... ldld
                  </FormGroup>
                </Col>
                <Col md="3">
                  <FormGroup>
<<<<<<< HEAD
                    <Label for="Exteriorcolor">Exterior Color - {this.props.location.state.car.ext_color}</Label>
                    <Input type="text" id="Exteriorcolor"
                      value={this.state.ext_color}
                      onChange={(e) => this.setState({ext_color: e.target.value})}
                    />
=======
                    <Label for="Exteriorcolor">Exterior Color</Label><br/>
                    <Field name="ext_color" component="input" type="text" />

>>>>>>> parent of 67c49d0... ldld
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col md="3">
                  <FormGroup>
                    <Label for="intcolor">Interior Color</Label><br/>
                    <Field name="int_color" component="input" type="text" />

                  </FormGroup>
                </Col>
                <Col md="3">
                  <FormGroup>
                    <Label for="transmission">Transmission</Label><br/>
                    <Field name="transmission" component="input" type="text" />

                  </FormGroup>
                </Col>
                <Col md="3">
                  <FormGroup>
<<<<<<< HEAD
                    <Label for="Price">Price - {this.props.location.state.car.price}$</Label>
                    <Input type="text" id="Price"
                      value={this.state.price}
                      value={this.state.price}
                      onChange={(e) => this.setState({price: e.target.value})}
                    />
=======
                    <Label for="Price">Price</Label><br/>
                    <Field name="price" component="input" type="text" />

>>>>>>> parent of 67c49d0... ldld
                  </FormGroup>
                </Col>
                <Col md="3">
                  <FormGroup>
<<<<<<< HEAD
                    <Label for="sale">Sale</Label>
                    <Input type="text" id="sale"
                      value={this.state.sale}
                    
                      onChange={(e) => this.setState({sale: e.target.value})}
                    />
=======
                    <Label for="sale">Sale</Label><br/>
                    <Field name="sale" component="input" type="text" />

>>>>>>> parent of 67c49d0... ldld
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col md="3">
                  <FormGroup>
                    <Label for="status">Status</Label><br/>
                    <Field name="status" component="input" type="text" />

                  </FormGroup>
                </Col>
                <Col md="3">
                  <FormGroup>
                    <Label for="vin">VIN</Label><br/>
                    <Field name="vin" component="input" type="text" />

                  </FormGroup>
                </Col>
                <Col md="3">
                  <FormGroup>
<<<<<<< HEAD
                    <Label for="link"><a href={this.props.location.state.car.link}> Image </a> </Label>
                    <Input type="text" id="link"
                      value={this.state.link}
                      onChange={(e) => this.setState({link: e.target.value})}
                    />
=======
                    <Label for="link">Image Link</Label><br/>
                    <Field name="link" component="input" type="text" />

>>>>>>> parent of 67c49d0... ldld
                  </FormGroup>
                </Col>
                <Col md="3">
                  <FormGroup>
                    <Label for="electstab">Electronic stability</Label><br/>
                    <Field name="elect_stab" component="input" type="text" />

                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col md="3">
                  <FormGroup>
                    <Label for="wireless">Wireless phone connectivity</Label><br/>
                    <Field name="wireless" component="input" type="text" />

                  </FormGroup>
                </Col>
                <Col md="3">
                  <FormGroup>
                    <Label for="split">Split folding rear seat</Label><br/>
                    <Field name="seat" component="input" type="text" />

                  </FormGroup>
                </Col>
                <Col md="3">
                  <FormGroup>
                    <Label for="remote">Remote keyless entry</Label><br/>
                    <Field name="keyless" component="input" type="text" />

                  </FormGroup>
                </Col>
                <Col md="3">
                  <FormGroup>
                    <Label for="trip">Trip computer</Label><br/>
                    <Field name="trip_comp" component="input" type="text" />

                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col md="3">
                  <FormGroup>
                    <Label for="low">Low tire pressure warning</Label><br/>
                    <Field name="tire_pressure" component="input" type="text" />

                  </FormGroup>
                </Col>
                <Col md="3">
                  <FormGroup>
                    <Label for="wiper">Rear window wiper</Label><br/>
                    <Field name="wiper" component="input" type="text" />

                  </FormGroup>
                </Col>
                <Col md="3">
                  <FormGroup>
                    <Label for="headlight">Fully automatic headlights</Label><br/>
                    <Field name="headlight" component="input" type="text" />

                  </FormGroup>
                </Col>
                <Col md="3">

                </Col>
              </Row>
              <Row>
                <Col md="10">

                </Col>
                <Col md="1">
                  <FormGroup>
                    <button type="submit" className="btn btn-success">Save</button>
                  </FormGroup>
                </Col>
                <Col md="1">
                  <FormGroup>
                    <Link to={`/admin/`}>
                      <button type="button" className="btn btn-danger">Back</button>
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

function mapStateToProps(state, props){
  return{
    initialValues: state.cars.filter(car => car.id == props.match.params.id)[0]
  }
}


function mapDispatchToProps(dispatch) {
  return {
    editCar: bindActionCreators(editCar, dispatch)
  }
}

EditCar = reduxForm({ form: 'edit_car' })(EditCar)

export default connect(mapStateToProps, mapDispatchToProps)(EditCar);
