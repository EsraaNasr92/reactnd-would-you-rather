import { getInitialData } from '../utils/api'
import { reciveQuestions } from '../actions/questions'
import { reciveUsers } from '../actions/users'
import { setAuthedUser } from '../actions/shared'

const AUTHED_ID = 'tylermcginnis'

export function handleInitialData() {
  return(dispatch) => {
    return getInitialData()
      .then(({ users, questions}) => {
          dispatch(reciveQuestions(questions))
          dispatch(reciveUsers(users))
          dispatch(setAuthedUser(AUTHED_ID))
      })
  }
}
