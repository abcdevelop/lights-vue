import Firebase from 'firebase'

var config = {

};
const firebaseApp = Firebase.initializeApp(config);
const db = firebaseApp.database()
export const dbLightsRef = db.ref('lights')
