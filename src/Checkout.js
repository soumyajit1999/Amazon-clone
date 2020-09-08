import React from 'react'
import { useStateValue } from './StateProvider';
import './Checkout.css';
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';

function Checkout() {
    const[{basket}] = useStateValue();
    return (
        <div className="checkout">  
        <div className="checkour-left"> 
        <img 
        className="checkout-ad" 
        src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
        />
        {basket?.length === 0  ?(
            <div>
                <h2>Your Amazon basket is Empty</h2>
                <p>The price and availability of items at Amazon.in are subject to change. The shopping cart is a temporary place to store a list of your items and reflects each item's most recent price.
                Do you have a promotional code? We'll ask you to enter your claim code when it's time to pay.</p>
            </div>
        
        ) : (
            <div>
                <h2 className="checkout-title">Your Shopping Basket</h2>

                {/*List out all of the Checkout Products*/}
                {basket?.map((item) => (
                    <CheckoutProduct
                        id={item.id}
                        title={item.title}
                        image={item.image}
                        price={item.price}
                        rating={item.rating}
                    />
                ))}
            </div>

        )}
        </div>
        {basket.length > 0 && (
            <div className="checkout-right">
                <Subtotal />
            </div>


        )}
        </div>
    );
}

export default Checkout;
