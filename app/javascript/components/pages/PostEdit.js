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
        burrow_id: this.props.burrowId,
        
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
    this.editPost(this.state.newPost, this.props.post.id)
    this.setState({ submitted: true })
  };

  editPost = (editedpost, id) => {
    fetch(`/posts/${id}`, {
      body: JSON.stringify(editedpost),
      headers: {
        "Content-Type": "application/json",
      },
      method: "PATCH",
    })
      .then(response => response.json())
      .catch(errors => console.log("Error: Post not edited", errors))
      
  };
  
  
  
  render() {
   console.log(this.props.post)
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
          {this.state.submitted && <Redirect to="/" />}
          
        </Form>
      </>
    )
  }
}

export default PostEdit