import { signInWithGooglePopup } from '../../utils/firebase/firebase.utils'



const SignIn = () => {
     const signInWithGoogle = async () => {
          const response = await signInWithGooglePopup()
          console.log(response);
     }
     return (
          <div>
               <h1>Sign In Page</h1>
               <button onClick={signInWithGoogle}>Sign In with Google</button>
          </div>
     )
}

export default SignIn