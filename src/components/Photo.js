import React, { Component } from 'react'
import * as firebase from 'firebase'
import FileInput from 'react-file-input'
import Loading from './Loading'
import _ from 'lodash'
import store from '../store'
import db from '../db'
import { observer } from 'mobx-react'

@observer
class Photo extends Component {
  state = {
    url: null
  }

  handleChange = (event) => {
    let file = event.target.files[0]
    let storageRef = firebase.storage().ref('sweetgifs/' + file.name)
    storageRef.put(file).then(() => {
      storageRef.getDownloadURL().then((url) => {
        this.setState({ url: url }, () => {
          db.ref(`/users/${store.user.uid}/logs/${store.date}/pictures`).set(url).then(() => {
            console.log('Saved Photo')
          })
        })
      })
    })
  }

  componentDidMount () {
    this.updatePhoto()
  }

  componentWillReact () {
    this.updatePhoto()
  }

  updatePhoto () {
    db.ref(`/users/${store.user.uid}/logs/${store.date}`).once('value').then((snapshot) => {
      const val = snapshot.val()
      if (val) {
        this.setState({
          url: val.pictures
        })
      }
    })
  }

  render () {
    return <div>
      <img className='' src={this.state.url || this.state.oldPhoto} />
      <form onSubmit=''>
        <FileInput name='myImage'
          accept='.png,.gif'
          placeholder='My Image'
          className='inputClass'
          onChange={this.handleChange} />
      </form>
    </div>
  }
}

export default Photo
