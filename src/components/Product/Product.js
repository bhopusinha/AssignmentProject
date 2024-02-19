import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import ProductCard from '../ProductCard.js';
import Loading from './Loading.js';
import './Product.css';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import  {addToCart} from '../Cart/addTocart.js'

const Product = () => {
    const [product, setProduct] = useState([]);
    const [change, setChange] = useState("");
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(true);
    const [price, setPrice] = useState([0, 1800]);
    const [cartCount, setCartCount] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            navigate('/');
        } else {
            ProductApi();
        }
    }, [navigate, search, price]);

    useEffect(() => {
        const cartData = JSON.parse(localStorage.getItem('setCart'));
        const count = cartData ? cartData.length : 0;
        setCartCount(count);
    }, [addToCart]);

    const priceHandler = (event, newprice) => {
        setPrice(newprice);
    }

    const ProductApi = async () => {
        const pdt = await fetch(`https://dummyjson.com/products/search?q=${search}&limit=100`);
        const { products } = await pdt.json();

        if (!pdt.ok) {
            setLoading(true);
            setProduct([]);
        } else {
            setLoading(false);
            setProduct(products);
        }
    }

    const onchangeHandle = (e) => {
        setChange(e.target.value);
    }

    const onclick = async (e) => {
        e.preventDefault();
        setSearch(change);
    }

    return (
        <div className="product">
            <div>
                <form onSubmit={onclick} className="search">
                    <input type="text" onChange={onchangeHandle} placeholder='Search' />
                    <input type="submit" value="Search" />
                </form>
                <Link to='/cart' className='link'><p><AddShoppingCartIcon color="primary" fontSize="large" />{cartCount}</p></Link>
            </div>

            <h1>Products</h1>

            <div className="filterBox">
                <Typography>Price</Typography>
                <Slider
                    value={price}
                    onChange={priceHandler}
                    valueLabelDisplay='auto'
                    aria-labelledby='range-slider'
                    min={0}
                    max={1800}
                />
            </div>

            <div className="content">
                {loading ? <Loading /> :
                    <>
 {product.length ? (
                product
                    .filter(item => item.price > price[0] && item.price < price[1])
                    .map(item => (
                        <ProductCard product={item} key={item.id} />
                    ))
            ) : (
                <h2>Product not found !!</h2>
            )}
                    </>
                }
            </div>
        </div>
    );
}

export default Product;
