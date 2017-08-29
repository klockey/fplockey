import React, { Component } from 'react'
import styles from '../styles/login.css'
import { Link } from 'react-router-dom'
import { observer } from 'mobx-react'
import store from '../store'
import { firebase } from '../db'

@observer
class CreateAccount extends Component {
  constructor (props) {
    super(props)
    this.state = {
      redirect: false,
      email: '',
      password: ''
    }
    this.handleChangePassword = this.handleChangePassword.bind(this)
    this.handleChangeEmail = this.handleChangeEmail.bind(this)
    this._submit = this._submit.bind(this)
  }

  componentDidMount () {
    console.log('CreateAccount')
  }

  handleChangePassword (event) {
    this.setState({password: event.target.value})
  }

  handleChangeEmail (event) {
    this.setState({email: event.target.value})
  }

  _submit (event) {
    event.preventDefault()
    const auth = firebase.auth()
    const email = this.state.email
    const password = this.state.password
    const promise = auth.createUserWithEmailAndPassword(email, password)
    promise.then(user => {
      store.user = user
      this.props.history.push('/travellog')
    //  this.props.history.push('/blog')
    })
      .catch(e => console.log('error with registration'))
  }

  render () {
    return <div className='login-page'>
      <div className='form'>
        <form className='login-form' ref='create' onSubmit={this._submit}>
          <input type='text' placeholder='email address' value={this.state.email} onChange={this.handleChangeEmail} />
          <input type='password' placeholder='password' ref='password' value={this.state.password} onChange={this.handleChangePassword} />
          <button>create</button>
          <p className='message'> Already registered? <Link to='/'>Sign In</Link></p>
        </form>
      </div>
    </div>
  }
}

export default CreateAccount
