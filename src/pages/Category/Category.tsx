import { useParams } from 'react-router-dom';
import './Category.css';
import { useEffect, useState } from 'react';
import { fetchData } from '../../api/api';
import { Product } from '../../components/exports';

const Category = () => {
  const [data, setData] = useState<any>();

  const { cat } = useParams();

  let endpoint: string;
  switch (cat) {
    case 'technology':
      endpoint = '?limit=10&skip=0';
      break;
    case 'men':
      endpoint = '?limit=10&skip=50';
      break;
    case 'women':
      endpoint = '?limit=10&skip=40';
      break;
    case 'accessories':
      endpoint = '?limit=25&skip=60';
      break;
    case 'groceries':
      endpoint = 'category/groceries';
      break;
    case 'decorations':
      endpoint = '?limit=10&skip=25';
      break;
    case 'hygiene':
      endpoint = '?limit=10&skip=10';
      break;
    case 'transport':
      endpoint = '?limit=10&skip=85';
      break;
    case 'lighting':
      endpoint = 'category/lighting';
  }

  useEffect(() => {
    const getProductsByCat = async () => {
      try {
        const result = await fetchData(endpoint);
        setData(result);
      } catch (error: any) {
        console.error('Error while obtaining products:', error.message);
      }
    };
    getProductsByCat();
  }, [cat]);

  return (
    <section className='products__container'>
      {data &&
        data.products.map((prod: any) => (
          <Product
            title={prod.title}
            price={prod.price}
            discount={prod.discountPercentage}
            image={prod.images[0]}
            id={prod.id}
            key={prod.id}
          />
        ))}
    </section>
  );
};

export default Category;
