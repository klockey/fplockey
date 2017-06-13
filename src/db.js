import * as firebase from 'firebase'

const app = firebase.initializeApp({
  apiKey: 'AIzaSyCaFMPFRHXpzNH63e-i471KSSfWU7625KE',
  authDomain: 'travellog-848b1.firebaseapp.com',
  databaseURL: 'https://travellog-848b1.firebaseio.com',
  storageBucket: 'travellog-848b1.appspot.com'
})

window.firebase = firebase
export { firebase }
export default app.database()
