import { getInitialData } from '../utils/api'
import { reciveQuestions } from '../actions/questions'
import { reciveUsers } from '../actions/users'
//import { setAuthedUser } from '../actions/authedUser'


export function handleInitialData() {
  return(dispatch) => {
    return getInitialData()
      .then(({ users, questions}) => {
          dispatch(reciveQuestions(questions))
          dispatch(reciveUsers(users))
      })
  }
}
