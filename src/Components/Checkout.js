import React from "react";
import { useStateValue } from "./StateProvider";
import ad from "../assets/ad_checkout.jpg";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";


function Checkout() {
  const [{ basket }] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__left">

        <img src={ad} alt="ad" className="checkout__ad" />
        {basket?.length === 0 ? (
          <div>
            <h2>Your Shopping Cart is empty</h2>
            <p>
              You have no items in your basket.To buy one one add it to the
              shopping basket
            </p>
          </div>
         ) : (
          <div>
            <h2 className="checkout__title">Your Shopping Basket</h2>
            {basket?.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                price={item.price}
                rating={item.rating}
                image={item.image}
              />
            ))}
          </div>
        )}
      </div>
      {basket.length>0 &&  (
        <div className="checkout__right">
            <h1>subtotal</h1>
            <Subtotal/>
        </div>
      )}
    </div>
  );
}

export default Checkout;
