import { useEffect, useState } from 'react';
import './Search.css';
import { fetchData } from '../../api/api';
import { useParams } from 'react-router-dom';
import { Product } from '../../components/exports';
import { NotFound } from '../exports';

const Search = () => {
  const [data, setData] = useState<any>();
  const { query } = useParams();

  let endpoint = `search?q=${query}`;

  useEffect(() => {
    const getProductsBySearch = async () => {
      try {
        const result = await fetchData(endpoint);
        setData(result);
      } catch (error: any) {
        console.error('Error while obtaining products:', error.message);
      }
    };
    getProductsBySearch();
  }, [endpoint]);
  return (
    <section className='products__container'>
      {data && data.products.length > 0 ? (
        data.products.map((prod: any) => (
          <Product
            title={prod.title}
            price={prod.price}
            discount={prod.discountPercentage}
            image={prod.images[0]}
            id={prod.id}
            key={prod.id}
          />
        ))
      ) : (
        <NotFound />
      )}
    </section>
  );
};

export default Search;
