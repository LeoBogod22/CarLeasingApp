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

  handleSubmit = (e) => {
     e.preventDefault();
        const name = this.state.uname;
        const email = this.state.uemail;
        const message = this.state.umessage;
        axios({
            method: "POST", 
            url:"http://localhost:8000/send", 
            data: {
                name: name,   
                email: email,  
                messsage: message
            }
        }).then((response)=>{
            if (response.data.msg === 'success'){
                alert("Message Sent."); 
               
            }else if(response.data.msg === 'fail'){
                alert("Message failed to send.")
            }
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
      <Form method="POST" onSubmit={this.handleSubmit.bind(this)} method="POST">
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
      { window.location.hash === '#success' &&
        <div id="success">
          <p>Your message has been sent!</p>
        </div>
      }
      { window.location.hash === '#error' &&
        <div id="error">
          <p>An error occured while submitting the form.</p>
        </div>
      }
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
