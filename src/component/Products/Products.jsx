import React from 'react';
import Grid from '@material-ui/core/Grid';

import Product from './Product/Product';
import useStyles from './styles';
import Home from '../Home';
import About from '../About';
import Footer from '../Footer';

const products=[{id:1,name:'mouse',description:'bad',price:'12$',image:'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg'}];
const Products = ( {products, onAddToCart}) => {
  const classes = useStyles();
  if (!products.length) return <p>Loading...</p>;

  return (
    <div><Home/>
    <About/>
    <div className={classes.body} id ="products">
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <div className={classes.productsContainer}>
      <Grid container justify="center" spacing={4}>
        {products.map((product) => (
          <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
            <Product product={product} onAddToCart={onAddToCart} />
          </Grid>
        ))}
      </Grid>
      </div>
    </main>
    </div>
    <Footer/>
    </div>
  );
};

export default Products;
