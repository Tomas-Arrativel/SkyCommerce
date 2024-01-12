import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { fetchData } from '../../api/api';

import './Carousel.css';

interface CarouselProps {
  category: string;
}

// structure of a product
interface Product {
  id: number;
  images: string[];
  title: string;
}

const Carousel = ({ category }: CarouselProps) => {
  const [width, setWitdh] = useState<number>(0);
  const [data, setData] = useState<any>();

  const products: any = useRef();

  // Endpoint for api call
  let endpoint: string;
  if (category === 'Technology') endpoint = '?limit=10&select=images,title';
  else if (category === 'Decoration')
    endpoint = '?limit=10&skip=25&select=images';

  useEffect(() => {
    const handleResize = () => {
      setWitdh(products.current.scrollWidth - products.current.offsetWidth);
    };
    window.addEventListener('resize', handleResize);

    // api call
    const fetchDataAsync = async () => {
      try {
        const result = await fetchData(endpoint);
        setData(result);
        handleResize();
      } catch (error: any) {
        console.error('Error while obtaining data:', error.message);
      }
    };

    fetchDataAsync();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [category]);

  console.log(data);
  return (
    <div className='carousel__container'>
      <h2>The best on {category}</h2>

      <motion.div ref={products} className='carousel__products'>
        <motion.div
          className='products__card'
          drag='x'
          dragConstraints={{ right: 0, left: -width + window.innerWidth }}
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
    </div>
  );
};

export default Carousel;
