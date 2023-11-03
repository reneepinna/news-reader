import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SearchBar.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

export default function SearchBar() {
  const [searchQuery, setSearchQuery] = useState();
  const navigate = useNavigate();

  return (
    <form
      className='form'
      onSubmit={e => {
        e.preventDefault();
        navigate(`/search/${searchQuery}`);
      }}
    >
      <input
        className='search'
        type='search'
        value={searchQuery}
        onChange={e => setSearchQuery(e.target.value)}
      />
      <button className='search-btn'>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </button>
    </form>
  );
}
