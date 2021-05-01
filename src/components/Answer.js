import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleAddAnswer } from '../actions/questions'

class Answer extends Component {

  state = {
    selectedAnswer: ''
  }

handleSaveAnswer(e){
  e.preventDefault()

  const { dispatch, authedUser, id } = this.mapStateToProps
  const { selectedAnswer } = this.state

  dispatch(handleAddAnswer({
    questionId: id,
    answer: selectedAnswer,
    authedUser
  }))
}

chooseAnswer(answer){
  this.setState((prevState) => {
    return {selectedAnswer: answer}
  })
}

  render() {

    const { question, author, answer, answered, voteOptionOne, votesOptionTwo,
    totalVotes, perOptionOne, perOptionTwo } = this.props
    const { selectedAnswer } = this.state

    return(
      <div className={answered ? question-details : question-item}>
          {answered ? (
            <p>Asked by: {name}</p>
          ): (
            <p>{name} asks</p>
          )
          }
          <div className="question-body">
            <div className="author-avatar">
                <img
                    src={avatar}
                    alt={`avatar of ${name}`}
                    className='avatar-pic'
                  />
            </div>
            {!answered ? (
              <div className="select-answer">
                <h3>would you rather?</h3>

                <div className={selectedAnswer === 'optionOne' ?
                'option option-selected' : 'option'} onClick={(e) =>
                { this.chooseAnswer('optionOne')}}>{question.optionOne.text}
                </div>

                <div className={selectedAnswer === 'optionTwo' ?
                'option option-selected' : 'option'} onClick={(e) =>
                  { this.chooseAnswer('optionTwo')}}>
                  {question.optionTwo.text}
                </div>

                <button className={ selectedAnswer ? 'btn-default' : 'disabled'}
                onClick={(e) => {this.handleSaveAnswer(e)}}>
                  Submit
                </button>

                </div>


            ): (

              <div className="question-body">
                   <div className="would-you">Results: </div>
                    <div className={answer === 'optionOne' ? 'option-container selected': 'option-container'}>
                     <div className="option-one">{question.optionOne.text}</div>

                      <div className="poll-container">
                          <div>{votesOptionOne} out of {totalVotes} votes</div>
                          <div>Percentage votes: {percentageOptionOne}%</div>
                      </div>
                      <div className="your-vote">Your pick</div>
              </div>

              <div className={answer === 'optionTwo' ? 'option-container selected': 'option-container'}>
                  <div className="option-two">{question.optionTwo.text}</div>
                  <div className="poll-container">
                        <div>{votesOptionTwo} out of {totalVotes} votes</div>
                        <div>Percentage votes: {percentageOptionTwo}%</div>
                    </div>
                    <div className="your-vote">Your pick</div>
                </div>
               </div>
            )}


            </div>
         </div>

    )
  }
}


function mapStateToProps({ author, users, questions}, { match }){
  const { id } = match.params
  const question = question[id]

  const author = question ? users[question.author] : null
  const answered = question ? (question.optionOne.votes.indexOf(authedUser) > -1 ||
                   question.optionTwo.votes.indexOf(authedUser) > -1 ) : false


  const voteOptionOne = (question && question.optionOne.votes) ? question.optionOne.votes.length : 0
  const votesOptionTwo = (question && question.optionTwo.votes) ? question.optionTwo.votes.length : 0
  const totalVotes = voteOptionOne + votesOptionTwo

  const perOptionOne = ((voteOptionOne / totalVotes) * 100).toFixed(1)
  const perOptionTwo = ((voteOptionOne / totalVotes) * 100).toFixed(1)


  return{
    id,
    authedUser,
    question,
    author,
    answer,
    answered,
    voteOptionOne,
    votesOptionTwo,
    totalVotes,
    perOptionOne,
    perOptionTwo
  }
}

export default connect(mapStateToProps)(Answer);
