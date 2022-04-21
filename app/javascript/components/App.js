import React from "react"
import Home from './pages/Home'
import Paginate from "./components/Paginate"
import Header from './components/Header'
import Footer from './components/Footer'

import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

class App extends React.Component {
  render() {
    return (
      <>
      <Header />
      <Home />
      <Paginate />
      <Footer />
      </>
    );
  }
}

export default App
