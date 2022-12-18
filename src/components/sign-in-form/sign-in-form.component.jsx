import { useState } from "react"
import { UserContext } from "../../contexts/user.context"
import { 
     createUserDocument,
     signInWithGooglePopup,
     signInWithEmail 
} from '../../utils/firebase/firebase.utils'
import FormInput from '../form-input/form-input.component'
import Button, {BTN_TYPE_CLASSES} from "../button/button.component"
import './sign-in-form.styles.scss'

const defaultFormFields = {
     email: '',
     password: '',
}

const SignInForm = () => {
     const [formFields, setFormFields] = useState(defaultFormFields)
     const { email, password } = formFields
     
     const resetFormFields = () => (setFormFields(defaultFormFields))
     const resetPasswordFields = () => (setFormFields({...formFields, password: ''}))

     const signInWithGoogle = async () => {
          await signInWithGooglePopup()
          resetFormFields()
     }
     const handleChange = (e) => {
          const {name, value} = e.target
          setFormFields({...formFields, [name]: value})
     }
     const handleSubmit = async (e) => {
          e.preventDefault()
          try {
               const { user } = await signInWithEmail(email, password)
               console.log("Sign In with email res", user)
               resetFormFields()
          } catch (error) {
               switch (error.code) {
                    case 'auth/wrong-password':
                         alert('Incorrect Password')
                         resetPasswordFields()
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
                         <Button type="button" onClick={signInWithGoogle} btnType={BTN_TYPE_CLASSES.google}>Google Sign In</Button>
                    </div>
               </form>
          </div>
     )
}

export default SignInForm