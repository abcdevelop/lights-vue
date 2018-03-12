import axios from 'axios'

const instance = axios.create({
  baseURL:'https://infos-tools.firebaseio.com/lights'
})

instance.defaults.headers.get['Accepts'] = 'application/json'
//instance.defaults.headers.common['SOMETHING']='something'

export default instance
