import { getInitialData } from '../utils/api'
import { reciveUsers } from '../actions/users'
import { reciveQuestions } from '../actions/questions'
import { setAuthedUser } from '../actions/authedUser'
import { showLoading, hideLoading } from 'react-redux-loading'

const AUTHED_ID = 'tylermcginnis'

export function handleInitialData() {
  return(dispatch) => {
    dispatch(showLoading())
    return getInitialData()
      .then(({ users, questions}) => {
          dispatch(reciveUsers(users))
          dispatch(reciveQuestions(questions))
          dispatch(setAuthedUser(AUTHED_ID))
          dispatch(hideLoading())
      })
  }
}
