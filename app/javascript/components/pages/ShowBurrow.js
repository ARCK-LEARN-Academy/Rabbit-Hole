import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardText,
  CardTitle,
  Button,
  CardGroup,
  CardBody,
} from "reactstrap";

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
    fetch(`/burrows/${this.props.match.params.burrowid}`)
      .then((response) => response.json())
      .then((results) => {
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
          <h1>{this.state.burrow.title}</h1>
          <Link to={"/posts/new"}>
            <Button>Create a New Post!</Button>
          </Link>
          <CardGroup>
            {posts?.map((post) => (
              <Card key={post.id}>
                <CardBody>
                  <CardTitle tag="h5">{post.title}</CardTitle>
                  <CardText>Click to read more!</CardText>
                  <Button>Open {post.title}</Button>
                </CardBody>
              </Card>
            ))}
          </CardGroup>
        </>
      );
    }
  }
}

export default ShowBurrow;
