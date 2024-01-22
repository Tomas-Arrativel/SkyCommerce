import { useEffect } from 'react';
import { useShoppingContext } from '../../context/ShoppingCartContext';
import { discountPrice } from '../../utilities/discountedPrice';
import './TotalPrice.css';

interface TotalPriceProps {
  id: number;
  price: number;
  discountPercentage: number;
}

const TotalPrice = ({ items }: any) => {
  const { getItemQuantity } = useShoppingContext();
  let finalPrice: number = 0;
  items.map((item: TotalPriceProps) => {
    const quantity = getItemQuantity(item.id);
    const discountedPrice: any = discountPrice(
      item.price,
      item.discountPercentage,
    );
    finalPrice += quantity * discountedPrice;
  });

  return <h2 className='final__price'>Total: {finalPrice.toFixed(2)}</h2>;
};

export default TotalPrice;
