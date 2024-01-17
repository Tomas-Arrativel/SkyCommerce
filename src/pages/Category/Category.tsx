import { useParams } from 'react-router-dom';
import './Category.css';
import { useEffect, useState } from 'react';
import { fetchData } from '../../api/api';

const Category = () => {
  const [data, setData] = useState();

  const { cat } = useParams();

  let endpoint: string;
  switch (cat) {
    case 'technology':
      endpoint = '?limit=10';
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
    case 'decoration':
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

  console.log(data);

  return <div>Category {cat}</div>;
};

export default Category;
