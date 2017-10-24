let Module = {}

Module.host = 'http://localhost:3000/'

Module.getData = (url) => {
  return fetch(`${Module.host}${url}`, {
    method: 'GET'
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
