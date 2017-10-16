import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './index.scss'

class CDHeader extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <header className='cd-header'>
        <nav>
          <Link to='/product'>最新活动</Link>
          <Link to='/product'>产品</Link>
          <Link to='/product'>解决方案</Link>
          <Link to='/product'>云市场</Link>
          <Link to='/product'>云社区</Link>
          <Link to='/product'>合作与生态</Link>
          <Link to='/product'>支持与服务</Link>
        </nav>
      </header>
    )
  }
}

export default CDHeader
