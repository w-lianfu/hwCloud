import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'

import "slick-carousel/slick/slick.scss"
import "slick-carousel/slick/slick-theme.scss"
import './index.scss'

class CDCarousel extends Component {
  constructor(props) {
    super(props)
  }

  render() {

    let setting = {
      dots: true,
      infinite: true,
      autoplay: true
    }

    return (
      <section className='CDCarousel'>
        <Slider {...setting}>
          <div className='carousel-img'>
            <Link to='/product'>
              <img src='/img/c01.jpg' />
            </Link>
          </div>
          <div className='carousel-img'>
            <Link to='/product'>
              <img src='/img/c02.jpg' />
            </Link>
          </div>
          <div className='carousel-img'>
            <Link to='/product'>
              <img src='/img/c03.jpg' />
            </Link>
          </div>
          <div className='carousel-img'>
            <Link to='/product'>
              <img src='/img/c04.jpg' />
            </Link>
          </div>
          <div className='carousel-img'>
            <Link to='/product'>
              <img src='/img/c05.jpg' />
            </Link>
          </div>
        </Slider>
      </section>
    )
  }
}

export default CDCarousel
