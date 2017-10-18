import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { observer } from 'mobx-react'
import 'whatwg-fetch'

import Module from  '../../module'
import Store from './store'

let store = new Store()

@observer
class CDNews extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    store.getNewsList('http://localhost:3000/news')
  }

  render() {
    let list = store.newsList && store.newsList.slice().map(item => (
      <li key={item.id}>{item.title}</li>
    ))
    return (
      <section>
        <ul>{ list }</ul>
      </section>
    )
  }
}

export default CDNews
