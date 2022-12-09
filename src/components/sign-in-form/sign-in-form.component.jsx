import { useState } from "react"
import { 
     createUserDocument,
     signInWithGooglePopup,
     signInWithEmail 
} from '../../utils/firebase/firebase.utils'
import FormInput from '../form-input/form-input.component'
import Button from "../button/button.component"
import './sign-in-form.styles.scss'

const defaultFormFields = {
     email: '',
     password: '',
}


const SignInForm = () => {
     const [formFields, setFormFields] = useState(defaultFormFields)
     const { email, password } = formFields
     console.log(formFields)
     
     const resetFormFields = () => (setFormFields(defaultFormFields))
     const signInWithGoogle = async () => {
          const user = await signInWithGooglePopup()
          await createUserDocument(user)
     }
     const handleChange = (e) => {
          const {name, value} = e.target
          setFormFields({...formFields, [name]: value})
     }
     const handleSubmit = async (e) => {
          e.preventDefault()
          try {
               const response = await signInWithEmail(email, password)
               console.log("Sign In with email res", response)
               // resetFormFields()
          } catch (error) {
               switch (error.code) {
                    case 'auth/wrong-password':
                         alert('Incorrect Password')
                         break;
                    case 'auth/user-not-found':
                         alert('User does not exist')
                         break;
                    default:
                         console.log(error)
                         break;
               }
          }
     }

     return (
          <div className="sign-in-container">
               <h2>I have an account?</h2>
               <span>Sign In with email</span>
               <form onSubmit={handleSubmit}>
                    <FormInput 
                         label="Email" 
                         type="email" 
                         onChange={handleChange} 
                         name="email" 
                         value={email} 
                         required 
                    />
                    
                    <FormInput 
                         label="Password" 
                         type="password" 
                         onChange={handleChange}
                         name="password" 
                         value={password} 
                         required
                    />

                    <div className="buttons-container">
                         <Button type="submit">Sign In</Button>
                         <Button type="button" onClick={signInWithGoogle} btnType="google">Sign In With Google</Button>
                    </div>
               </form>
          </div>
     )
}

export default SignInForm