import React, { Component } from 'react'
import { Form, FormGroup, Input, Label, Button } from 'reactstrap'
import { Redirect } from 'react-router-dom'

class PostEdit extends Component {
  constructor(props) {
    super(props)
    this.state = {
      newPost: {
        title: "",
        content: "",
        post_id: this.props.postId,
      },
      submitted: false,
    };
  };

  


  handleChange = (e) => {
    let { newPost } = this.state
    newPost[e.target.name] = e.target.value
    this.setState({ newPost: newPost })
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.updatePost(this.state.newPost, this.props.post_id)
    this.setState({ submitted: true })
  };

  updatePost = (editpost, id) => {
    fetch(`/posts/${id}`, {
      body: JSON.stringify(editpost),
      headers: {
        "Content-Type": "application/json",
      },

      method: "PATCH",
    })
      .then((response) => response.json())
      .then((payload) => this.readPost())
      .catch((errors) => console.log("Post update errors:", errors));
  };
  
  render() {
   
    return (
      <>
        <h1>Edit your Post</h1>
        <Form>
          <FormGroup>
            <Label for="title">Title</Label>
            <Input
              type="text"
              name="title"
              
              onChange={this.handleChange}
              value={this.state.newPost.title}
            />
          </FormGroup>
          <FormGroup>
            <Label for="content">Content</Label>
            <Input
              type="text"
              name="content"
              onChange={this.handleChange}
              value={this.state.newPost.content}
             
            />
         
          </FormGroup>
          <Button name="submit" onClick={this.handleSubmit}>
            Update this Post
          </Button>
          {this.state.submitted && <Redirect to={`/burrowcards/${this.props.post.id}`} />}
        </Form>
      </>
    )
  }
}

export default PostEdit