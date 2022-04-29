import React, { Component } from "react";
import BurrowCards from "../components/BurrowCards";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      burrows: [],
      posts: [],
    };
  }

  componentDidMount() {
    fetch("/burrows")
      .then((response) => response.json())
      .then((results) => {
        this.setState({
          isLoaded: true,
          burrows: results,
        });
      })
      .catch((errors) => console.log("Errors:", errors));
  }

  render() {
    const { isLoaded } = this.state;
    if (isLoaded) {
      return (
        <>
          <h1>Explore the Burrows</h1>
          <BurrowCards burrows={this.state.burrows} />
        </>
      );
    }
  }
}

export default Home;
