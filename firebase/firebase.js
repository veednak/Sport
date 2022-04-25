// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDm8hfqh4j4RvYQCV78WPFomFDpsgrA4qY',
  authDomain: 'fir-auth-8dc18.firebaseapp.com',
  projectId: 'fir-auth-8dc18',
  storageBucket: 'fir-auth-8dc18.appspot.com',
  messagingSenderId: '853515843580',
  appId: '1:853515843580:web:8142af0efe6051ccf4a479',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app);
