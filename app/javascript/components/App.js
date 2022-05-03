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

  componentDidMount() {
    this.readPost()
  }

  createNewBurrow = (NewBurrow) => {
    console.log(NewBurrow);
  };
  createNewPost = (NewPost) => {
    console.log(NewPost);
  };

  readPost = () => {
    fetch("/posts")
    .then(response => response.json())
    .then(payload => this.setState({ posts: payload}))
    .catch(errors => console.log("Error: Post not edited", errors));
  }
  

  deletedPost = (id) => {
    fetch(`/posts/${id}`, {
      
      headers: {
        "Content-Type": "application/json",
      },
      method: "DELETE",
    })
      .then(response => response.json())
      // .then(result => this.readPost())
      .catch(errors => console.log("Error: Post not deleted", errors))
      
  };

  render() {
    return (
      <Router>
        <Header {...this.props} />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/burrow/:burrowid"
          render={(props) => {
            return <ShowBurrow burrowid = {props.match.params.burrowid} deletedPost={this.deletedPost} />
          }} />
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

          <Route path="/postedit/:id"
           render={(props) => {
            let id = props.match.params.id
            let post = this.state.posts.find(post => post.id === +id)
            return <PostEdit editPost={this.editPost} post={post} />
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
