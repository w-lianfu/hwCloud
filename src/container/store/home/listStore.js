import React, { Component } from 'react'
import { observable, useStrict, action } from 'mobx'

useStrict(true)

class ListStore {
  @observable num = 0

  @action.bound
  increment = () => {
    this.num++
  }
}

export default ListStore
