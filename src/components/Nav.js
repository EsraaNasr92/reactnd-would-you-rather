import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'

class Nav extends Component {
  render() {
    const { authedUser, user } = this.props
    return(
        <div className="nav-component">
          <nav>
            <ul>
              <li>
                <NavLink to="/" exact>Home</NavLink>
              </li>
              <li>
                <NavLink to="/Leaderboard" exact>Leaderboard</NavLink>
              </li>
              <li>
                <NavLink to="/AddQuestion" exact>New Question</NavLink>
              </li>
            </ul>
          </nav>
        </div>
    )
  }
}

function mapStateToProps({ authedUser, users}) {
  return{
    authedUser,
    users,
    user: users[authedUser]
  }
}

export default connect()(Nav)
