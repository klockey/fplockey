import {computed, observable, observer} from 'mobx'
import { firebase } from './db'

class Store {
  @observable user = {}
 @observable date = new Date().getFullYear() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getDate()
// @observable date = new Date().getFullYear() + '-' + (new Date().getMonth() + 1) + '-12'
// @observable date = '2017-6-13'
  @observable url = ''
  @observable convertDate (date) {
    return date.replace(/(\d{4})-(\d{1,2})-(\d{1,2})/, function (match, y, m, d) {
      return m + '/' + d + '/' + y
    })
  }
}

window.setTimeout(() => {
  store.user = firebase.auth().currentUser
}, 1000)

const store = new Store()

window.store = store

export default store
