import { useEffect, useState } from 'react';
import { fetchData } from '../../api/api';

import './SeeMore.css';
import { Link } from 'react-router-dom';

interface CarouselProps {
  categorie: string;
}

// structure of a product
interface Product {
  id: number;
  images: string[];
  title: string;
}

const SeeMore = ({ categorie }: CarouselProps) => {
  const [data, setData] = useState<any>();

  // Endpoint for api call
  let endpoint: string;
  if (categorie === 'Technology') endpoint = 'category/smartphones';
  else if (categorie === 'Decoration') endpoint = 'category/home-decoration';

  // api call
  useEffect(() => {
    const fetchDataAsync = async () => {
      try {
        const result = await fetchData(endpoint);
        setData(result);
      } catch (error: any) {
        console.error('Error while obtaining data:', error.message);
      }
    };
    fetchDataAsync();
  }, []);

  // Container of products
  return (
    <div className='products'>
      {data &&
        data.products.map((product: Product) => (
          <Link
            to={`product/${product.id}`}
            key={product.id}
            className='products__card'
          >
            <img
              src={product.images[0]}
              alt={`${product.title} ${product.id}`}
            />
          </Link>
        ))}
    </div>
  );
};

export default SeeMore;
