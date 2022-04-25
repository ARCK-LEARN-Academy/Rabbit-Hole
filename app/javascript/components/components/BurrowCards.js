import React, { Component } from "react";


import {
  CardGroup,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Button,
} from "reactstrap";

class BurrowCards extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <CardGroup>
      {this.props.burrows.map((burrow) => (
        <Card key={burrow.id}>
          <CardImg
            alt="Card image cap"
            src={burrow.image}
            top
            width="100%"
          />
          <CardBody>
            <CardTitle tag="h5">{burrow.title}</CardTitle>
            <CardText>
              {burrow.about}
            </CardText>
            <Button>Enter {burrow.title}</Button>
          </CardBody>
        </Card>
        ))}
      </CardGroup>
    );
  }
}

export default BurrowCards;
