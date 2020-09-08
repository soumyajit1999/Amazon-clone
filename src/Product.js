import React from 'react';
import './Product.css';
import { useStateValue } from './StateProvider';

function Product({id, title, image, price, rating}) {
    const[{},dispatch] = useStateValue();

    const addToBasket = () =>{
        //Add item to basket...
        dispatch({
            type:'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
            }
        });

    };

    return (
        <div className="product">
            <div className="product-info">
            <p>{title}</p>
            <p className="product-price">
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div className="product-rating">
                {
                    Array(rating)
                    .fill()
                    .map((_) => (
                        <p>⭐</p>
                    ))
                }
            </div>
            </div>
            
            <img src={image} />
            <button onClick={addToBasket}>Add to basket</button>
        </div>
    );
}

export default Product;
 