import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";



function Checkout() {
 const [ {basket, user}, dispatch ] = useStateValue();
 
  return (
    
    <div className="checkout">
     
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/33/kindle/merch/2019/AUCC/HelpfulAlexaCovid19-vMX2.jpg"
        />
       
        <div>
          <h4>{user ? `Hello, ${user['email']}` : 'Hello, Guest'}</h4>
          <h2 className="checkout__title">Your shopping basket.</h2>
           
          { basket.map(item =>
            <CheckoutProduct 
            id={item.id}
            title={item.title}
            price={item.price} 
            image={item.image}
            rating={item.rating} 
            />
            )}
          
        </div>
      </div>
     
      <div className="checkout__right">
           <Subtotal />
      </div>
    </div>
   
  );
}

export default Checkout;
