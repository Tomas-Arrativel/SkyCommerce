import { useEffect, useState } from 'react';
import { Search, ShoppingCart } from '../../components/exports';

import './Navbar.css';
import { Link } from 'react-router-dom';
const Navbar = () => {
  const [screenWidth, setScreenWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    // eventListener to window resize
    window.addEventListener('resize', handleResize);

    // clean eventListener when desmounting
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [screenWidth]); // is called every time screenWidth changes

  const isMobile = screenWidth <= 735;

  return (
    <div className='nav-container'>
      <nav className='nav'>
        <Link className='nav__link-style' to='/'>
          <h1 className='nav__title'>
            Sky<span>Commerce</span>
          </h1>
        </Link>
        {!isMobile ? <Search /> : null}
        <Link className='nav__link-style' to='/shopping-cart'>
          <ShoppingCart />
        </Link>
      </nav>
      {isMobile ? <Search /> : null}
    </div>
  );
};

export default Navbar;
