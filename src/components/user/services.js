import React, { Component } from 'react';
import newCar from '../../assets/images/new_car.webp'
import finance from '../../assets/images/finance.jpg'
import testDrive from '../../assets/images/test-drive.jpg'
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
this.setState({info:"Neweset Vehicles available! including our 2018 Bmw! " , msg:"Less"})

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
   <div>
<br></br>
<br></br>
<div className="container-fluid">
  <div className="row">
    <div className="card-deck">
      <div className="card">
        <img  id="f" className="card-img-top" src={newCar} alt="Card image cap"/>
        <div className="card-block">
          <h4 className="card-title">Find New Vehicle</h4>
          <p className="card-text">Over 1000 Vehicles available!</p>
          <p className="card-text">   <Link to="/Cars"> <Button className='btn-success'> Cars  </Button></Link> </p> 
        </div>
      </div>
      <div className="card">
        <img  id="f"className="card-img-top" src={finance} alt="Card image cap"/>
        <div className="card-block">
          <h4 className="card-title">Financing</h4>
          <p className="card-text">We Help with  getting loans and have the best rates! </p>
              <Button className='btn-success' onClick={this.showMore}>{this.state.msg}</Button>
                  <p> {this.state.info} </p>
        </div>
      </div>
      <div className="card">
        <img id="f" className="card-img-top" src={testDrive} alt="Test Drive"/>
        <div className="card-block">
          <h4 className="card-title">Schedule Test Drive</h4>
          <p className="card-text">Test drive availalbe 5 days a week ! Feel free to shcedule one now! </p>
        <Link to="/contact">  <Button className='btn-success'> Test Drive </Button> </Link>

        </div>
      </div>
    </div>
  </div>
</div>
</div>
    );
  }
}
