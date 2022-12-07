import { initializeApp } from 'firebase/app'
import { 
     getAuth, 
     signInWithRedirect, 
     signInWithPopup, 
     GoogleAuthProvider 
} from 'firebase/auth'

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBu6PzwYQRwCSm49kwVXofgxzeiv_rHIU8",
  authDomain: "crwn-clothing-db-tutoria-f958c.firebaseapp.com",
  projectId: "crwn-clothing-db-tutoria-f958c",
  storageBucket: "crwn-clothing-db-tutoria-f958c.appspot.com",
  messagingSenderId: "929309440586",
  appId: "1:929309440586:web:9feb313397fd2f480d44b3"
};

const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider()
provider.setCustomParameters({
     prompt: 'select_account'
})

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)