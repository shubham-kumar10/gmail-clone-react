import firebase from 'firebase'

const firebaseConfig = {
    apiKey: 'AIzaSyAQoIuf518A-POxSu7LOlQ7H4vI4Cw41MY',
    authDomain: 'clone-c6c6c.firebaseapp.com',
    projectId: 'clone-c6c6c',
    storageBucket: 'clone-c6c6c.appspot.com',
    messagingSenderId: '796193714159',
    appId: '1:796193714159:web:951aa2da5fcf82ef52901a',
}

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { db, auth, provider }
