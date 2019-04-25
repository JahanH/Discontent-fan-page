import React from "react";
import {Label, Input, Form, Button} from "reactstrap";
import "../../styles/css/form-styles.css";

export class CareerForm extends React.Component {
  render() {
    return (
      <Form>
        <Input type="text" name="firstName" placeholder="First Name" onChange={this.handleChange} required/>
        <Input type="text" name="lastName" placeholder="Last Name" onChange={this.handleChange} required/>
        <br/>
        <Input type="text" name="address" placeholder="Address" onChange={this.handleChange}/>
        Today's date: <Input type="date" name="today" placeholder="yyyy-mm-dd" onChange={this.handleChange}/>
        <Input type="text" name="socialSec" placeholder="Social Security #" onChange={this.handleChange} requried/>
        <Input type="text" name="phone" placeholder="xxx-xxx-xxxx" onChange={this.handleChange}/>
        <br/>
        Can you verify that you are 18 or older?
        <Input type="radio" name="adult" value="Yes" onChange={this.handleChange}/>Yes
        <Input type="radio" name="adult" value="No" onChange={this.handleChange} checked/>No<br/>
        Have you graduated from High School?
        <Input type="radio" name="highSchool" value="Yes" onChange={this.handleChange}/>Yes
        <Input type="radio" name="highSchool" value="No" onChange={this.handleChange} checked/>No<br/>
        Have you graduated from College?
        <Input type="radio" name="college" value="Yes" onChange={this.handleChange}/>Yes
        <Input type="radio" name="college" value="No" onChange={this.handleChange} checked/>No<br/>
        <Input type="text" name="collegeYrs" placeholder="Years in college" onChange={this.handleChange}/>
        <Input type="text" name="collegeMaj" placeholder="Major" onChange={this.handleChange}/>
        <Input type="text" name="collegeMin" placeholder="Minor" onChange={this.handleChange}/>
        <br/>
        Previous work experience:<br/>
        <Input type="text" name="companyName" placeholder="Company Name" onChange={this.handleChange}/>
        Start date: <Input type="date" name="companyStart" placeholder="yyyy-mm-dd" onChange={this.handleChange}/>
        End date: <Input type="date" name="companyEnd" placeholder="yyyy-mm-dd" onChange={this.handleChange}/>
        <br/>
        Previous salary: <Input type="text" name="salaryStart" placeholder="Starting Salary" onChange={this.handleChange}/>
        <Input type="text" name="salaryEnd" placeholder="Final Salary" onChange={this.handleChange}/>
        <br/>
        List of Duties: <Input type="text" name="doodies" onChange={this.handleChange}/>
        Reason for Leaving: <Input type="text" name="reason4Leaving" onChange={this.handleChange}/>
        <br/>
        Have you ever been convicted of a felony? 
        <Input type="radio" name="felony" value="Yes" onChange={this.handleChange}/>Yes
        <Input type="radio" name="felony" value="No" onChange={this.handleChange} checked/>No<br/>
        If yes, describe: <Input type="text" name="felonyDesc" onChange={this.handleChange}/>
        <br/>
        Please list the hours you are available to work each day:<br/>
        Sunday <Input type="text" name="sunday" placeholder="e.g. 9am to 5pm" onChange={this.handleChange} required/>
        Monday <Input type="text" name="monday" placeholder="e.g. 9am to 5pm" onChange={this.handleChange} required/><br/>
        Tuesday <Input type="text" name="tuesday" placeholder="e.g. 9am to 5pm" onChange={this.handleChange} required/>
        Wednesday <Input type="text" name="wednesday" placeholder="e.g. 9am to 5pm" onChange={this.handleChange} required/><br/>
        Thursday <Input type="text" name="thursday" placeholder="e.g. 9am to 5pm" onChange={this.handleChange} required/>
        Friday <Input type="text" name="friday" placeholder="e.g. 9am to 5pm" onChange={this.handleChange} required/><br/>
        Saturday <Input type="text" name="saturday" placeholder="e.g. 9am to 5pm" onChange={this.handleChange} required/>
        <br/>
        List 3 personal references AND their relationship to you. (Please NO immediate family)<br/>
        1. <Input type="text" name="ref1" placeholder="name and relationship" onChange={this.handleChange} requried/>
        Phone # <Input type="text" name="ref1Phone" placeholder="xxx-xxx-xxxx" onChange={this.handleChange}/><br/>
        2. <Input type="text" name="ref2" placeholder="name and relationship" onChange={this.handleChange} requried/>
        Phone # <Input type="text" name="ref2Phone" placeholder="xxx-xxx-xxxx" onChange={this.handleChange}/><br/>
        3. <Input type="text" name="ref3" placeholder="name and relationship" onChange={this.handleChange} requried/>
        Phone # <Input type="text" name="ref3Phone" placeholder="xxx-xxx-xxxx" onChange={this.handleChange}/>
        <br/>
        What position are you applying for? <Input type="text" name="desiredPosition" placeholder="Sales Associate, Manager, etc." onChange={this.handleChange} requried/>
      </Form>
    );
  }
}