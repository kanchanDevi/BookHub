import {Component} from 'react'

import {Redirect} from 'react-router-dom'

import Cookies from 'js-cookie'

import './index.css'

class Login extends Component {
  state = {username: '', password: '', showSubmitError: false, errorMsg: ''}

  onSubmitSuccuss = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30, path: '/'})
    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({showSubmitError: true, errorMsg})
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const apiUrl = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(apiUrl, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSubmitSuccuss(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  renderPasswordField = () => {
    const {password} = this.state
    return (
      <>
        <label className="input-label" htmlFor="password">
          Password*
        </label>
        <input
          type="password"
          id="password"
          className="input-field"
          placeholder="Password"
          value={password}
          onChange={this.onChangePassword}
        />
      </>
    )
  }

  renderUsernameField = () => {
    const {username} = this.state
    return (
      <>
        <label className="input-label" htmlFor="username">
          Username*
        </label>
        <input
          type="text"
          id="username"
          className="input-field"
          placeholder="Username"
          value={username}
          onChange={this.onChangeUsername}
        />
      </>
    )
  }

  render() {
    const {showSubmitError, errorMsg} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <div className="login-form-container">
        <img
          src="https://res.cloudinary.com/dwtsapuyn/image/upload/v1645073768/bookhub-image_ubswwx.png"
          alt="login website logo"
          className="login-website-logo-mobile-image"
        />
        <img
          src="https://res.cloudinary.com/dwtsapuyn/image/upload/v1645073768/bookhub-image_ubswwx.png"
          alt="website login"
          className="login-image"
        />
        <div className="form-main-container">
          <form className="form-container" onSubmit={this.onSubmitForm}>
            <img
              src="https://res.cloudinary.com/dwtsapuyn/image/upload/v1645077666/book-hub-logo_dy4szt.png"
              alt="website logo"
              className="login-website-logo-desktop-image"
            />
            <div className="input-container">{this.renderUsernameField()}</div>
            <div className="input-container">{this.renderPasswordField()}</div>
            <button type="submit" className="login-button">
              Login
            </button>
            {showSubmitError && <p className="error-message">{errorMsg}</p>}
          </form>
        </div>
      </div>
    )
  }
}
export default Login
