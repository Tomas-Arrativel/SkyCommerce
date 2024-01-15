import { Carousel } from '../../components/exports';

import './SomeProducts.css';

const SomeProducts = () => {
  return (
    <div className='someprods'>
      <div className='carousel__container'>
        <h2>The best on Technology</h2>
        <Carousel categorie='Technology' />
      </div>
    </div>
  );
};

export default SomeProducts;
