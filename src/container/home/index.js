import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './scss/index.scss'

class Home extends Component {
  render() {
    return (
      <div>
        <p>Home Page...</p>
        <Link to='/promotion'>Promotion Page</Link>
      </div>
    )
  }
}

export default Home
