import {Component} from 'react'
import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'

import {FiMenu} from 'react-icons/fi'
import {RiCloseCircleFill} from 'react-icons/ri'
import './index.css'

class Header extends Component {
  state = {displayNavbar: false}

  onClickMenu = () => {
    this.setState(prevState => ({
      displayNavbar: !prevState.displayNavbar,
    }))
  }

  onClickCross = () => {
    this.setState({displayNavbar: false})
  }

  onClickLogout = () => {
    const {history} = this.props
    history.replace('/login')
    Cookies.remove('jwt_token')
  }

  onClickWebSiteLogo = () => {
    const {history} = this.props
    history.push('/')
  }

  render() {
    const {home, shelves, favorite} = this.props
    const activeHome = home ? 'active-tab' : ''
    const activeShelves = shelves ? 'active-tab' : ''
    const activeFavorite = favorite ? 'active-tab' : ''
    const {displayNavbar} = this.state

    return (
      <div>
        <div className="header-container">
          <div className="header-website-logo1">
            <Link to="/">
              <>
                <img
                  className="header-website-logo"
                  src="https://res.cloudinary.com/dkxxgpzd8/image/upload/v1647190320/Group_7731_v0p1nt_gjeokw.png"
                  alt="website logo"
                />
              </>
            </Link>
          </div>
          <ul className="tabs-container">
            <Link className="link" to="/">
              <li className={`list-item bookshelves-tab ${activeHome}`}>
                Home
              </li>
            </Link>
            <Link className="link" to="/shelf">
              <li className={`list-item bookshelves-tab ${activeShelves}`}>
                Bookshelves
              </li>
            </Link>
            <Link className="link" to="/favorites">
              <li className={`list-item bookshelves-tab ${activeFavorite}`}>
                MyFavorites
              </li>
            </Link>
            <li className="list-item">
              <button
                onClick={this.onClickLogout}
                className="logout-btn"
                type="button"
              >
                Logout
              </button>
            </li>
          </ul>
        </div>
        <div className="header-navbar-responsive-container">
          <div className="header-nav-container">
            <Link to="/">
              <img
                className="header-nav-bar-website-logo"
                src="https://res.cloudinary.com/dkxxgpzd8/image/upload/v1647190320/Group_7731_v0p1nt_gjeokw.png"
                alt="website logo"
              />
            </Link>
            <button
              onClick={this.onClickMenu}
              className="cross-icon-btn"
              type="button"
            >
              <FiMenu className="menu-icon" />
            </button>
          </div>
          {displayNavbar && (
            <>
              <div className="header-navbar-tabs-container">
                <Link className="link" to="/">
                  <h1 className={`home-tab ${activeHome}`}>Home</h1>
                </Link>
                <Link className="link" to="/shelf">
                  <h1 className={`bookshelves-tab ${activeShelves}`}>
                    BookShelves
                  </h1>
                </Link>
                <Link className="link" to="/favorites">
                  <h1 className={`bookshelves-tab ${activeFavorite}`}>
                    MyFavorites
                  </h1>
                </Link>
              </div>
              <div className="header-navbar-tabs-container">
                <button
                  onClick={this.onClickLogout}
                  className="logout-btn"
                  type="button"
                >
                  Logout
                </button>
                <button
                  onClick={this.onClickCross}
                  className="cross-icon-btn"
                  type="button"
                >
                  <RiCloseCircleFill className="cross-icon" />
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    )
  }
}

export default withRouter(Header)
