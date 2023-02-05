import { initializeApp } from 'firebase/app'
import { 
     getAuth, 
     signInWithRedirect, 
     signInWithPopup, 
     GoogleAuthProvider,
     createUserWithEmailAndPassword,
     signInWithEmailAndPassword,
     signOut,
     onAuthStateChanged,
} from 'firebase/auth'
import {
     getFirestore,
     doc,
     getDoc,
     setDoc,
     collection,
     writeBatch,
     query,
     getDocs,
} from 'firebase/firestore'

// https://firebase.google.com/docs/web/setup#available-libraries

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
export const db = getFirestore()

export const signInWithGooglePopup = () => signInWithPopup(auth, provider)

export const addCollectionAndDocuments = async (collectionKey, objToAdd) => {
     const collectionRef = collection(db, collectionKey)
     const batch = writeBatch(db)

     objToAdd.forEach(obj => {
          const docRef = doc(collectionRef, obj.title.toLowerCase())
          batch.set(docRef, obj)
     })
     await batch.commit()
     console.log('done')
}

export const getCategoriesAndDocuments = async () => {
     const collectionRef = collection(db, 'categories')
     const q = query(collectionRef)

     const querySnapshot = await getDocs(q)
     
     return querySnapshot.docs.map(docSnapShot => docSnapShot.data())
}

export const createUserDocument = async (userAuth, addedInfo = {}) => {
     if (!userAuth) return

     const userDocRef = doc(db, 'users', userAuth.uid)
     const userSnapshot = await getDoc(userDocRef)
     
     if (!userSnapshot.exists()) {
          const {displayName, email} = userAuth
          const createdAt = new Date()

          try {
               const obj = {displayName, email, createdAt}
               console.log(obj)
               await setDoc(userDocRef, {displayName, email, createdAt, ...addedInfo})               
          } catch (error) {
               console.log('errer creating user', error.message)
          }
     }
     return userDocRef
}

export const signInWithEmail = async (email, password) => {
     if (!email || !password) return
     return await signInWithEmailAndPassword(auth, email, password)
}
export const createAuthUserWithEmailAndPassword = async (email, password) => {
     if (!email || !password) return
     return await createUserWithEmailAndPassword(auth, email, password)
}

export const signOutUser = async () => await signOut(auth)

export const onAuthStateChangedListener = (callback) => {
     const user = onAuthStateChanged(auth, callback)
     return user
}