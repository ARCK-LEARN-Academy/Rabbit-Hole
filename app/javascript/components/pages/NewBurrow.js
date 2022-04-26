import React, {Component} from "react";
import { Button, Form, FormGroup, Input, Label} from 'reactstrap'
import { Redirect } from 'react-router-dom'

class NewBurrow extends Component {
    constructor(props){
        super(props)
        this.state = {
            newBurrow: {
                title: "",
                about: "",
                image: ""
            },
            submitted: false
        }
    }
    handleChange = (e) => {
        let { newBurrow } = this.state
        newBurrow[e.target.name] = e.target.value
        this.setState({newBurrow: newBurrow})
    
    }
    handleSubmit = (e) => {
        e.preventDefault()
        this.createNewBurrow(this.state.newBurrow)
        this.setState({submitted: true})
    
    }

    createNewBurrow = (newBurrow) => {
        fetch("/burrows", {
          body: JSON.stringify(newBurrow),
          headers: {
            "Content-Type": "application/json"
          },
          method: "POST"
        })
        .then(response => response.json())
         
        .then(result => console.log(result))
        .catch(errors => console.log("Error: Burrow not generated", errors))
    }

    render() {
        return(
            <>
                <h1>Add a new Burrow!</h1>
                <Form>
                    <FormGroup>
                        <Label>Title</Label>
                        <Input type="text" name="title" value={this.state.newBurrow.title} onChange={this.handleChange}/>
                    </FormGroup>
                    <FormGroup>
                        <Label>About</Label>
                        <Input type="text" name="about" value={this.state.newBurrow.about} onChange={this.handleChange}/>
                    </FormGroup>
                    <FormGroup>
                        <Label>Add a Pic!</Label>
                        <Input type="text" name="image" value={this.state.newBurrow.image} onChange={this.handleChange}/>
                    </FormGroup>
                    <Button name="submit" onClick={this.handleSubmit}>
                        Create a New Burrow
                    </Button>
                    {this.state.submitted && <Redirect to="/" />}
                </Form>

            </>
        )
    }
}
export default NewBurrow






