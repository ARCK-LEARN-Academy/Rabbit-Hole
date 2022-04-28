import React, { Component } from "react";
import {
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle
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
        This is not the burrow you are looking for...
      </CardSubtitle>
    </CardBody>
    <img
      alt="Card image cap"
      src="https://picsum.photos/318/180"
      width="100%"
    />
    <CardBody>
      <CardText>
        There is no content here!
      </CardText>
    </CardBody>
  </Card>
</div>
      
    );
  }
  
}



