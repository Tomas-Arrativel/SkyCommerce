import { useParams } from 'react-router-dom';
import './ProductPage.css';
import { useEffect, useState } from 'react';
import { fetchData } from '../../api/api';

const ProductPage = () => {
  const [data, setData] = useState();
  const { id } = useParams();

  useEffect(() => {
    const getProductsByCat = async () => {
      try {
        const result = await fetchData(`${id}`);
        setData(result);
      } catch (error: any) {
        console.error('Error while obtaining products:', error.message);
      }
    };
    getProductsByCat();
  }, []);

  console.log(data);

  return <div>ProductPage</div>;
};

export default ProductPage;
