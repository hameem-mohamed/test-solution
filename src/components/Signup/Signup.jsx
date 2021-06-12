import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import { useStateValue } from '../../StateProvider'
import {auth} from '../../firebase'
import { toast } from 'react-toastify'

const Signup = () => {
    const history = useHistory()
    const [{user},dispatch] = useStateValue()
    const [email,setEmail]= useState('')
    const [password,setPassword]= useState('')
    const [loading,setLoading] = useState(false)

    useEffect(() => {
        if(user) history.push('/')
    },[user,history])

    const handleSubmit = async event => {
    event.preventDefault();
    setLoading(true)
    try {
      const result = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      console.log('user',result)
      dispatch({
          type: 'SET_USER',
          user : result.user
      })
      history.push('/')
    } catch (error) {
      console.error(error);
      toast.error(error.message)
      setLoading(false)
    }
  }

    const registerForm = () =><form onSubmit={handleSubmit}>
        <input type="email" className='form-control' autoFocus value={email} onChange={e=> setEmail(e.target.value)} placeholder='Enter your Email Address'/>
        <input type="password" className='form-control my-2' value={password} onChange={e => setPassword(e.target.value)} placeholder='Enter your Password'/>
        <button className='btn btn-outline-primary mt-2' type='submit'>Resgister</button>
    </form>

    return(
        <div className='container p-5'>
           <div className="row">
               <div className="col-md-6 offset-md-3">
                    {loading ?(<h4 className='text-danger'>Loading...</h4>) : (<h4>Register</h4>)  }              
                   {registerForm()}
               </div>
           </div>
        </div>
    )
}

export default Signup