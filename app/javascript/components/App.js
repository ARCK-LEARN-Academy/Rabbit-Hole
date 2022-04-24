import React from "react";
import Home from "./pages/Home";
import Paginate from "./components/Paginate";
import Header from "./components/Header";
import Footer from "./components/Footer";
import NotFound from "./pages/NotFound";
import AboutUs from "./pages/AboutUs";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Header {...this.props} />
        <Switch>
          <Route exact path="/" component={Home} />

          {/* <Route path="/burrowshow/:id" component={ShowBurrow} />
          <Route path="/burrow/new" component={BurrowNew} /> */}

          {/* <Route path="/post/:id" component={Post} />
          <Route path="/user/:id" component={UserProfile} />
          <Route path="/about" component={AboutUs} /> */}
          <Route path="/aboutus" component={AboutUs} />
          <Route component={NotFound} />
        </Switch>
        <Paginate />
        <Footer />
      </Router>
    );
  }
}

export default App;
