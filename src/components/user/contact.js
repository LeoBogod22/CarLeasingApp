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
            url:"http://localhost:4000/send", 
            data: {
                name: name,   
                email: email,  
                message: message
            }
        }).then((response)=>{
          console.log(response.data)
            if (response.data.msg === 'success'){
               this.setState({
      alertMsg: true
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
      <div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Form id="d" method="POST" onSubmit={this.handleSubmit.bind(this)} method="POST">
        <div className="row">
          <div className="col-3">
            <FormGroup>
              <Label for="examplename">Your Name</Label>
              <Input type="text" id="examplename"
                value={this.state.uname}
                onChange={(e) => this.setState({uname: e.target.value})}
              />
            </FormGroup>
          </div>
          <div className="col-3">
            <FormGroup>
              <Label for="exampleEmail">Email</Label>
              <Input type="email" id="exampleEmail"
                value={this.state.uemail}
                onChange={(e) => this.setState({uemail: e.target.value})}
              />
            </FormGroup>
          </div>
          <div className="col-3">
            <FormGroup>
              <Label for="examplephone">Phone</Label>
              <Input type="text" id="examplephone"
                value={this.state.uphone}
                onChange={(e) => this.setState({uphone: e.target.value})}
              />
            </FormGroup>
          </div>
          <div className="col-3">
            <FormGroup>
              <Label for="examplecarid">Car ID</Label>
              <Input type="text" id="examplecarid"
                value={this.state.uinterest}
                onChange={(e) => this.setState({uinterest: e.target.value})}
              />
            </FormGroup>
          </div>
        </div>
        <div className="row">
          <div className="col-10">
            <FormGroup>
              <Label for="specialmessage">Message</Label>
              <Input type="textarea" id="specialmessage"
                value={this.state.umessage}
                onChange={(e) => this.setState({umessage: e.target.value})}
              />
            <br/>
            </FormGroup>
          </div>
          <div className="col-2">
            <br/>
            <FormGroup>

      <br></br>
              <button type="submit" class="btn btn-success">Submit</button>
            </FormGroup>
          </div>
        </div>
        
         <div>
        <Alert
          isOpen={this.state.alertMsg}
          toggle={this.alertMsgClose}
          color="success">
          Message sent successfully. We will get back to you!
        </Alert>
    </div>
       
    </Form>
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
