import React from 'react'
import {  Button, InputAdornment, TextField } from '@material-ui/core'
import {Search} from '@material-ui/icons'
import { useStateValue } from '../../StateProvider';
import useStyles from '../../styles';
import SingleProduct from '../Products/SingleProduct/SingleProduct';
import { toast } from 'react-toastify';
import { useEffect } from 'react';
import { useState } from 'react';

const Filter = () => {
    const [{ searchField },dispatch] = useStateValue();
    const classes = useStyles();
    const [products,setProducts] = useState([])

    const handleSearch = e => {
      dispatch({
        type : 'SEARCH',
        search : e.target.value
      }) 
    }

    useEffect(() =>{
     if(localStorage.getItem('products')){
        setProducts(JSON.parse(localStorage.getItem('products')))
        }
    },[])

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

    const filteredProducts = products.filter(product =>
      product.title.toLowerCase().includes(searchField.toLowerCase())
    );

    return(<>
        <div className='d-flex justify-content-center my-2'>
           <TextField onChange={handleSearch} className={classes.margin} placeholder="Search Product Title" InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Search />
            </InputAdornment>
          ),
        }}
      />

        <Button size='small' variant="outlined" color="secondary" onClick={()=>setProducts(products.slice().sort((a,b)=>b.price-a.price))} style={{margin:'0 20px'}}>High to Low</Button>
        <Button size='small' variant="outlined" color="primary" onClick={()=>setProducts(products.slice().sort((a,b)=>a.price-b.price))}>Low to High</Button>
    </div>

        <div className='grid-wrapper'>
            {
            filteredProducts.map((product) => (
                <SingleProduct key={product.id} product={product} addToBasket={addToBasket}/>
            ))
            }
        </div>
    </>)
}

export default Filter