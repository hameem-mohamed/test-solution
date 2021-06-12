import React, { useEffect, useState } from 'react'
import {Button} from '@material-ui/core'
import { auth } from '../../firebase'
import { useStateValue } from '../../StateProvider'
import { toast } from 'react-toastify'
import { useHistory } from 'react-router'

const Login = () => {
    const [email,setEmail]= useState('')
    const [password,setPassword] = useState('')
    const [loading,setLoading] = useState(false)
    const [{user},dispatch] = useStateValue()
    const history = useHistory()

    useEffect(() => {
        if(user) history.push('/')
    },[user,history])

    const handleSubmit = async (e) => {
       e.preventDefault();
        setLoading(true)
       try {
           const result = await auth.signInWithEmailAndPassword(email,password)
           dispatch({
               type : "SET_USER",
               user : result.user
           })
           history.push('/')
       } catch (error) {
           toast.error(error.message)
           setLoading(false)
       }
    }

    const loginForm = () => <form onSubmit={handleSubmit}>
        <div className="form-group">
            <input type="email" className='form-control' autoFocus value={email} onChange={e=> setEmail(e.target.value)} placeholder='Enter your Email Address'/>
        </div>
        <div className="form-group">
             <input type="password" className='form-control'  value={password} onChange={e=> setPassword(e.target.value)} placeholder='Enter your Password'/>
        </div>
        
       <Button onClick={handleSubmit} color="secondary" variant='contained' size='large' disabled={!email || password.length < 6}  className='mb-3'>
           Login With Email/Password
       </Button>
    </form>

    return(
        <div className='container p-5'>
           <div className="row">
               <div className="col-md-6 offset-md-3">
                   {loading ?(<h4 className='text-danger'>Loading...</h4>) : (<h4>Login</h4>)  }              
                   {loginForm()}
               </div>
           </div>
        </div>
    )
}

export default Login