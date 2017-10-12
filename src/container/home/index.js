import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { observer } from 'mobx-react'

import ListStore from '../store/home/listStore'

import './scss/index.scss'

let store = new ListStore()

@observer
class Home extends Component {
  constructor(props) {
    super(props)
  }

  increment = () => {
    store.increment()
  }

  render() {
    return (
      <div>
        <p onClick={this.increment}>Home Page...</p>
        <p>{store.num}</p>
        <Link to='/promotion'>Promotion Page</Link>
      </div>
    )
  }
}

export default Home
