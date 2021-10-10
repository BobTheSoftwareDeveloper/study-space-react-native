import firebase from 'firebase/app'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyDSvJm7w03I1-Od106Avobsfe1zW7A4Jq0',
  authDomain: 'study-space-nz.firebaseapp.com',
  projectId: 'study-space-nz',
  storageBucket: 'study-space-nz.appspot.com',
  messagingSenderId: '518490004610',
  appId: '1:518490004610:web:802cb3c4bd105bd797a89b',
  measurementId: 'G-KB79NM8CT2',
}

/*
Default account login:
Email: bob@example.com
Password: bob123test
*/

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

const firebaseAuth = firebase.auth()

export { firebase, firebaseAuth }
