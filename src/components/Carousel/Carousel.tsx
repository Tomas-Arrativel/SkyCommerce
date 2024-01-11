import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

import './Carousel.css';

interface CarouselProps {
  categorie: string;
}

const Carousel = ({ categorie }: CarouselProps) => {
  const [width, setWitdh] = useState<number>(0);

  const carousel: any = useRef();

  useEffect(() => {
    const handleResize = () => {
      setWitdh(carousel.current.scrollWidth - carousel.current.offsetWidth);
    };
    window.addEventListener('resize', handleResize);
  }, []);

  return (
    <div className='carousel__container'>
      <h2>The best on {categorie}</h2>

      <motion.div ref={carousel} className='carousel__products'>
        <motion.div
          drag='x'
          dragConstraints={{ right: 0, left: -width }}
          className='products__card'
        >
          <motion.div></motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Carousel;
