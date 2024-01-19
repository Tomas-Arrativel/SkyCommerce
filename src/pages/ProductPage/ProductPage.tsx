import { useParams } from 'react-router-dom';
import './ProductPage.css';
import { useEffect, useState } from 'react';
import { fetchData } from '../../api/api';
import { discountPrice } from '../../utilities/discountedPrice';

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

  const quantity: number = 0;

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
          <button className='info__btn'>Add to cart</button>
        ) : (
          <div className='info__btn-incart'>
            <div className='incart__quantity'>
              <button className='incart__quantity-btn'>-</button>
              <p className='incart__quantity-value'>
                <span>{quantity}</span> in cart
              </p>
              <button className='incart__quantity-btn'>+</button>
            </div>
            <button className='incart__remove'>Remove</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductPage;
