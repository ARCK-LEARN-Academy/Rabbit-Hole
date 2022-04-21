import React from "react"
import Home from './pages/Home'
import Header from './components/Header'

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
      </>
    );
  }
}

export default App
