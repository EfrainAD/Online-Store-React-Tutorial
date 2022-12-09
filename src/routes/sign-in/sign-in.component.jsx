import { createUserDocumentFromGoogleAuth, signInWithGooglePopup } from '../../utils/firebase/firebase.utils'
import SignUpForm from '../../components/sign-up-form/sign-up-form.component'
import SignInForm from '../../components/sign-in-form/sign-in-form.component'

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
               <SignInForm />
               <SignUpForm />
          </div>
     )
}

export default SignIn