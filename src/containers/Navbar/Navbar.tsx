import { Search, ShoppingCart } from '../../components/exports';

import './Navbar.css';

const Navbar = () => {
  return (
    <nav className='nav'>
      <h1 className='nav__title'>
        Sky<span>Commerce</span>
      </h1>
      <Search />
      <ShoppingCart />
    </nav>
  );
};

export default Navbar;
