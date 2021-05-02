import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatQuestion } from '../utils/helper'
import '../index.css'

class Question extends Component{
  render(){
    //console.log(this.props)
    const {question, optionOne} = this.props
    const{name, avatar}= question

    return(
      <div className='question'>
        <div className="name">
          <img
              src={avatar}
              alt={`avatar of ${name}`}
              className='avatar-pic'
              />
          <p className="author-name">{name} asks: </p>
        </div>


        <div className='question-section'>
          <h3>would you rather?</h3>
          <p>{optionOne}</p>
          <p>Or</p>
          <p>...</p>
          <button>View poll</button>
        </div>
      </div>
    )
  }
}

function mapStateToProps({authedUser, users, questions}, { id }){
    const question = questions[id]


    return{
        authedUser,
        question: formatQuestion(question, users[question.author], authedUser),
        optionOne: question.optionOne.text

    }
}

export default connect(mapStateToProps)(Question)
