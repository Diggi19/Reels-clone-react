import firebase from 'firebase'


const firebaseApp = firebase.initializeApp({
    // add firebase config

})

const db = firebaseApp.firestore()

export default db