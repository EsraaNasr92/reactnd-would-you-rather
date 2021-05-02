import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'

class Nav extends Component {
  render() {
    const { authedUser, user } = this.props
    const name = user ? user.name: ''
    const avatar = user ? user.avatarURL : 'https://via.placeholder.com/300.png/09f/fff'

    return(
        <div className="nav-component">
          <nav>
            <ul>
              <li>
                <NavLink to="/Dashboard" exact>Home</NavLink>
              </li>
              <li>
                <NavLink to="/Leaderboard" exact>Leaderboard</NavLink>
              </li>
              <li>
                <NavLink to="/AddQuestion" exact>New Question</NavLink>
              </li>
            </ul>
          </nav>

          {authedUser && <div className="user-account">
              <NavLink to="/" exact>
                <img
                  src={avatar}
                  alt={`avatar of ${name}`}
                  className="avatar-pic"
                  />
                  <p>Welcome: {name}</p>
                  <p>Logout</p>
              </NavLink>
            </div>
          }
        </div>
    )
  }
}

function mapStateToProps({ authedUser, users}, props) {
  return{
    authedUser,
    users,
    user: users[authedUser]
  }
}

export default connect(mapStateToProps)(Nav)
