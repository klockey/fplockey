import React, { Component } from 'react'
import * as firebase from 'firebase'
import Loading from './Loading'
import db from '../db'
import store from '../store'
import { observer } from 'mobx-react'

@observer
class TextArea extends Component {
  constructor (props) {
    super(props)
    this.state = {
      entry: '',
      loaded: false,
      user: {}
    }
  }

  componentWillMount () {
    this.dbRefObject = db.ref(`/users/${store.user.uid}/logs/${store.date}`)
    this.dbRefObject.on('value', snapshot => {
      let log = snapshot.val()
      if (log !== null) {
        this.setState({ loaded: true, entry: log.entry })
      }
    })
  }

  componentDidUpdate () {
    if (this.dbRefObject) {
      this.dbRefObject.update({ entry: this.state.entry })
    }
  }

  _change = (event) => {
    this.setState({
      entry: event.target.value
    })
  }

  render () {
  //  if (!this.state.loaded) return <Loading />
    return <div>
      {/* <div className='row companions'> */}
      {/* <div className='col-lg-4'> */}
      <textarea className='log form-controlform form-rounded dimensions' value={this.state.entry} onChange={this._change} />
      {/* </div> */}
    </div>
  }
}

export default TextArea
