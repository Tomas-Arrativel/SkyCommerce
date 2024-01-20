import { useEffect, useState } from 'react';
import { IoMdClose } from 'react-icons/io';
import { fetchData } from '../../api/api';

import './CartItem.css';
import { Link } from 'react-router-dom';

interface CartItemProps {
  id: number | undefined;
  quantity: number;
}

interface ProductProp {
  id: number;
  price: number;
  title: string;
  images: string[];
}

const CartItem = ({ id, quantity }: CartItemProps) => {
  const [data, setData] = useState<ProductProp>();

  useEffect(() => {
    if (!id) return;
    const fetchProdById = async () => {
      try {
        const result = await fetchData(`${id}?select=title,price,images`);
        setData(result);
      } catch (error) {
        console.error('an error has occurred: ' + error);
      }
    };
    fetchProdById();
  }, []);

  return (
    <div className='cartitem'>
      <div className='cartitem__item'>
        <Link to={`/product/${id}`}>
          <img src={data?.images[0]} alt={data?.title} />
        </Link>
        <div className='cartitem__item-info'>
          <p>
            {data?.title} <span>x {quantity}</span>
          </p>
          <p>{data?.price}</p>
        </div>
      </div>
      <div className='cartitem__delete'>
        <p>Delete</p>
        <div className='cartitem__delete-close'>
          <IoMdClose />
        </div>
      </div>
    </div>
  );
};

export default CartItem;
