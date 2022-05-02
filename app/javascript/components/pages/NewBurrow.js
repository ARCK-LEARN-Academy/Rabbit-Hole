import React, { Component } from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import { Redirect } from "react-router-dom";


import '../components/headerstyles.css';


class NewBurrow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newBurrow: {
        title: "",
        about: "",
        image: "",
      },
      submitted: false,
    };
  }
  handleChange = (e) => {
    let { newBurrow } = this.state;
    newBurrow[e.target.name] = e.target.value;
    this.setState({ newBurrow: newBurrow });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.createNewBurrow(this.state.newBurrow);
    this.setState({ submitted: true });
  };

  render() {
    return (
      <>
        <div className="abouttitle">
          <br />
          <h1>Add a new Burrow</h1>
          <br />
        </div>
        <Form>
          <FormGroup className="addbody">
              <br />
              <br />
            <Label >Title</Label>
            <Input  className="addbody"
              type="text"
              name="title"
              value={this.state.newBurrow.title}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup className="addbody">
                <br />
              <br />
             
             
            <Label>About</Label>
            <Input className="addbody"
              type="text"
              name="about"
              value={this.state.newBurrow.about}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup className="addbody">
          <br />
              <br />
              
             
            <Label>Add a Pic!</Label>
            <Input className="addbody"
              type="text"
              name="image"
              value={this.state.newBurrow.image}
              onChange={this.handleChange}
            />
          </FormGroup>
          <div className="addbody">
              <br />
              <br />
          <Button className="createbutton" onClick={this.handleSubmit}>
            Submit
           
          </Button>
         
          {this.state.submitted && <Redirect to="/" />}
          </div>
          <br />
          
        </Form>
        
      </>
    );
  }
}
export default NewBurrow;
