import { motion } from 'framer-motion';

import './Categories.css';
import { useEffect, useRef, useState } from 'react';

const categories = [
  'Technology',
  'Clothes',
  'Groceries',
  'Decorations',
  'Furnitures',
  'Cars',
  'Motorcycles',
];

const Categories = () => {
  const [width, setWitdh] = useState<number>(0);

  const carousel: any = useRef();

  useEffect(() => {
    const handleResize = () => {
      setWitdh(carousel.current.scrollWidth - carousel.current.offsetWidth);
    };
    window.addEventListener('resize', handleResize);
  }, []);

  return (
    <motion.div ref={carousel} className='carousel'>
      <motion.div
        drag='x'
        dragConstraints={{ right: 0, left: -width }}
        className='categories'
      >
        {categories.map((cat, i) => (
          <motion.div key={i}>
            <p className='categories__category'>{cat}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Categories;
