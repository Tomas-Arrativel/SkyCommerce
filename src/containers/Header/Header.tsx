import { Categories, Navbar } from '../../components/exports';

const Header = () => {
  return (
    <header className='header'>
      <Navbar />
      <Categories />
    </header>
  );
};

export default Header;
