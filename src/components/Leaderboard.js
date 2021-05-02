import React, { Component } from 'react'
import { connect } from 'react-redux'
import Nav from './Nav'

class Leaderboard extends Component{
  render() {
    const { userData } = this.props
    return (
          <div className="dashboard">
            <Nav />
              <h3  className='page-header'>Leaderboard List</h3>
              {userData.map((user, id) => (
                  <div className="container" key={id}>
                      <div className="author-section">
                          <img
                              src={user.avatarURL}
                              alt={`avatar of ${user.name}`}
                              className="avatar-pic"/>
                                <h3>{user.name}</h3>
                      </div>
                      <div className='point-section'>

                          <div className="scores">
                              <p>Answered Questions</p>
                              <p>{user.answerCount}</p>
                          </div>
                          <div className="scores">
                              <p>Created Questions</p>
                              <p>{user.questionCount}</p>
                          </div>
                      </div>
                      <div className="score-section">
                        Score:  <p>   {user.total} </p>
                      </div>
                  </div>
              ))}
          </div>
      )
  }
}

function mapStateToProps({ users }) {
    const userData = Object.values(users)
    .map(user => ({
        id: user.id,
        name: user.name,
        avatarURL: user.avatarURL,
        answerCount: Object.values(user.answers).length,
        questionCount: user.questions.length,
        total: Object.values(user.answers).length + user.questions.length
    }))
    .sort((a, b) => a.total - b.total)
    .reverse();
    console.log('userData', userData);
    return {
        userData
    };
}


export default connect(mapStateToProps)(Leaderboard)
