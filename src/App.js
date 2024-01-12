import React, { useEffect, useState,useCallback } from 'react';
import Products from './component/Products/Products';
import Navbar from './component/Navbar/Navbar';
import Cart from './component/Cart/Cart';
import { commerce } from './lib/commerce';
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom';
import Checkout from './component/Checkout/Checkout';
import '@fortawesome/fontawesome-free/css/all.min.css';
import PaymentForm from './component/Checkout/PaymentForm';
const App = () => {
  const [products, setProducts] = useState({});
  const [cart, setCart] = useState({total_items:0,quantity:0});
  const [loading, setLoading] = useState(true); 
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const productsData = await commerce.products.list();
        const cartData = await commerce.cart.retrieve();

        setProducts(productsData.data);
        setCart(cartData);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  
  

  const handleCart = async (productId, quantity) => {
    try {
      await commerce.cart.add(productId, quantity);

    // Fetch the updated cart data
    const updatedCart = await commerce.cart.retrieve();
    console.log(updatedCart.total_items);
    
    // Update the cart state
    setCart(updatedCart);
  } catch (error) {
    console.error('Error adding item to cart:', error);
  }
  };
  
  const updateCart = async (productId, quantity) => {
    try {
      const response = await commerce.cart.update(productId, { quantity });
      setCart(response.cart);
    } catch (error) {
      console.error('Error updating cart:', error);
    }
  };
  
  const removeCart = async (productId) => {
    try {
      const { cart } = await commerce.cart.remove(productId);
      setCart(cart);
    } catch (error) {
      console.error('Error removing item from cart:', error);
    }
  };
  
  
  const emptyCart = async () => {
    try {
      const { cart } = await commerce.cart.empty();
      setCart(cart);
    } catch (error) {
      console.error('Error emptying the cart:', error);
    }
  };
  
  
  console.log(cart);

  return (
    <Router>
    <div>
   
    {loading ? (
          <p>Loading...</p> // You can replace this with a loading spinner or a more elaborate placeholder
        ) : (
          
      <Routes>
      
      <Route path="/" element={
    <>
      <Navbar totalitem={cart ? cart.total_items : 0} />
      <Products products={products} onAddToCart={handleCart} />
    </>
  } />
          <Route path="/cart" element={<Cart cart={cart} 
          updateCart={updateCart} removeCart={removeCart}
          emptyCart={emptyCart}/>} />
      
      <Route path="/checkout" element={<Checkout cart={cart} />} />
      <Route path="/payment" element={<PaymentForm  />} />
      </Routes>
        )}
    </div>
    </Router>
  );
};
export default App;