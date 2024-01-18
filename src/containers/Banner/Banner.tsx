import { Offer } from '../../components/exports';
import './Banner.css';

const Banner = () => {
  return (
    <section className='offers'>
      <div className='offers__img'></div>
      <div className='offers__container'>
        <Offer
          btnText='Shop now'
          title='Deals in technology'
          img='/offers/iPhone-9.webp'
          link='category/technology'
        />
        <Offer
          btnText='Shop now'
          title='The best on hygiene'
          img='/offers/perfume-oil.webp'
          link='category/hygiene'
        />
        <Offer
          btnText='See more'
          title='Refresh your space'
          img='/offers/decoration.webp'
          link='category/decorations'
        />
      </div>
    </section>
  );
};

export default Banner;
