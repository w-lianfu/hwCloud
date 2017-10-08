import React, { Component } from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Home from './container/home'
import Promotion from './container/promotion'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route path='/' component={Home} />
          <Route path='/promotion' component={Promotion} />
        </div>
      </Router>
    )
  }
}

render(
  <App />,
  document.getElementById('root')
)
