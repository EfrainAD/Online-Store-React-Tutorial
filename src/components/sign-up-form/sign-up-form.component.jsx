import { useState } from "react"
import { createAuthUserWithEmailAndPassword, createUserDocument } from "../../utils/firebase/firebase.utils"
import FormInput from '../form-input/form-input.component'
import Button from "../button/button.component"
import './sign-up-form.styles.scss'
import { confirmPasswordReset } from "firebase/auth"

const defaultFormFields = {
     displayName: '',
     email: '',
     password: '',
     comformPassword: '',
}

const SignUpForm = () => {
     const [formFields, setFormFields] = useState(defaultFormFields)
     const { displayName, email, password, comformPassword } = formFields
     console.log(formFields)

     const resetFormFields = () => (setFormFields(defaultFormFields))
     const resetPasswordFields = () => (setFormFields({...formFields, password: '', comformPassword: ''}))

     const handleChange = (e) => {
          const {name, value} = e.target
          setFormFields({...formFields, [name]: value})
     }
     const handleSubmit = async (e) => {
          e.preventDefault()
          const { displayName, email, password, comformPassword } = formFields

          if (password !== comformPassword) {
               alert('pass not match')
               return resetPasswordFields()
          }
          
          try {
               const user = await createAuthUserWithEmailAndPassword(email, password)
               await createUserDocument(user, {displayName})
               resetFormFields()
          } catch (error) {
               switch (error.code) {
                    case 'auth/weak-password':
                         alert('Password should be at least 6 characters')
                         resetPasswordFields()
                         break;
                    case 'auth/email-already-in-use':
                         alert('User already exist')
                         break;
                    default:
                         console.log(error)
                         break;
               }
          }
     }

     return (
          <div className="sign-up-container">
               <h2>Don't yet have an account?</h2>
               <span>Sign up with email</span>
               <form onSubmit={handleSubmit}>
                    <FormInput 
                         label="Display Name"
                         type="text" 
                         onChange={handleChange} name="displayName" 
                         value={displayName} 
                         required
                    />
                    
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
                    
                    <FormInput 
                         label="Comform Password" 
                         type="password" 
                         onChange={handleChange}
                         name="comformPassword" 
                         value={comformPassword} 
                         required
                    />

                    <Button>Sign Up</Button>
               </form>
          </div>
     )
}

export default SignUpForm