import { useEffect, useState } from 'react';
import { Search, ShoppingCart } from '../../components/exports';

import './Navbar.css';
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
        <h1 className='nav__title'>
          Sky<span>Commerce</span>
        </h1>
        {!isMobile ? <Search /> : null}
        <ShoppingCart />
      </nav>
      {isMobile ? <Search /> : null}
    </div>
  );
};

export default Navbar;
