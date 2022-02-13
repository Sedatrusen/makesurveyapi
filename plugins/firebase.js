import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/database'

const firebaseConfig = {
  apiKey: 'AIzaSyDf5XtWc3V8aI_44CrLhy9J-mTxbGkcoww',
  authDomain: 'makesurvey-3bbf0.firebaseapp.com',
  databaseURL: 'https://makesurvey-3bbf0.firebaseio.com',
  projectId: 'makesurvey-3bbf0',
  storageBucket: 'makesurvey-3bbf0.appspot.com',
  messagingSenderId: '853124661467',
  appId: '1:853124661467:web:0e97b49be952aed2d80cfe',
  measurementId: 'G-H8FBCD8XRZ',
}
let app = null
if (!firebase.apps.length) {
  // eslint-disable-next-line no-unused-vars
  app = firebase.initializeApp(firebaseConfig)
}
//! firebase.apps.length ?  : ''

export const auth = firebase.auth()
export const DB = firebase.database()
export const StoreDB = firebase.firestore()
export default firebase
