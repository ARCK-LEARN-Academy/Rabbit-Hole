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

  updatePost = (updatedpost, id) => {
    fetch(`/posts/${id}`, {
      body: JSON.stringify(updatedpost),
      headers: {
        "Content-Type": "application/json",
      },

      method: "PATCH",
    })
      .then((response) => response.json())
      .then((payload) => this.readPost())
      .catch((errors) => console.log("Post update errors:", errors));
  };

  deletePost = (id) => {
    console.log(`Post at ${id} was deleted`, id);
  };

  deletePost = (id) => {
    fetch(`/posts/${id}`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "DELETE",
    })
      .then((response) => response.json())
      .catch((errors) => console.log("delete errors:", errors));
  };


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
            path="/newpost/:id"
            render={(props) => (
              <NewPost
                burrowId={props.match.params.id}
                createNewPost={this.createNewPost}
              />
            )}
          />

          <Route
            path="/postedit/:id"
            render={(props) => {
              let id = props.match.params.id;
              let post = this.state.posts.find((post) => post.id === +id);
              return <PostEdit post={post} updatePost={this.updatePost} />;
            }}
          />

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
