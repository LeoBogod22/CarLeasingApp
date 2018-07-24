import React, { Component } from 'react';
import { Card, CardImg, CardBody,
  CardTitle, Button } from 'reactstrap';
import { Link } from 'react-router-dom'
export default class Services extends Component{


  constructor(props) {
        super(props);
        this.state = {
            info: "",
            info2:'',
            msg:"more",
            counter: 0,
            counter3: 0
        };

this.showMore = this.showMore.bind(this);


}
 showMore() { 

this.setState({counter: this.state.counter+1})
console.log("counter is" + this.state.counter);

if (this.state.counter%2===0) {
this.setState({info:"we have many Vehicles in our shop. Cheap Price and Finance Available. " , msg:"Less"})

}

 if (this.state.counter%2===1) {
this.setState({info:"" , msg:"more"})

}
 
 }
 showMore2() { 
alert("counter"+ this.state.counter3);
this.setState({counter3: this.state.counter3++})
console.log("counter is" + this.state.counter3);

if (this.state.counter3%2===0) {
this.setState({info2:"test drive Available. Please call 18000000 to shecdule test drive.. " , msg:"Less"})

}

 if (this.state.counter3%2===1) {
this.setState({info2:"" , msg:"more"})

}

  }
  render(){
    return(
      <div className="services">
        <div className="container">
          <div className="row">
            <div className="col-3">
              <Card>
                <CardImg top width="100%" src="https://s3.amazonaws.com/cartool/new_car.jpg" alt="New Car" />
                <CardBody>
                  <CardTitle>Find New Vehicle</CardTitle>
               <Link to="/Cars">   <Button className='btn-success'> Cars  </Button></Link>
                   <p> {this.state.info3} </p>
                </CardBody>
              </Card>
            </div>
            <div className="col-3">
              <Card>
                <CardImg top width="100%" src="https://s3.amazonaws.com/cartool/finance.jpg" alt="Finance" />
                <CardBody>
                  <CardTitle>Financing</CardTitle>
                  <Button className='btn-success' onClick={this.showMore}>{this.state.msg}</Button>
                  <p> {this.state.info} </p>
                </CardBody>
              </Card>
            </div>
            <div className="col-3">
              <Card>
                <CardImg top width="100%" src="https://s3.amazonaws.com/cartool/test_drive.jpg" alt="Test Drive" />
                <CardBody>
                  <CardTitle>Schedule Test Drive</CardTitle>
                  <Button className='btn-success' onClick={this.showMore2}>{this.state.msg}</Button>

                   <p> {this.state.info2} </p>
                </CardBody>
              </Card>
            </div>
            <div className="col-3">
              <Card>
                <CardImg top width="100%" src="https://s3.amazonaws.com/cartool/service.jpg" alt="Service" />
                <CardBody>
                  <CardTitle>Schedule Service</CardTitle>
                  <Button className='btn-success' onClick={this.showMore3}>{this.state.msg}</Button>
                   <p> {this.state.info4} </p>
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
      </div>
    );
  }
ore}
