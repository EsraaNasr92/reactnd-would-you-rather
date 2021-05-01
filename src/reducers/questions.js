import { RECIVE_QUESTIONS, ADD_QUESTION, ANSWER_QUESTION } from '../actions/questions'

export default function questions (state = {}, action){
  switch (action.type) {
    case RECIVE_QUESTIONS:
      return{
        ...state,
        ...action.questions
      }
      case ADD_QUESTION:
        return{
          ...state,
          [action.id] : action
        }
      case ANSWER_QUESTION:
        return{
          ...state,
          [action.questionId]:{
            ...state[action.questionId],
            [action.answer]:{
              ...state[action.questionId][action.answer],
              votes: state[action.questionId][action.answer].votes.concat([action.authedUser])
            }
          }
        }

    default:
      return state

  }
}
