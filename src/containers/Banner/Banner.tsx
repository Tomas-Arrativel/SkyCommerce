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
        />
        <Offer btnText='Shop now' title='Products under $25' img='' />
        <Offer btnText='See more' title='Refresh your space' img='' />
      </div>
    </section>
  );
};

export default Banner;
