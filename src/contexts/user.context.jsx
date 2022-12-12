import { useState, useEffect } from "react";
import { createContext } from "react";
import { createUserDocument, onAuthStateChangedListener } from "../utils/firebase/firebase.utils";

export const UserContext = createContext({
     currentUser: '',
     setCurrentUser: () => null
})

export const UserProvider = ({ children }) => {
     useEffect(() => {
          const unSub = onAuthStateChangedListener((user) => {
               if (user) {
                    createUserDocument(user)
               }
               console.log('onAuthStateChangedListern user:', user)
               setCurrentUser(user)
               return user
          })
     },[])
     const [currentUser, setCurrentUser] = useState(null)
     const value = {currentUser, setCurrentUser}
     return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}