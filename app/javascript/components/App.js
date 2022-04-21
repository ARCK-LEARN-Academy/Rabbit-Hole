import React from "react";
import Home from "./pages/Home";
import Paginate from "./components/Paginate";
import Header from "./components/Header";
import Footer from "./components/Footer";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends React.Component {
  render() {
    // const {
    //   logged_in,
    //   current_user,
    //   new_user_route,
    //   sign_in_route,
    //   sign_out_route
    // } = this.props
    // console.log("logged_in:", logged_in)
    // console.log("current_user:", current_user)
    // console.log("new_user_route:", new_user_route)
    // console.log("sign_in_route:", sign_in_route)
    // console.log("sign_out_route:", sign_out_route)
    return (
      <>
        <Header {...this.props}/>
        <Home />
        <Paginate />
        <Footer />
      </>
    );
  }
}

export default App;
