import React, { Component } from "react";
import "../components/headerstyles.css";
import {
  Card,
  CardText,
  CardTitle,
  Button,
  CardGroup,
  CardBody,
  Col,

} from "reactstrap";
import { NavLink } from "react-router-dom";

class ShowBurrow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      burrow: null,
      posts: [],
    };
  }

  componentDidMount() {
    fetch(`/burrows/${this.props.burrowid}`)
      .then(response => response.json())
      .then(results => {
        this.setState({
          isLoaded: true,
          burrow: results,
          posts: results.posts,
        });
      })
      .catch((errors) => console.log("Posts errors:", errors));
  }

  render() {
    const { isLoaded, posts } = this.state;
    if (isLoaded) {
      return (
        <>
          <div className="homebackground">
            <br />
            <h1>{this.state.burrow.title} </h1>
            <br />
          </div>

          <Col sm="6" className="showburrow">
            <CardBody className="showburrowimage">
              <img src={this.state.burrow.image} />
              <CardText className="burrowtext">
                <br />
                <br /> {this.state.burrow.about}
                <br />
                <br />
                <NavLink to={`/postnew/${this.state.burrow.id}`}>
                  <Button className="createbutton">Create New Post</Button>
                  <br />
                  <br />
                  <br />
                </NavLink>
              </CardText>
            </CardBody>

            <CardGroup className="postsection"></CardGroup>

            {posts?.map((post) => (
              <Card key={post.id}>
                <CardBody>
                  <br />
                  <br />

                  <CardTitle tag="h1">{post.title}</CardTitle>
                  <br />
                  <br />
                  <br />
                  <br />
                  <CardTitle tag="h4">{post.content}</CardTitle>
                 
                  
                  <NavLink to={`/postedit/${this.state.burrow.id}`}>
                    <Button className="createbutton">Edit this Post</Button>
                  </NavLink>


                  <NavLink to="/burrowcards">
                        <Button className="createbutton" 
                        onClick= {() => this.props.deletedPost(post.id)}>
                          Delete this Post
                        </Button>
                      </NavLink>
                    
                </CardBody>
                
              </Card>
            ))}
          </Col>
        </>
      );
    }
  }
}

export default ShowBurrow;