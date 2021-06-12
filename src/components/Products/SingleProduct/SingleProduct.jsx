import React from 'react'
import {Card,CardActionArea,CardMedia,CardContent,Typography,CardActions,Button} from '@material-ui/core'
import useStyles from '../../../styles'

const SingleProduct = ({product,addToBasket}) => {
       const classes = useStyles();
       
    return(
        <Card className={classes.card} key={product.id}>
                <CardActionArea>
                    <CardMedia
                    component="img"
                    alt={product.title}
                    height="160"
                    image={product.image}
                    title={product.title}
                    style={{objectFit:'contain'}}
                    />
                    
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {product.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {product.description && `${product.description.substring(0,150)}...`}
                       
                    </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" variant="contained" color="secondary" onClick={() => addToBasket(product)}>
                    Add to Cart
                    </Button>
                    <Typography  variant="h5" component="h5" className='ml-auto' color='primary'>
                        {`$${product.price}`}
                    </Typography>
                </CardActions>
            </Card>
    )
}

export default SingleProduct