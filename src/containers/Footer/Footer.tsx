import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className='footer'>
      <h2 className='footer__title'>
        Sky<span>Commerce</span>
      </h2>

      <div className='footer__links-container'>
        <ul className='footer__links'>
          <Link to='/category/technology'>
            <li>Technology</li>
          </Link>
          <Link to='/category/men'>
            <li>Men</li>
          </Link>
          <Link to='/category/women'>
            <li>Women</li>
          </Link>
          <Link to='/category/accessories'>
            <li>Accessories</li>
          </Link>
        </ul>
        <ul className='footer__links'>
          <Link to='/category/decorations'>
            <li>Decorations</li>
          </Link>
          <Link to='/category/hygiene'>
            <li>Hygiene</li>
          </Link>
          <Link to='/category/transport'>
            <li>Transport</li>
          </Link>
          <Link to='/category/lighting'>
            <li>Lighting</li>
          </Link>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
