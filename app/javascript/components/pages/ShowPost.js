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
    const {
      logged_in,
      current_user,
      // new_user_route,
      // sign_in_route,
      // sign_out_route,
    } = this.props;
    console.log("logged_in:", logged_in);
    console.log("current_user:", current_user);
    return (
      <>
        <h1>ShowPost Page</h1>
        <div>
          <Card>
            <CardBody>
              <CardTitle tag="h5">Post title</CardTitle>
              <CardSubtitle className="mb-2 text-muted" tag="h6">
                Card subtitle
              </CardSubtitle>
            </CardBody>
            
            <CardBody>
              <CardText>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </CardText>
            </CardBody>

            <CardBody>
              {/* <CardLink href="#">Delete Burrow</CardLink> */}
            </CardBody>
          </Card>
          {/* <Card body className="text-left">
            <CardTitle tag="h5">Example Post1</CardTitle>
            <CardText>
              With supporting text below as a natural lead-in to additional
              content.
            </CardText>
            <Button>Read Post1</Button>
          </Card>
          <Card body className="text-right">
            <CardTitle tag="h5">Example Post2</CardTitle>
            <CardText>
              With supporting text below as a natural lead-in to additional
              content.
            </CardText>
            <Button>Read Post2</Button> */}
          {/* </Card> */}
        </div>
      </>
    );
  }
}

export default ShowPost;
