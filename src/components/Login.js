import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { observer } from 'mobx-react'
import store from '../store'

import { firebase } from '../db'
import '../styles/login.css'

@observer class Login extends Component {
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

  componentWillMount () {
    console.log('hello')
  }

  componentDidMount () {
    console.log('hello')
  //  console.log('CreateAccount')
  //  this.state.redirect = false
  }

  handleOnClick = () => {
  //  this.setState({redirect: true})
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
    const promise = auth.signInWithEmailAndPassword(email, password)
    promise.then(user => {
      console.log(user)
      store.user = user
    //  this.props.history.push('/travellog')
      this.props.history.push('/blog')
    }
  ).catch(e => console.log('error with signin login.js'))
  }

  render () {
    return <div className='login-page'>
      <div className='form'>
        <form className='login-form' ref='create' onSubmit={this._submit}>
          <input type='text' placeholder='email address' value={this.state.email} onChange={this.handleChangeEmail} />
          <input type='password' placeholder='password' value={this.state.password} onChange={this.handleChangePassword} />
          <button>login</button>
          <p className='message'> Not registered? <Link to='/createaccount'>Create an account </Link> </p>
          <p> This is a readonly version of this app for security reasons.  You can contact me for the full version at lockey.keith@gmail.com.   The username is aa@gmail.com and the password is aaaaaa </p>
        </form>
      </div>
    </div>
  }
}

export default Login
