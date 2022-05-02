// import React, { Component } from "react";
// import { Link } from "react-router-dom";
// import "./burrowcards.css"

// import {
//   CardGroup,
//   Card,
//   CardImg,
//   CardText,
//   CardBody,
//   CardTitle,
//   Button,
// } from "reactstrap";

// class BurrowCards extends Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     return (
//       <CardGroup className="burrowcards">
//       {this.props.burrows.map((burrow) => (
//         <Card key={burrow.id}>
//           <CardImg
//             alt="Card image cap"
//             src={burrow.image}
//             top
//             width="100%"
//           />
//           <CardBody>
//             <CardTitle tag="h5">{burrow.title}</CardTitle>
//             <CardText>
//               {burrow.about}
//             </CardText>
//             <Link to={`/burrow/${burrow.id}`}>
//               <Button>Enter {burrow.title}</Button>
//             </Link>
//           </CardBody>
//         </Card>
//         ))}
//       </CardGroup>
//     );
//   }
// }

// export default BurrowCards;


import React, { Component } from 'react'
// import { Card, CardTitle, Col } from 'reactstrap'

import {
  CardGroup,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Button,
  Col
} from "reactstrap";

import { NavLink } from 'react-router-dom'

import "./burrowcards.css"

class BurrowCards extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
       
        <Col sm="6" className="burrowcards">
          {this.props.burrows && this.props.burrows.map(burrow=> {
            return (
              <Card body key={burrow.id} >
                <CardTitle className="cardtitle">
                  <NavLink className="link" to={`/burrow/${burrow.id}`} key={burrow.id}>
                  <br />
                    {burrow.title}<br />
                    <br />
                    
                    <img src={burrow.image} width="800px" height="500px"  />
                    <br />
                    <br />
                  </NavLink>
                </CardTitle>
              </Card>
            )
          })}
        </Col>
      </>
    )
  }
}

export default BurrowCards
 