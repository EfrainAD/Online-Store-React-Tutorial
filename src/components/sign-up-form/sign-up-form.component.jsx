import { useState } from "react"

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

     return (
          <div>
               <h1>Sign up with email</h1>
               <form onSubmit={() => {}}>
                    <label>Display</label>
                    <input type="text" onChange={handleChange} name="displayName" value={displayName} required/>
                    
                    <label>Email</label>
                    <input type="email" onChange={handleChange} name="email" value={email} required/>
                    
                    <label>Password</label>
                    <input type="password" onChange={handleChange} name="password" value={password} required/>
                    
                    <label>Comform Password</label>
                    <input type="password" onChange={handleChange} name="comformPassword" value={comformPassword} required/>

                    <button type="submit">Sign Up</button>
               </form>
          </div>
     )
}

export default SignUpForm