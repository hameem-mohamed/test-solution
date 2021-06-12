import React from 'react'
import { useStateValue } from '../../../StateProvider'

import './CartItem.css'

const CartItem = ({product}) => {
  const [{basket},dispatch] = useStateValue()

  console.log('cart basket',basket)

  const addItem = (p) => {
    dispatch({
      type : 'ADD_TO_BASKET',
      item : p
    })
  }


  const removeItem = (p) => {
    dispatch({
      type : 'REMOVE_FROM_BASKET',
      item : p
    })
  }

  const clearItem = (p) => {
    dispatch({
      type :'EMPTY_BASKET',
      item : p
    })
  }

    return(
      <div className='cart-item'>
      <div className='image-container'>
        <img src={product.image} alt='item' />
      </div>
      <span className='name'>{product.title}</span>
      <span className='quantity'>
        <div className='arrow' 
        onClick={() => removeItem(product)}
        >
          &#10094;
        </div>
        <span className='value'>{product.quantity}</span>
        <div className='arrow' 
        onClick={() => addItem(product)}
        >
          &#10095;
        </div>
      </span>
      <span className='price'>${product.price}</span>
      <div className='remove-button' 
      onClick={() => clearItem(product)}
      >
        &#10005;
      </div>
    </div>
    )
}

export default CartItem