import { getInitialData } from '../utils/api'
import { reciveUsers } from '../actions/users'
import { reciveQuestions } from '../actions/questions'
import { setAuthedUser } from '../actions/authedUser'

const AUTHED_ID = 'tylermcginnis'

export function handleInitialData() {
  return(dispatch) => {
    return getInitialData()
      .then(({ users, questions}) => {
          dispatch(reciveUsers(users))
          dispatch(reciveQuestions(questions))
          dispatch(setAuthedUser(AUTHED_ID))
      })
  }
}
