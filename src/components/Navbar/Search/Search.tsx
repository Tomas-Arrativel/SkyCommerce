import { FaSearch } from 'react-icons/fa';

import './Search.css';

const Search = () => {
  return (
    <div className='search'>
      <input
        className='search__input'
        type='text'
        placeholder='Search in SkyCommerce'
      />
      <button className='search__button'>
        <FaSearch />
      </button>
    </div>
  );
};

export default Search;
