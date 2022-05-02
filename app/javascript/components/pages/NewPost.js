import React, { Component } from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import { Redirect } from "react-router-dom";
import '../components/headerstyles.css';


class NewPost extends Component {
    constructor(props){
        super(props)
        this.state = {
            newPost: {
                title: "",
                content: "",
                burrow_id: this.props.burrowId,
            },
            submitted: false
        }
    }
    
    handleChange = (e) => {
        let { newPost } = this.state
        newPost[e.target.name] = e.target.value
        this.setState({newPost: newPost})
    
    }
    
    handleSubmit = (e) => {
        e.preventDefault()
        this.createNewPost(this.state.newPost)
        this.setState({submitted: true})
    
    }

    createNewPost = () => {
    fetch("/posts", {
      body: JSON.stringify(this.state.newPost),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    })
      .then((response) => response.json())
      .then((result) => console.log(result))
      .catch((errors) => console.log("Error: Post not generated", errors));
  };
  
  render() {
    return (
      <>
        <div className="abouttitle">
          <br />
          <h1>Add a new Post</h1>
          <br />
        </div>
        <div className="aboutusheader"></div>
        <Form>
          <FormGroup>
            <Label>Title</Label>
            <Input
              type="text"
              name="title"
              value={this.state.newPost.title}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup>

            <Label for="exampleText">Content</Label>
            <Input
              id="exampleText"
              name="content"
              type="textarea"

              value={this.state.newPost.content}
              onChange={this.handleChange}
            />
          </FormGroup>
          <Button name="submit" onClick={this.handleSubmit}>
            Create a New Post
          </Button>
          {this.state.submitted && <Redirect to="/" />}
        </Form>
      </>
    );
  }
}
export default NewPost;
