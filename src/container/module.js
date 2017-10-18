let Module = {}

Module.getData = (url) => {
  return fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(response => {
    switch (response.status) {
      case 200:
        return response.json()
        break
      case 500:
        throw new Error('服务器错误!')
        break
      default:
        throw new Error(response.status)
    }
  }).catch(error => console.error(error))
}

export default Module
