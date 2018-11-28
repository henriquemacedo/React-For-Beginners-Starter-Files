import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCTZJMXSOSpgeteUsXVcmRQPZ0avFqNgtU",
  authDomain: "catch-of-the-day-fbb98.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-fbb98.firebaseio.com"
});

const base = Rebase.createClass(firebase.database());

// This is a named export
export { firebaseApp };

// This is a default export
export default base;
