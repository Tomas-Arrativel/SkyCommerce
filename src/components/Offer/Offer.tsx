import { Link } from 'react-router-dom';
import './Offer.css';

interface OfferProps {
  title: string;
  img: string;
  btnText: string;
  link: string;
}

const Offers = ({ title, img, btnText, link }: OfferProps) => {
  return (
    <div className='offer'>
      <h2 className='offer__title'>{title}</h2>
      <img src={img} alt={title} className='offer__img' />
      <Link to={link} className='offer__btn'>
        {btnText}
      </Link>
    </div>
  );
};

export default Offers;
