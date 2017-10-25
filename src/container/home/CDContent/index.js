import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'
import { observer } from 'mobx-react'

import ContentStore from './store'

import './index.scss'

let store = new ContentStore()

@observer
class CDContent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      activeItem: '计算'
    }
  }

  componentDidMount() {
    store.getContentList('users/content')
  }

  handleItemClick = (e, {name}) => {
    console.log(name)
    this.setState({
      activeItem: name
    })
  }

  render() {
    let { activeItem } = this.state
    let menus = ['计算', '存储', '网络', '安全', '数据库', '数据分析', '软件开发云', '新产品上线']
    let list = menus.map(item => (
      <Menu.Item
        name={item}
        key={item}
        active={activeItem === item}
        onClick={this.handleItemClick}
      />
    ))

    let content = store.contentList && store.contentList.slice(0, 6).map(item => (
      <Link to='/product' key={item.id}>
        <p>{item.title}</p>
        <p>{item.content}</p>
      </Link>
    ))

    return (
      <section className='cd-content'>
        <div>
          <h2>为您提供丰富多样的云计算产品</h2>
          <h3>可信 | 开放 | 全球服务</h3>
        </div>
        <div>
          <Menu pointing secondary vertical>
            {list}
          </Menu>
          <div className='cd-content_box'>
            {content}
          </div>
        </div>
        <div>
          <Link to='/product'>更多云计算产品&gt;</Link>
        </div>
      </section>
    )
  }
}

export default CDContent
