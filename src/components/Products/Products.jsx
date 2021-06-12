import React,{useState,useEffect} from 'react'

import {useStateValue} from '../../StateProvider'
import {toast} from 'react-toastify'
import SingleProduct from './SingleProduct/SingleProduct'

const Products = () => {
    const [products,setProducts] = useState([])
    const [{ basket,searchField }, dispatch] = useStateValue();
    const url ='https://fakestoreapi.com/products'

    const getAllProducts = async () => {
        const response = await fetch(url)
        const results = await response.json()
        console.log('products result',results)
        setProducts(results)
    }

    useEffect(() => {
        getAllProducts()
    },[])

    localStorage.setItem('products',JSON.stringify(products))

    console.log(basket)

    console.log(searchField)

    const addToBasket = (p) => {
   
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: p.id,
        title: p.title,
        image: p.image,
        price: p.price,
        description: p.description,
        category: p.category,
        
      },
    });

    toast.success('Product Added to Cart')
  };

    return(<>
        <div className='grid-wrapper'>
           {
               products.map((product) => (
                <SingleProduct key={product.id} product={product} addToBasket={addToBasket}/>
               ))
           }
        </div>
    
  </>  )
}

export default Products