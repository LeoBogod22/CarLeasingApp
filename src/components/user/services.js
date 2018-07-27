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
   <div>
<br></br>
<br></br>
<div className="container-fluid">
  <div className="row">
    <div className="card-deck">
      <div className="card">
        <img  id="f" className="card-img-top" src="https://s3.amazonaws.com/cartool/new_car.jpg" alt="Card image cap"/>
        <div className="card-block">
          <h4 className="card-title">Find New Vehicle</h4>
          <p className="card-text">asddf</p>
          <p className="card-text">   <Link to="/Cars"> <Button className='btn-success'> Cars  </Button></Link> </p> 
        </div>
      </div>
      <div className="card">
        <img  id="f"className="card-img-top" src="https://s3.amazonaws.com/cartool/finance.jpg" alt="Card image cap"/>
        <div className="card-block">
          <h4 className="card-title">Financing</h4>
          <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
              <Button className='btn-success' onClick={this.showMore}>{this.state.msg}</Button>
                  <p> {this.state.info} </p>
        </div>
      </div>
      <div className="card">
        <img id="f" className="card-img-top" src="https://s3.amazonaws.com/cartool/test_drive.jpg" alt="Test Drive"/>
        <div className="card-block">
          <h4 className="card-title">Schedule Test Drive</h4>
          <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
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
