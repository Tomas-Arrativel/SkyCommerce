import { motion, useAnimation } from 'framer-motion';
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
  const controls = useAnimation();

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
      // Reset x value when new products are loaded
      controls.start({ x: 0 });
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [controls]);

  const handleLoad = () => {
    // Ensure that the ref gets the correct value
    setWidth(products.current.scrollWidth - products.current.offsetWidth);
  };
  console.log(products.current);

  return (
    <motion.div className='carousel__products'>
      <motion.div
        ref={products}
        className='products__card'
        animate={controls}
        drag='x'
        dragConstraints={{
          right: 0,
          left: -width,
        }}
        onLoad={handleLoad}
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
