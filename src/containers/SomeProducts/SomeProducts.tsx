import { SeeMore } from '../../components/exports';

import './SomeProducts.css';

const SomeProducts = () => {
  return (
    <div className='someprods'>
      <div className='carousel__container'>
        <h2>The best on Technology</h2>
        <SeeMore categorie='Technology' />
        <a href='#'>See More</a>
      </div>

      <div className='carousel__container'>
        <h2>The best on Decoration</h2>
        <SeeMore categorie='Decoration' />
        <a href='#'>See More</a>
      </div>
    </div>
  );
};

export default SomeProducts;
