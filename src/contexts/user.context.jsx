import { useState, useEffect, useReducer } from "react";
import { createContext } from "react";
import { createUserDocument, onAuthStateChangedListener } from "../utils/firebase/firebase.utils";
import { createAction } from "../utils/reducer/reducer.utils";

export const UserContext = createContext({
     currentUser: '',
     setCurrentUser: () => null
})

const USER_ACTION_TYPES = {
     SET_CURRENT_USER: 'SET_CURRENT_USER',
}

const userReducer = (state, action) => {
     const { type, payload } = action

     switch (type) {
          case USER_ACTION_TYPES.SET_CURRENT_USER:
               return {...state, currentUser: payload}
          break
     
          default:
               throw new Error(`Unhanddled action type: ${type}`)
     }
}

const INITIAL_STATE = {currentUser: null}

export const UserProvider = ({ children }) => {
     // const [currentUser, setCurrentUser] = useState(null)
     
     const [{currentUser}, dispatch] = useReducer(userReducer, INITIAL_STATE)
     const setCurrentUser = (user) => dispatch(createAction(
          USER_ACTION_TYPES.SET_CURRENT_USER, 
          user
     ))

     const value = {currentUser, setCurrentUser}

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
     return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}