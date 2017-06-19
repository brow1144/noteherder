import Rebase from 're-base'
import firebase from 'firebase/app'
import database from 'firebase/database'

const app = firebase.initializeApp( {
    apiKey: "AIzaSyC_rAnRHKA0loTPyul4uraSwm1CBWk03rU",
    authDomain: "noteherder-98888.firebaseapp.com",
    databaseURL: "https://YOUR-APP.firebaseio.com",
    projectId: "YOUR-APP",
    storageBucket: "YOUR-APP.appspot.com",
    messagingSenderId: "YOUR MESSAGE SENDER ID"
})

const db = database(app)

export default Rebase.createClass(db)


