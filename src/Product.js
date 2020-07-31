import React from 'react'
import './Product.css'
import { useStateValue } from './StateProvider'


function Product({ id, title, price, rating, image }) {

    const [{ basket }, dispatch] = useStateValue()

    const addToBasket = () => {

        console.log('Add item')
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                price: price,
                rating: rating,
                image: image
            }
        })
    }
    
    return (
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product_price">
                    <small>£</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {Array(rating)
                        .fill()
                        .map((_, i) => (
                            <p key={i}>🌟</p>
                        ))}

                    {/* .map((_) => (<p></p>)) 
                    => error Warning: Each child in a list should have a unique "key" prop */}
                </div>
            </div>
            <p></p>
            <img src={image} alt=""/>
            <button onClick={addToBasket}>Add to basket</button>
        </div>
    )
}

export default Product
