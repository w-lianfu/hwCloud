import React, { Component } from 'react'
import { observable, useStrict, action, runInAction } from 'mobx'
import 'whatwg-fetch'
import 'babel-polyfill'

import Module from '../../module'

useStrict(true)

class Store {
  @observable newsList = null

  @action.bound
  async getNewsList(url) {
    let result = await Module.getData(url)
    runInAction(() => {
      this.newsList = result && result.data
    })
  }
  /*
  getNewsList = () => {
    Module.getData(url).then(data => {
      runInAction(() => {
        this.newsList = data && data.data
      })
    })
  }
  */
}

export default Store
