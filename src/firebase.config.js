import Firebase from 'firebase'

var config = {
  apiKey: "AIzaSyCn3PR-rlqb9SVeuFoaVus6zD2htSh9uGM",
  authDomain: "infos-tools.firebaseapp.com",
  databaseURL: "https://infos-tools.firebaseio.com",
  projectId: "infos-tools",
  storageBucket: "infos-tools.appspot.com",
  messagingSenderId: "98555307856"
};
const firebaseApp = Firebase.initializeApp(config);
const db = firebaseApp.database()
export const dbLightsRef = db.ref('lights')
