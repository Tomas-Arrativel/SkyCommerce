import { Link } from 'react-router-dom';
import { CartItem, TotalPrice } from '../../components/exports';
import { useShoppingContext } from '../../context/ShoppingCartContext';
import './ShoppingCartPage.css';
import { useEffect } from 'react';
import { fetchData } from '../../api/api';
import { discountPrice } from '../../utilities/discountedPrice';

const ShoppingCartPage = () => {
  const { cartItems } = useShoppingContext();

  let prices: any = [];
  useEffect(() => {
    const getProductPrice = async () => {
      try {
        cartItems.map(async (item) => {
          const result = await fetchData(
            `${item.id}?select=price,discountPercentage`,
          );
          prices.push(result);
        });
      } catch (error) {
        console.error('An error has ocurred: ', error);
      }
    };
    getProductPrice();
  }, [cartItems]);

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
        <TotalPrice items={prices} />
      </div>
    </section>
  );
};

export default ShoppingCartPage;
