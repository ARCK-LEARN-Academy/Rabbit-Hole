import React from "react"
import Home from './pages/Home'

import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

class App extends React.Component {
  render() {
    return (
      <Home />
    );
  }
}

export default App
