import { DB } from '../plugins/firebase'

export const state = () => ({
  Questions: [],
  response: [],
  Details: [],
})

export const actions = {
  addQuestions({ commit }, { userid, surveyname }) {
    DB.ref('/Surveys')
      .child(userid)
      .child(surveyname)
      .child('/Questions')
      .on('value', (userid) => {
        commit('setoptions', userid.val())
        commit('setresponse', userid.val())
      })
    DB.ref('/SurveysDetails')
      .child(userid)
      .child(surveyname)
      .child('/Details')
      .on('value', (details) => {
        commit('setdetails', details.val())
      })
  },
  submit({ state }, { userid, surveyname }) {
    const response = state.response
    DB.ref('/AnswerofSurveys')
      .child(userid)
      .child(surveyname)
      .child('/Answers')
      .push(response)


  },
}
export const mutations = {
  setoptions(state, Questions) {
    state.Questions = Questions
  },
  setresponse(state, response) {
    state.response = response
  },
  setdetails(state, Details) {
    state.Details = Details
  },
}
