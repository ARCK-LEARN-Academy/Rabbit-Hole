import React from "react";
import Home from "./pages/Home";

import Header from "./components/Header";
import Paginate from "./components/Paginate";
import Footer from "./components/Footer";
import NotFound from "./pages/NotFound";
import AboutUs from "./pages/AboutUs";
import NewBurrow from "./pages/NewBurrow";
import NewPost from "./pages/NewPost";
import ShowBurrow from "./pages/ShowBurrow";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      burrows: [],
      posts: []
    }
  }

  createNewBurrow = (NewBurrow) => {
    console.log(NewBurrow)
  };
  createNewPost = (NewPost) => {
    console.log(NewPost)
  }

  render(){
    return (
      <Router>
        <Header {...this.props} />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/burrow/:burrowid" component={ShowBurrow} />
          <Route path="/burrownew" render={(props) => <NewBurrow createNewBurrow={this.createNewBurrow}/>}/>
          <Route path="/postnew" render={(props) => <NewPost 
          createNewPost={this.createNewPost}/>}/>

          {/* <Route path="/post/:id" component={Post} />
          <Route path="/user/:id" component={UserProfile} />
           */}
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
