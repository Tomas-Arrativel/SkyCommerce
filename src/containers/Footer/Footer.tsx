import './Footer.css';

const Footer = () => {
  return (
    <footer className='footer'>
      <h2 className='footer__title'>
        Sky<span>Commerce</span>
      </h2>

      <div className='footer__links-container'>
        <ul className='footer__links'>
          <a href='#'>
            <li>Technology</li>
          </a>
          <a href='#'>
            <li>Clothes</li>
          </a>
          <a href='#'>
            <li>Groceries</li>
          </a>
          <a href='#'>
            <li>Decoration</li>
          </a>
        </ul>
        <ul className='footer__links'>
          <a href='#'>
            <li>Furnitures</li>
          </a>
          <a href='#'>
            <li>Cars</li>
          </a>
          <a href='#'>
            <li>Motorcycles</li>
          </a>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
