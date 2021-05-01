import { saveQuestion } from '../utils/api'
export const RECIVE_QUESTIONS = 'RECIVE_QUESTIONS'
export const ADD_QUESTION = 'ADD_QUESTION'

export function reciveQuestions (questions){
  return{
    type: RECIVE_QUESTIONS,
    questions,
  }
}

function addQuestion({ id, timestamp, author, optionOne, optionTwo }) {
    return {
        type: ADD_QUESTION,
        id,
        timestamp,
        author,
        optionOne,
        optionTwo
    }
}

export function handleAddQuestion(optionOneText, optionTwoText) {
    return (dispatch, getState) => {

        const { authedUser } = getState()

        const questionInfo = {
            optionOneText,
            optionTwoText,
            author: authedUser
        }

    return saveQuestion(questionInfo)
        .then((question) => {
            console.log('created question', question);
            dispatch(addQuestion(question))
        })
        .catch( (error) => {
            console.log('A problem when saving question.')
            alert('there\'s a problem creating new question. plesea try again ')
        })
    }
}
