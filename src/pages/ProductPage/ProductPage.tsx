import { Link, useParams } from 'react-router-dom';
import './ProductPage.css';
import { useEffect, useState } from 'react';
import { fetchData } from '../../api/api';
import { discountPrice } from '../../utilities/discountedPrice';
import { useShoppingContext } from '../../context/ShoppingCartContext';

interface ProductProps {
  brand: string;
  category: string;
  description: string;
  discountPercentage: number;
  id: number;
  images: string[];
  price: number;
  rating: number;
  stock: number;
  thumbnail: string;
  title: string;
}

const ProductPage = () => {
  const [data, setData] = useState<ProductProps>();
  const { id } = useParams();

  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingContext();

  useEffect(() => {
    const getProductsByCat = async () => {
      try {
        const result = await fetchData(`${id}`);
        setData(result);
      } catch (error: any) {
        console.error('Error while obtaining products:', error.message);
      }
    };
    getProductsByCat();
  }, []);

  const quantity = getItemQuantity(data?.id);

  return (
    <div className='product-page' id={id}>
      <img
        src={data?.images[0]}
        alt={data?.title}
        className='product-page__img'
      />
      <div className='product-page__info'>
        <h2 className='info__title'>{data?.title}</h2>
        <div className='info__info'>
          <p className='info__info-company'>{data?.brand}</p>
          <p className='info__info-rating'>{data?.rating} / 5</p>
          <p className='info__info-stock'>Stock: {data?.stock}</p>
        </div>
        <p className='info__desc'>{data?.description}</p>
        <div className='info__price'>
          <p className='info__price-off'>{data?.discountPercentage}% OFF</p>
          <p className='info__price-price'>
            <span>${data?.price}</span> $
            {discountPrice(data?.price, data?.discountPercentage)}
          </p>
        </div>
        {quantity === 0 ? (
          <button
            className='info__btn'
            onClick={() => increaseCartQuantity(data?.id)}
          >
            Add to cart
          </button>
        ) : (
          <div className='info__btn-incart'>
            <div className='incart__quantity'>
              <button
                className='incart__quantity-btn'
                onClick={() => decreaseCartQuantity(data?.id)}
              >
                -
              </button>
              <p className='incart__quantity-value'>
                <span>{quantity}</span> in cart
              </p>
              <button
                className='incart__quantity-btn'
                onClick={() => increaseCartQuantity(data?.id)}
              >
                +
              </button>
            </div>
            <button
              className='incart__remove'
              onClick={() => removeFromCart(data?.id)}
            >
              Remove
            </button>
            <Link className='goto-link' to='/shopping-cart'>
              Go to the cart
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductPage;
