import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { observer } from 'mobx-react'
import 'whatwg-fetch'
import { Icon, Popup } from 'semantic-ui-react'

import Module from  '../../module'
import Store from './store'
import './index.scss'

let store = new Store()

@observer
class CDNews extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    store.getNewsList('news')
  }

  render() {
    let list = store.newsList && store.newsList.slice(0, 3).map(item => (
      <Link to='/product' key={item.id}><Icon name='circle' />
        <Popup
          trigger={<p>{item.title}</p>}
          content={item.title}
          inverted
          size='small'
          position='bottom left'
          className='popup'
        />
      </Link>
    ))
    return (
      <section className='cd-news'>
        <nav>{ list }<Link to='/product'>更多<i>&gt;</i></Link></nav>
      </section>
    )
  }
}

export default CDNews
