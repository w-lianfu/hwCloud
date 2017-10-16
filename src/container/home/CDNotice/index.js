import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './index.scss'

class CDNotice extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <section className='cd-notice'>
        <Link to='/product'>
          <p className='notice-icon'></p>
          <p>
            <span>热销专区</span>
            <i>超全配置 一键上云</i>
          </p>
        </Link>
        <Link to='/product'>
          <p className='notice-icon'></p>
          <p>
            <span>新用户专区</span>
            <i>云服务全场5折</i>
          </p>
        </Link>
        <Link to='/product'>
          <p className='notice-icon'></p>
          <p>
            <span>对象存储服务</span>
            <i>多配置资源包全新上线</i>
          </p>
        </Link>
        <Link to='/product'>
          <p className='notice-icon'></p>
          <p>
            <span>CloudIED限量公测</span>
            <i>让软件开发j简单高效</i>
          </p>
        </Link>
      </section>
    )
  }
}

export default CDNotice
