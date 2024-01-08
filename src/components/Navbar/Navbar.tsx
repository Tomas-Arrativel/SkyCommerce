import './Navbar.css';

const Navbar = () => {
  return (
    <nav className='nav'>
      <h1 className='nav__title'>
        Sky<span>Commerce</span>
      </h1>
      <input
        className='nav__search'
        type='text'
        placeholder='Search in SkyCommerce'
      />
      <p className='nav__chart'>Chart</p>
    </nav>
  );
};

export default Navbar;
