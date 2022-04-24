import React, { Component } from "react";

import {
  CardGroup,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";

import '../components/headerstyles.css'

class AboutUs extends Component {
  constructor() {
    super();
  }
  render() {
    return (
    <div class = "aboutusheader">
    <br/>
    <h1>About Us</h1>
    <br/>
    <br/>
    <br/>

    
      
      
      <CardGroup>
        <Card>
          <CardImg
            alt="Card image cap"
            src="https://media-exp1.licdn.com/dms/image/C4E03AQGsF3wasq-bpw/profile-displayphoto-shrink_800_800/0/1648753108218?e=1656547200&v=beta&t=uEumS6_PU9lbv4lTyngUP9s0ZjuIR3QDhkxhD5hN_3c"
            top
            width="100%"
          />
          <CardBody>
            <CardTitle tag="h5">Alexis G. Ranga</CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
              <h6>LEARN Academy</h6>
            </CardSubtitle>
            <CardText>
            This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.
            </CardText>
            <Button
            href="https://www.linkedin.com/in/alexisranga/"> 
            LinkedIn</Button>
          </CardBody>
        </Card>
        <Card>
          <CardImg
            alt="Card image cap"
            src="https://media-exp1.licdn.com/dms/image/C4D03AQHXq-7d-hEvxg/profile-displayphoto-shrink_800_800/0/1648747416130?e=1656547200&v=beta&t=nTOPOdJ96sn49lbRby2Y58rz9JU0YsVvynX0m6tpsr0"
            top
            width="100%"
          />
          <CardBody>
            <CardTitle tag="h5">Ramon Bolds</CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
            <h6>LEARN Academy</h6>
            </CardSubtitle>
            <CardText>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This card has even longer content
              than the first to show that equal height action.
            </CardText>
            <Button
            href="https://www.linkedin.com/in/ramon-bolds85/">
            LinkedIn</Button>
          </CardBody>
        </Card>
        <Card>
          <CardImg
            alt="Card image cap"
            src="https://avatars.githubusercontent.com/u/99688004?v=4"
            top
            width="100%"
          />
          <CardBody>
            <CardTitle tag="h5">Curtis Liu</CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
            <h6>LEARN Academy</h6>
            </CardSubtitle>
            <CardText>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This card has even longer content
              than the first to show that equal height action.
            </CardText>
            <Button
            href="https://www.linkedin.com/in/curtis-liu-944bb6172/">
            LinkedIn</Button>
          </CardBody>
        </Card>
        <Card>
          <CardImg
            alt="Card image cap"
            src="https://avatars.githubusercontent.com/u/89428804?v=4"
            top
            width="100%"
          />
          <CardBody>
            <CardTitle tag="h5">Keelan Patterson Caesar</CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
            <h6>LEARN Academy</h6>
            </CardSubtitle>
            <CardText>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This card has even longer content
              than the first to show that equal height action.
            </CardText>
            <Button
            href="https://www.linkedin.com/in/keelanpc/">
            LinkedIn</Button>
          </CardBody>
        </Card>
      </CardGroup>
      </div>
    );
  }
}

export default AboutUs;
