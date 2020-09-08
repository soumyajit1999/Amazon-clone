import React from 'react';
import './CheckoutProduct.css';
import { useStateValue} from './StateProvider';

function CheckoutProduct({id, title, rating, image, price}) {
    const [{basket},dispatch] = useStateValue();

    const removeFromBasket = () => {
        //remove item from basket...
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id: id,

        });
    };
    return (
        <div className="checkoutProduct">
            <img className="checkoutProduct-image" src={image} />

            <div className="checkoutProduct-info">
                <p className="checkoutProduct-title">{title}</p>

                <p className="checkoutProduct-price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>

                <div className="checkoutProduct-rating">
                {
                    Array(rating)
                    .fill()
                    .map((_) => (
                        <p>⭐</p>
                    ))
                }
            </div>
            <button onClick={removeFromBasket}>Remove from basket</button>
            </div>   
        </div>
    );
}

export default CheckoutProduct
