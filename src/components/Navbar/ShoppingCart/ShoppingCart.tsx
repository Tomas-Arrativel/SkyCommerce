import { FaShoppingCart } from 'react-icons/fa';

import './ShoppingCart.css';

const ShoppingCart = () => {
  return (
    <div className='cart'>
      <FaShoppingCart className='cart__cart' />
      <p className='cart__items'>0</p>
    </div>
  );
};

export default ShoppingCart;
