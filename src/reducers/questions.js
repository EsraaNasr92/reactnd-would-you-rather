import { RECIVE_QUESTIONS, ADD_QUESTION } from '../actions/questions'

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


    default:
      return state

  }
}
