import React, { Component } from "react";
import BurrowCards from "../components/BurrowCards";
import "../components/burrowcards.css"

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
    const { posts, isLoaded } = this.state;
    if (isLoaded) {
      return (
        <div className="homebackground">
          <br />
          <h1>Explore the Burrows</h1>
          <BurrowCards burrows={this.state.burrows} />
        </div>
      );
    }
  }
}

export default Home;
