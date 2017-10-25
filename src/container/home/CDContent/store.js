import React from 'react'
import { observable, useStrict, action, runInAction } from 'mobx'

import Module from '../../module'

useStrict(true)

class ContentStore {
  @observable contentList = null

  @action.bound
  async getContentList(url) {
    let data = await Module.getData(url)
    runInAction(() => {
      this.contentList = data && data.data
    })
  }

}

export default ContentStore
