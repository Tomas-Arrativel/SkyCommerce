import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { fetchData } from '../../api/api';

import './Carousel.css';

interface CarouselProps {
  categorie: string;
}

// structure of a product
interface Product {
  id: number;
  images: string[];
  title: string;
}

const Carousel = ({ categorie }: CarouselProps) => {
  const [width, setWidth] = useState<number>(0);
  const [data, setData] = useState<any>();

  const products: any = useRef();

  // Endpoint for api call
  let endpoint: string;
  if (categorie === 'Technology') endpoint = '?limit=10&select=images,title';
  else if (categorie === 'Decoration')
    endpoint = '?limit=10&skip=25&select=images';

  // handling window resize events, and fetching data
  useEffect(() => {
    // Resize function for the slider

    // api call
    const fetchDataAsync = async () => {
      try {
        const result = await fetchData(endpoint);
        setData(result);
      } catch (error: any) {
        console.error('Error while obtaining data:', error.message);
      }
    };
    fetchDataAsync();

    const handleResize = () => {
      setWidth(products.current.scrollWidth - products.current.offsetWidth);
    };
    window.addEventListener('resize', handleResize);
  }, []);

  const handleLoad = () => {
    // Ensure that the ref gets the correct value
    setWidth(products.current.scrollWidth - products.current.offsetWidth);
  };

  console.log(data);
  return (
    <motion.div ref={products} className='carousel__products'>
      <motion.div
        onLoad={handleLoad}
        className='products__card'
        drag='x'
        dragConstraints={{
          right: 0,
          left: -width,
        }}
      >
        {data &&
          data.products.map((product: Product) => (
            <motion.div key={product.id} className='card__product'>
              <img
                src={product.images[0]}
                alt={`${product.title} ${product.id}`}
              />
            </motion.div>
          ))}
      </motion.div>
    </motion.div>
  );
};

export default Carousel;
