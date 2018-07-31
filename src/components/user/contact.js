//done
import React, { Component } from 'react';
import { Form, FormGroup, Input, Alert, Label } from 'reactstrap';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { sendMessage } from '../../actions/message';
import axios from 'axios';
class ContactForm extends Component {

  state = {
    uname: '',
    uemail: '',
    uphone: '',
    msg:'',

      isHidden: true,
    uinterest: '',
    umessage: '',
    followup: false,
    read: false,
    alertMsg: false
  }


   alertMsgClose = () => {
    this.setState({ alertMsg: false });
  }


  handleSubmit = (e) => {
     e.preventDefault();
        const name = this.state.uname;
        const email = this.state.uemail;
        const message = this.state.umessage;
        
       
        console.log("Sending", this.state)
        axios({
            method: "POST", 
            url:"https://directmotorgroup.herokuapp.com/send", 
            data: {
                name: name,   
                email: email,  
                message: message
            }
        }).then((response)=>{
          console.log(response.data)
            if (response.data.msg === 'success'){

               this.setState({
     isHidden: !this.state.isHidden
    }) 
               
            }else if(response.data.msg === 'fail'){
                alert("Message failed to send.")
            }
        })
        .catch(err => {
          console.log(err)
        })
    }
  alertMsgClose = () => {
    this.setState({ alertMsg: false });
  }

  render(){
    return(
      <div className={(this.props.showTitle == 'false' ? 'contact-form-included' : 'container')}>
      <Form id="style" method="POST" onSubmit={this.handleSubmit.bind(this)}>
        <h3 className="text-center text-success header-text">Contact Us</h3>
        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
            <label>Your Name</label>
            <input type="text" className="form-control"
                value={this.state.uname}
                onChange={(e) => this.setState({uname: e.target.value})}/>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <Label>Email</Label>
              <Input type="email" className="form-control"
                value={this.state.uemail}
                onChange={(e) => this.setState({uemail: e.target.value})}/>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <Label>Phone</Label>
              <Input type="text" className="form-control"
                value={this.state.uphone}
                onChange={(e) => this.setState({uphone: e.target.value})}/>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <Label>Car ID or Model</Label>
              <Input type="text" className="form-control"
                value={this.state.uinterest}
                onChange={(e) => this.setState({uinterest: e.target.value})}/>
            </div>
          </div>
          <div className="col-12">
            <div className="form-group">
              <Label>Your Message</Label>
              <Input type="textarea"
                value={this.state.umessage}
                onChange={(e) => this.setState({umessage: e.target.value})}/>
            </div>
          </div>
          <div className="col-12">
            <div className="text-center">
              <button id="btn-gradient" type="submit">Submit</button>
            </div>
          </div>
        </div>
        
        <div>
                  </div> 
      </Form>
        {!this.state.isHidden && <div className="alert alert-success"> Message has been sent!  </div> }
    </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    sendMessage: bindActionCreators(sendMessage, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(ContactForm);