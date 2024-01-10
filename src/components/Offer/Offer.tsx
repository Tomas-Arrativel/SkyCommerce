import './Offer.css';

interface OfferProps {
  title: string;
  img: string;
  btnText: string;
}

const Offers = ({ title, img, btnText }: OfferProps) => {
  return (
    <div className='offer'>
      <h2 className='offer__title'>{title}</h2>
      <img src={img} alt={title} className='offer__img' />
      <a href='#' className='offer__btn'>
        {btnText}
      </a>
    </div>
  );
};

export default Offers;
