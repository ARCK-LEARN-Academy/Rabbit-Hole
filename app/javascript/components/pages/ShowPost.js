import React, { Component } from "react";
import {
  CardGroup,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardLink,
  Button,
} from "reactstrap";

class ShowPost extends Component {
  render() {
    const { logged_in, current_user } = this.props;
    console.log("logged_in:", logged_in);
    console.log("current_user:", current_user);
    return (
      <>
        <h1>ShowPost Page</h1>
        <Card>
          <CardBody>
            <CardTitle tag="h5">{post.title}</CardTitle>
            <CardBody>
              <CardText>{post.content}</CardText>
            </CardBody>
          </CardBody>
        </Card>
      </>
    );
  }
}

export default ShowPost;

