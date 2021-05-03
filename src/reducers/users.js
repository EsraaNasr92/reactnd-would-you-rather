import { RECIVE_USERS } from '../actions/users'
import { ADD_QUESTION, ANSWER_QUESTION } from '../actions/questions'

export default function users (state = {}, action){
  switch (action.type) {
    case RECIVE_USERS:
      return{
        ...state,
        ...action.users
      }
      case ADD_QUESTION:
        return{
          ...state,
          [action.author] : {
            ...state[action.author],
            questions: state[action.author].questions.concat([action.id])
          }
        }
        case ANSWER_QUESTION:
      			return {
      				...state,
      				[action.authedUser]: {
      			        ...state[action.authedUser],
      			        answers: {
      			        	...state[action.authedUser].answers,
      			            [action.questionId]: action.answer
      			        }
      			}
        }
    default:
      return state

  }
}
