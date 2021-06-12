import React from 'react'
import { useStateValue } from '../../StateProvider'
import {getBasketTotal} from '../../reducer'
import { useState } from 'react'
import { toast } from 'react-toastify'
import {Button} from '@material-ui/core'
import {useHistory} from 'react-router-dom'


const Checkout = () => {

    const [address,setAddress] = useState('')
    const [stateName,setStateName] = useState('')
    const [city,setCity] = useState('')
    const [pincode,setPincode] = useState('')
    const [addressSaved, setAddressSaved] = useState(false);
    
    const history = useHistory()
    const [{basket,user},dispatch] = useStateValue()
    
    console.log(user)
    
    const saveAddress = (e) => {
        e.preventDefault()
        setAddressSaved(true);
        toast.success('Adddress Saved')

        setAddress('')
        setCity('')
        setStateName('')
        setPincode('')
    }

    const payCOD = () => {
        toast.success('Thank you for shopping with us. Your Order has been placed')
        dispatch({
            type: 'CLEAR_BASKET',
            item : []
        })
        history.push('/')
    }

    return(<>
           <h2 className='pl-3'>Total Amount To Pay: ${getBasketTotal(basket)}</h2>
        <form style={{padding:'10px'}} >
        
            <div className='form-row'>
                <div className="form-group col-md-6">
                <label htmlFor="inputAddress">Address</label>
                <input type="text" className="form-control" id="inputAddress" value={address} onChange={e => setAddress(e.target.value)} />
                </div>
                <div className="form-group col-md-6">
                <label htmlFor="inputCity">City</label>
                <input type="text" className="form-control" id="inputCity" value={city} onChange={e => setCity(e.target.value)}/>
                </div>
            </div>
            <div className='form-row'>
                <div className="form-group col-md-6">
                <label htmlFor="inputState">State</label>
                <input type="text" className="form-control" id="inputState" value={stateName} onChange={e => setStateName(e.target.value)}/>
                </div>
                <div className="form-group col-md-6">
                <label htmlFor="inputZip">Zip</label>
                <input type="text" className="form-control" id="inputZip" value={pincode} onChange={e => setPincode(e.target.value)}/>
                </div>
            </div>
        
       <div className="form-group col text-center">
            <button type="submit" className="btn btn-primary" onClick={saveAddress}>Save Address</button>
       </div>
    </form> 

    <div className='d-flex justify-content-center mt-3' >
        <Button color="primary" variant='outlined' onClick={payCOD} disabled={!addressSaved}>Pay COD</Button>       
    </div>      
  </>  )
}

export default Checkout