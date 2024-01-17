import { motion } from 'framer-motion';

import './Categories.css';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const categories = [
  'Technology',
  'Men',
  'Women',
  'Accessories',
  'Groceries',
  'Decorations',
  'Hygiene',
  'Transport',
  'Lighting',
];

const Categories = () => {
  const [width, setWidth] = useState<number>(0);

  const carousel: any = useRef();

  useEffect(() => {
    const handleResize = () => {
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
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
            <Link
              to={`/category/${cat.toLowerCase()}`}
              className='categories__category'
            >
              {cat}
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Categories;
