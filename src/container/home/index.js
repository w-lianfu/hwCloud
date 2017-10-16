import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { observer } from 'mobx-react'

import CDCarousel from './CDCarousel'
import CDHeader from './CDHeader'
import CDNotice from './CDNotice'

import './scss/index.scss'

@observer
class Home extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <section className='home'>
        <CDHeader />
        <CDCarousel />
        <CDNotice />
        <p onClick={this.increment}>Home Page...</p>
        <Link to='/promotion'>Promotion Page</Link>
      </section>
    )
  }
}

export default Home
