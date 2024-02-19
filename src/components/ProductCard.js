import React,{useContext} from 'react';
import './ProductCard.css';
import { AlertMessagesContext } from 'react-alert-messages';
import ReactStars from 'react-rating-star-with-type';
import { addToCart } from './Cart/addTocart';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
    const { postAlertMessage } = useContext(AlertMessagesContext);
    const onHandleClick=()=>{
        addToCart(product)
        postAlertMessage({ text: 'You Will See Update Cart Count After Refresh!' });
    }

    return (
        <div className="card">
            <img src={product.thumbnail} alt="" />
            <br /> <br />
            <p>{product.title}</p>
            <br />
            <ReactStars
                value={product.rating}
                isEdit={false}
                activeColors={["red", "orange", "#FFCE00", "#9177FF", "#8568FC",]}
            />
            <h3 className='price' >{`${product.price}₹`}</h3>
          <button className='btn' onClick={onHandleClick} >Add To Cart</button>
        </div>
    )
}

export default ProductCard
