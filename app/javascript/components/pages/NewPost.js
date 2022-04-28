import React, { Component } from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import { Redirect } from "react-router-dom";

class NewPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newPost: {
        title: "",
        content: "",
      },
      submitted: false,
    };
  }
  handleChange = (e) => {
    let { newPost } = this.state;
    newPost[e.target.name] = e.target.value;
    this.setState({ newPost: newPost });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.createNewPost();
    this.setState({ submitted: true });
  };

  createNewPost = () => {
    fetch("/posts", {
      body: JSON.stringify(this.state.newPost),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    })
      .then((response) => console.log(response.json()))
      .then((result) => console.log(result))
      .catch((errors) => console.log("Error: Post not generated", errors));
  };

  render() {
    return (
      <>
        <h1>Add a new Post!</h1>
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
            <Label>Content</Label>
            <Input
              type="text"
              name="content"
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
