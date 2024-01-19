import { Link } from 'react-router-dom';
import './Product.css';
import { discountPrice } from '../../utilities/discountedPrice';

interface ProductProps {
  discount: number;
  price: number;
  image: string;
  title: string;
  id: number;
}

const Product = ({ discount, price, image, title, id }: ProductProps) => {
  return (
    <Link className='link__styles' to={`/product/${id}`}>
      <div id={`product-${id}`} className='product'>
        <img src={image} alt={title} className='product__image' />
        <div className='product__info'>
          <h2>{title}</h2>
          <div className='product__info-price'>
            <p className='price__discount'>{discount}% OFF</p>
            <p className='price__price'>
              <span className='price__price-old'>${price}</span> $
              {discountPrice(price, discount)}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Product;
