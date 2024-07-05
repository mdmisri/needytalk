import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyA6U7aEBsxw-JnPf2lidl256b4hzU_5LZQ',
  authDomain: 'needytalks1.firebaseapp.com',
  projectId: 'needytalks1',
  storageBucket: 'needytalks1.appspot.com',
  messagingSenderId: '159059990778',
  appId: '1:159059990778:web:bf87bdf21681900dcf5143'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

// Initialize Auth
const auth = getAuth(app);

export { app, db, auth };