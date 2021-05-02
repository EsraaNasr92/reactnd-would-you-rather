import React, { Component } from 'react'
import { connect } from 'react-redux'
import Question from './Question'
import { Link } from 'react-router-dom'

class Dashboard extends Component {

  state = {
    showQuestionAnswer: false
  }
  filterQuestion = (showQuestionAnswer) => {
    this.setState((state) => {
      return {showQuestionAnswer: showQuestionAnswer}
    })
  }


  render() {
    //console.log(this.props)
    const {questions, authedUser} = this.props
    console.log(this.props)
    const {showQuestionAnswer} = this.state
    const questionArray = Object.values(questions)
    const filterQuestion = questionArray.filter(function(question){
      const vote = (
        question.optionOne.votes.indexOf(authedUser) > -1 || question.optionTwo.votes.indexOf(authedUser) > -1
      )
        return showQuestionAnswer ? vote :!vote
    })

    const displayQuestion =  filterQuestion.sort((a,b) => b.timestamp - a.timestamp)

    return(
      <div className='dashboard'>
        <h3 className='center'>Your Questions</h3>

        <div className='btn-change'>
          <button
                onClick={(e) => this.filterQuestion(false)}
                className={ !showQuestionAnswer ? 'selected-button' : 'default-button'}>
                  Unanswered
          </button>
          <button
                onClick={(e) => this.filterQuestion(true)}
                className={ showQuestionAnswer ? 'selected-button' : 'default-button'}>
                  Answered
          </button>
        </div>

        <ul className='dashboard-list'>
          {displayQuestion.map((question) => (
              <li key={question.id}>
                <Link to={`question/${question['id']}`}>
                  <Question id={question.id} />
                </Link>
              </li>
          ))}
        </ul>

      </div>
    )
  }
}

function mapStateToProps({authedUser, users, questions}, { id }){
  const question = questions[id]
  const author = question ? users[question.author] : null
  return{
    authedUser,
    questions,
    author,
    questionIds: Object.keys(questions)
      .sort((a,b)  => questions[b].timestamp - questions[a].timestamp)
  }
}

export default connect(mapStateToProps)(Dashboard)
