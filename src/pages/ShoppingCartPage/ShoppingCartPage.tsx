import { Link } from 'react-router-dom';
import { CartItem } from '../../components/exports';
import { useShoppingContext } from '../../context/ShoppingCartContext';
import './ShoppingCartPage.css';

const ShoppingCartPage = () => {
  const { cartItems } = useShoppingContext();
  return (
    <section className='cartpage'>
      <div className='cartpage__title'>
        <h2>Cart</h2>
      </div>
      <div className='cartpage__items'>
        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <CartItem id={item.id} quantity={item.quantity} key={item.id} />
          ))
        ) : (
          <div className='empty__cart'>
            <img src='../../cart/empty-cart.webp' alt='Empty cart image' />
            <h2>There isn't any Product added to cart</h2>
            <Link to='/'>Add products</Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default ShoppingCartPage;
