import { useState } from "react"
import { createAuthUserWithEmailAndPassword, createUserDocumentFromGoogleAuth } from "../../utils/firebase/firebase.utils"
import FormInput from '../form-input/form-input.component'
import Button from "../button/button.component"
import './sign-up-form.styles.scss'

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

     const handleChange = (e) => {
          const {name, value} = e.target
          setFormFields({...formFields, [name]: value})
     }
     
     const handleSubmit = async (e) => {
          e.preventDefault()
          const { displayName, email, password, comformPassword } = formFields
          if (password !== comformPassword) return console.log('pass not match')
          try {
               const user = await createAuthUserWithEmailAndPassword(email, password)
               console.log(user)
               const ref = await createUserDocumentFromGoogleAuth(user, {displayName})
               console.log(ref)
          } catch (error) {
               if (error.code === 'auth/email-already-in-use')
                    alert('error: email already in use')
               else 
                    console.log('message', error.message)
          }
     }

     return (
          <div>
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