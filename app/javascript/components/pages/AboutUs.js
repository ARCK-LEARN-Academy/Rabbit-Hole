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

import "../components/headerstyles.css";

class AboutUs extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <>
        <div className="abouttitle">
          <br />
          <h1>About Us</h1>
          <br />
        </div>
        <div className="aboutusheader">
          <CardGroup>
            <Card>
              <CardImg
                alt="Card image cap"
                src="https://media-exp1.licdn.com/dms/image/C4E03AQGsF3wasq-bpw/profile-displayphoto-shrink_800_800/0/1648753108218?e=1656547200&v=beta&t=uEumS6_PU9lbv4lTyngUP9s0ZjuIR3QDhkxhD5hN_3c"
                top
                width="100%"
              />
              <CardBody className="cardbody">
                <CardTitle tag="h4">Alexis G. Ranga</CardTitle>
                <CardSubtitle className="mb-2 text-muted" tag="h6">
                  <h6>LEARN Academy</h6>
                </CardSubtitle>
                <CardText>
                I don’t like to define myself by the work I’ve done. I define myself by the work I want to do. Skills can be taught, personality is inherent. I prefer to keep learning, continue challenging myself, and do interesting things that matter.
                </CardText>
                <Button href="https://www.linkedin.com/in/alexisranga/">
                  LinkedIn
                </Button>
              </CardBody>
            </Card>
            <Card>
              <CardImg
                alt="Card image cap"
                src="https://media-exp1.licdn.com/dms/image/C4D03AQHXq-7d-hEvxg/profile-displayphoto-shrink_800_800/0/1648747416130?e=1656547200&v=beta&t=nTOPOdJ96sn49lbRby2Y58rz9JU0YsVvynX0m6tpsr0"
                top
                width="100%"
              />
              <CardBody className="cardbody">
                <CardTitle tag="h5">Ramon Bolds</CardTitle>
                <CardSubtitle className="mb-2 text-muted" tag="h6">
                  <h6>LEARN Academy</h6>
                </CardSubtitle>
                <CardText>
                  About me: Hello, my name is Ramon, but most of my friends and
                  family call me 'Mon or Nick! I wake up excited and inspired to
                  know what the day has for me. Becoming a father and serving in
                  the U.S. Marine Corps, created a paradigm shift in my life,
                  that has provided new passions and motivations ever since. Im
                  a simple man, blessed with a beautiful wife and two amazing
                  kids, who motivate me daily. I wake up every day striving to
                  be the man my children see me as. As a husband and a father,
                  when Im given problems, it's not a question whether daddy can
                  fix it, it's assumed I can. Having a family, changed the way I
                  viewed every thing in life, while also given me motivation,
                  passion, and inspiration. I believe that problems and
                  mistakes, our opportunities to learn, grow, and create
                  something new.
                </CardText>
                <Button href="https://www.linkedin.com/in/ramon-bolds85/">
                  LinkedIn
                </Button>
              </CardBody>
            </Card>
            <Card>
              <CardImg
                alt="Card image cap"
                src="https://avatars.githubusercontent.com/u/99688004?v=4"
                top
                width="100%"
              />
              <CardBody className="cardbody">
                <CardTitle tag="h5">Curtis Liu</CardTitle>
                <CardSubtitle className="mb-2 text-muted" tag="h6">
                  <h6>LEARN Academy</h6>
                </CardSubtitle>
                <CardText>
                  Hi, my name is Curtis Liu. I am a junior software engineer
                  that helped build Rabbit-hole! A few facts about me is that I
                  enjoy gaming and basketball. If I’m not working, I would
                  likely be spending time with my family, gaming, or watching
                  basketball! Moving on to Rabbit-hole, this group project was a
                  challenge for us to create a full-stack web application by
                  using React in Rails. I thoroughly enjoyed the process of
                  building this application and I learned a lot! It was a
                  pleasure to work on this project with my team!
                </CardText>
                <Button href="https://www.linkedin.com/in/curtis-liu-944bb6172/">
                  LinkedIn
                </Button>
              </CardBody>
            </Card>
            <Card>
              <CardImg
                alt="Card image cap"
                src="https://avatars.githubusercontent.com/u/89428804?v=4"
                top
                width="100%"
              />
              <CardBody className="cardbody">
                <CardTitle tag="h5">Keelan Patterson Caesar</CardTitle>
                <CardSubtitle className="mb-2 text-muted" tag="h6">
                  <h6>LEARN Academy</h6>
                </CardSubtitle>
                <CardText>
                  Father. Musician. Coder. When not bashing his
                  head against the keyboard, Keelan enjoys playing his ukulele
                  and spending time with his kids. Enjoys taking on new
                  challenges.
                </CardText>
                <Button href="https://www.linkedin.com/in/keelanpc/">
                  LinkedIn
                </Button>
              </CardBody>
            </Card>
          </CardGroup>
          <h1>A R C K</h1>
        </div>
      </>

    );
  }
}

export default AboutUs;
