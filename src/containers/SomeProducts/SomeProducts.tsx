import { Link } from 'react-router-dom';
import { SeeMore } from '../../components/exports';

import './SomeProducts.css';

const SomeProducts = () => {
  return (
    <div className='someprods'>
      <div className='carousel__container'>
        <h2>The best on Technology</h2>
        <SeeMore categorie='Technology' />
        <Link to='category/technology' className='container__link'>
          See More
        </Link>
      </div>

      <div className='carousel__container'>
        <h2>The best on Decoration</h2>
        <SeeMore categorie='Decoration' />
        <Link to='category/decorations' className='container__link'>
          See More
        </Link>
      </div>
    </div>
  );
};

export default SomeProducts;
