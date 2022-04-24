

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

export default class NotFound extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
  <Card>
    <CardBody>
      <CardTitle> 
        <h1>Oooops.... Page Not Found</h1>
      </CardTitle>
      <CardSubtitle
        className="mb-2 text-muted"
        tag="h6"
      >
        Card subtitle
      </CardSubtitle>
    </CardBody>
    <img
      alt="Card image cap"
      src="https://picsum.photos/318/180"
      width="100%"
    />
    <CardBody>
      <CardText>
        Some quick example text to build on the card title and make up the bulk of the card's content.
      </CardText>
      <CardLink href="#">
        Card Link
      </CardLink>
      <CardLink href="#">
        Another Link
      </CardLink>
    </CardBody>
  </Card>
</div>
      
    );
  }
}


