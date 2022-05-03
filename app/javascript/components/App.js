import React from "react";
import Home from "./pages/Home";

import Header from "./components/Header";

import Footer from "./components/Footer";
import NotFound from "./pages/NotFound";
import AboutUs from "./pages/AboutUs";
import NewBurrow from "./pages/NewBurrow";
import NewPost from "./pages/NewPost";
import ShowBurrow from "./pages/ShowBurrow";
import PostEdit from "./pages/PostEdit";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      burrows: [],
      posts: [],
    };
  }

  createNewBurrow = (NewBurrow) => {
    console.log(NewBurrow);
  };
  createNewPost = (NewPost) => {
    console.log(NewPost);
  };

  updatePost = (edit, id) => {
    fetch(`http://localhost:3000/posts/`)
      .then(response => response.json())
      .then(results => {
        this.setState({
          isLoaded: true,
          burrow: results,
          posts: results.posts,
        });
      })
      .catch((errors) => console.log("Posts errors:", errors));
  }

  render() {
    return (
      <Router>
        <Header {...this.props} />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/burrow/:burrowid" component={ShowBurrow} />
          <Route
            path="/burrownew"
            render={(props) => (
              <NewBurrow createNewBurrow={this.createNewBurrow} />
            )}
          />

          <Route
            path="/postnew/:id"
            render={(props) => (
              <NewPost
                burrowId={props.match.params.id}
                createNewPost={this.createNewPost}
              />
            )}
          />

          <Route path="/PostEdit/:id" render={(props) => {
            let id = props.match.params.id
            let edit = this.state.posts.find(edit => edit.id === +id)
            return <PostEdit updatePost={this.updatePost} edit={edit} />
          }}/>

         

          <Route path="/burrowcards" component={Home} />

         

          <Route path="/aboutus" component={AboutUs} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default App;
