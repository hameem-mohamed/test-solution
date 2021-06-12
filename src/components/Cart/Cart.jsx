import React from 'react'
import { useStateValue } from '../../StateProvider'
import {getBasketTotal} from '../../reducer'
import CartItem from './CartItem/CartItem'
import {Button} from '@material-ui/core'

import './Cart.css'
import { Link } from 'react-router-dom'

const Cart = () => {
    const [{basket,user}] = useStateValue()
    return(<>
      <div className='text-center'>
        {
          basket.length === 0 ? <p >Your Cart is empty.<Link to='/'><Button color='secondary' size='small'>Continue Shopping</Button></Link></p> : ''
        }
      </div>
      <div className='cart-page'>
        <div className='cart-header'>
          <div className='header-block'>
            <span>Product</span>
          </div>
         <div className='header-block'>
          <span>Title</span>
        </div>
          <div className='header-block'>
            <span>Quantity</span>
          </div>
          <div className='header-block'>
            <span>Price</span>
          </div>
          <div className='header-block'>
            <span>Remove</span>
          </div>
        </div>
    {basket.map(product => (
      <CartItem key={product.id} product={product} />
    ))}
    <div className='d-flex justify-content-between mt-4' style={{width:'95%'}}>
      {
        user ? <Link to='/checkout'>
        <Button size="small" variant="outlined" color="secondary" disabled={basket.length === 0}>Proceed to Checkout</Button>
      </Link> : <span className='text-danger'>Login to Checkout</span>
      }
      <div className='total'>TOTAL: ${getBasketTotal(basket)}</div>
    </div>
  </div>
   </> )
}

export default Cart