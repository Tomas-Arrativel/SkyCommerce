import { FaSearch } from 'react-icons/fa';

import './Search.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Search = () => {
  const [typed, setTyped] = useState<any>();
  const navigate = useNavigate();

  const handleInputChange = (e: any) => {
    setTyped(e.target.value);
  };

  const handleEnterPress = (e: any) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const handleSearch = () => {
    // redirect to SearchPage with the query
    navigate(`/search/${typed.toLowerCase()}`);
  };

  return (
    <div className='search'>
      <input
        className='search__input'
        type='text'
        placeholder='Search in SkyCommerce'
        onChange={(e) => handleInputChange(e)}
        onKeyDown={(e) => handleEnterPress(e)}
      />
      <button onClick={handleSearch} className='search__button'>
        <FaSearch />
      </button>
    </div>
  );
};

export default Search;
