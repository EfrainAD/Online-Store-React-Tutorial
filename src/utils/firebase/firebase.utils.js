import { initializeApp } from 'firebase/app'
import { 
     getAuth, 
     signInWithRedirect, 
     signInWithPopup, 
     GoogleAuthProvider 
} from 'firebase/auth'
import {
     getFirestore,
     doc,
     getDoc,
     setDoc,
} from 'firebase/firestore'

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

export const db = getFirestore()

export const createUserDocumentFromGoogleAuth = async (userAuth) => {
     const userDocRef = doc(db, 'users', userAuth.user.uid)
     const userSnapshot = await getDoc(userDocRef)
     if (!userSnapshot.exists()) {
          const {displayName, email} = userAuth.user
          const createdAt = new Date()

          try {
               await setDoc(userDocRef, {displayName, email, createdAt})               
          } catch (error) {
               console.log('errer creating user', error.message)
          }
     }
     return userDocRef
}