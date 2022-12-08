import { createUserDocumentFromGoogleAuth, signInWithGooglePopup } from '../../utils/firebase/firebase.utils'
import SignUpForm from '../../components/sign-up-form/sign-up-form.component'

const SignIn = () => {
     const signInWithGoogle = async () => {
          const user = await signInWithGooglePopup()
          console.log('user', user)
          const userDocRef = await createUserDocumentFromGoogleAuth(user)
          console.log('userDocRef', userDocRef)
     }
     return (
          <div>
               <h1>Sign In Page</h1>
               <button onClick={signInWithGoogle}>Sign In with Google</button>
               <SignUpForm />
          </div>
     )
}

export default SignIn