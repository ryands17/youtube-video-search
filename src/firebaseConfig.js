import firebase from 'firebase'

const config = {
  apiKey: 'AIzaSyBgklHrbTCTbvinLacGok9Qn-5vyyxBfYM',
  authDomain: 'project-197613.firebaseapp.com',
  databaseURL: 'https://project-197613.firebaseio.com',
  projectId: 'youtube-project-197613',
  storageBucket: 'youtube-project-197613.appspot.com',
  messagingSenderId: '460781466273'
}

if (!firebase.apps.length) {
  firebase.initializeApp(config)
}
