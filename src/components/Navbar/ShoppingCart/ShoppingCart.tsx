import { FaShoppingCart } from 'react-icons/fa';

import './ShoppingCart.css';
import { useShoppingContext } from '../../../context/ShoppingCartContext';

const ShoppingCart = () => {
  const { cartQuantity } = useShoppingContext();
  return (
    <div className='cart'>
      <FaShoppingCart className='cart__cart' />
      <p className='cart__items'>{cartQuantity}</p>
    </div>
  );
};

export default ShoppingCart;
