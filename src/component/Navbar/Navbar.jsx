import React from 'react'
import {AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core';
import {ShoppingCart } from '@material-ui/icons';
 import logo from '../../assets/logo.png';
 import useStyles from './styles.js';
 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './style.css';
import { Link, useLocation } from 'react-router-dom';
const Navbar = ({totalitem})=>{
     const classes = useStyles();
     const location=useLocation();
     return(
             <AppBar position= "fixed" className={classes.appBar} color= "inherit">
                 <Toolbar>
                     <Typography variant="h6" className= {classes.title} color= "inherit">
                         <img src={logo} alt="Commerce. js" height="55px" className={classes.image} />
                         <div class="heading" id="header">
    <header class="container navbar">
        <nav class="flex space-between">
            
            <div class="left flex items-center">
                
                <ul class="flex items-center" id="u">
                    <li><a href="#home">HOME</a></li>
                    <li><a href="#about">ABOUT</a></li>
                    <li><a href="#products">PRODUCTS</a></li>
                    
                    <li><a href="#foot">CONTACT</a></li>
                    
                    </ul>
            </div>
           
            </nav>
            </header>
            </div>
                         
                    </Typography>

                     <div className={classes.grow}>
                        </div>
                    {location.pathname==='/'&&(
                     <div className= {classes.button}>
                        
                         <IconButton component ={Link} to="/cart" aria-label= "Show cart items" color= "inherit">
                             <Badge badgeContent={totalitem} color="secondary" >
                                 <ShoppingCart/>

                            </Badge>
                           </IconButton>
                           
                       </div> )}
                 </Toolbar>
               </AppBar>
     );
}


export default Navbar;