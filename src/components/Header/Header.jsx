import React from 'react'
import {Home,ShoppingCart,FilterList} from '@material-ui/icons'
import { AppBar, Button, IconButton, Toolbar,Badge } from '@material-ui/core'


import {Link} from 'react-router-dom'

import useStyles from '../../styles'
import { useStateValue } from '../../StateProvider'
import { auth } from '../../firebase'



const Header = () => {
    const classes = useStyles();
    const [{ basket,user },dispatch] = useStateValue();

    const signOut = () => {
       auth.signOut()

       dispatch({
         type: 'LOGOUT',
         user: null
       })
    }

    console.log('uswer',user)
    return(
      <div className={classes.header}>
      <AppBar position="static">
        <Toolbar>
          <Link to='/'>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <Home /> <small>Home</small>
          </IconButton>
          </Link>
          <Link to='/cart'>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <Badge badgeContent={basket.length} color="secondary">
              <ShoppingCart /> <small>Cart</small>
            </Badge>
          </IconButton>
          </Link>
          <Link to='/filter'>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <FilterList /> <small>Filter</small>
          </IconButton>
          </Link>
          
          <div className='ml-auto'>
            {!user && <Link to='/login'><Button color="inherit" >Login</Button></Link>}
            {!user && <Link to='/register'><Button color="inherit" >Register</Button></Link>}
            {user && <span>Welcome {user.email}</span>}
            {user && <Button color="secondary" variant='contained' size='small' onClick={signOut} className='ml-2'>Logout</Button>}
          </div>
        </Toolbar>
      </AppBar>
    </div>
    )
}

export default Header