import React from "react";
import Recaptcha from "react-recaptcha";
import {Col, Label, Input, Form, FormGroup, Button} from "reactstrap";
import axios from "axios";
import "../../styles/css/content-styles.css";

export class ContactUs extends React.Component {
  constructor() {
      super()

      this.state = {
          name: '',
          email: '',
          message: ''
      }

      //this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    axios({
        method: "POST", 
        url:"http://localhost:3001/send", 
        data: {
            name: name,   
            email: email,  
            messsage: message
        }
    }).then((response)=>{
        if (response.data.msg === 'success'){
            alert("Message Sent."); 
            this.resetForm()
        }else if(response.data.msg === 'fail'){
            alert("Message failed to send.")
        }
    })
  }

  resetForm(){
    document.getElementById('contact-form').reset();
  }

  componentDidMount() {
    const script = document.createElement("script");
    script.src = "https://www.google.com/recaptcha/api.js";
    script.async = true;
    document.body.appendChild(script);
  }
  
  render() {
    return (
      <div id="contact-us">
        <div className="pageContainer">
            <h1 className="pageHeader">We want to hear your feedback!</h1>
            <p>
                Discontent is committed to anything but and we want to hear from you! If you 
                have any comments or suggestions about your shopping experience, or unanswered 
                questions about our business, just fill out the form below to send us a direct 
                line that we can respond to as soon as time permits. Your opinions matter here! 
            </p>
            <Form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
                <FormGroup row>
                    <Label sm={2}>Your Name</Label>
                    <Col sm={6}>
                        <Input type="text" name="name" placeholder="e.g. Jane Smith"/>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label sm={2}>Your Email address</Label>
                    <Col sm={6}>
                        <Input type="text" name="email" placeholder="example@domain.com"/>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label sm={2}>Tell us what you think</Label>
                    <Col sm={6}>
                        <Input type="textarea" name="message" placeholder="Dear Discontent..."/>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label sm={2}></Label>
                    <Col sm={6}>
                        <Recaptcha sitekey="6LfOB3QUAAAAAHqgobdmhDwSGltHy_P4F5jiRnNj" render="explicit"/>
                    </Col>
                </FormGroup>
                <Button color="primary" size="lg">Send Email</Button>
            </Form>
        </div>
      </div>
    );
  }
}
