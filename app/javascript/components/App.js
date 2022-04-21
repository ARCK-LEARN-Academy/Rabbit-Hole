import React from "react";
import Home from "./pages/Home";
import Paginate from "./components/Paginate";
import Header from "./components/Header";
import Footer from "./components/Footer";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          {/* <Route path="/burrowshow/:id" component={ShowBurrow} />
          <Route path="/burrow/new" component={BurrowNew} /> */}

          {/* <Route path="/post/:id" component={Post} />
          <Route path="/user/:id" component={UserProfile} />
          <Route path="/about" component={AboutUs} /> */}
        </Switch>
        <Paginate />
        <Footer />
      </Router>
    );
  }
}

export default App;
