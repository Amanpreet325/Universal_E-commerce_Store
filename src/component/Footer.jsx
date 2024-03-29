import React from 'react'
import './footer.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer = () => {
  return (
    <div>
      <footer class="footer" id='foot'>
  	 <div class="container">
  	 	<div class="row">
  	 		<div class="footer-col">
  	 			<h4>company</h4>
  	 			<ul>
  	 				<li><a href="#">about us</a></li>
  	 				<li><a href="#">our services</a></li>
  	 				<li><a href="#">privacy policy</a></li>
  	 				<li><a href="#">affiliate program</a></li>
  	 			</ul>
  	 		</div>
  	 		<div class="footer-col">
  	 			<h4>get help</h4>
  	 			<ul>
  	 				<li><a href="#">FAQ</a></li>
  	 				<li><a href="#">shipping</a></li>
  	 				<li><a href="#">returns</a></li>
  	 				<li><a href="#">order status</a></li>
  	 				<li><a href="#">payment options</a></li>
  	 			</ul>
  	 		</div>
  	 		<div class="footer-col">
  	 			<h4>online shop</h4>
  	 			<ul>
  	 				<li><a href="#">SS CHAIR</a></li>
  	 				<li><a href="#">SS TABLE</a></li>
  	 				<li><a href="#">SS KITCHEN</a></li>
  	 				<li><a href="#">SS BARBEQUE</a></li>
  	 			</ul>
  	 		</div>
  	 		<div class="footer-col">
  	 			<h4>follow us</h4>
  	 			<div class="social-links">
  	 				<a href="#"><i class="fa-regular fa-envelope"></i></a>
  	 				<a href="#"><i class="fa-brands fa-instagram"></i></a>
  	 				<a href="#"><i class="fa-solid fa-phone"></i></a>
  	 				<a href="#"><i class="fa-brands fa-linkedin-in"></i></a>
  	 			</div>
  	 		</div>
  	 	</div>
  	 </div>
     <div className='copy'><p>COPYRIGHT REGISTERED UNIVERSAL ENGINEERS <i class="fa-regular fa-registered"></i></p></div>
  </footer>
    </div>
  )
}

export default Footer
