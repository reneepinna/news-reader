import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SearchBar() {
  const [searchQuery, setSearchQuery] = useState();
  const navigate = useNavigate()

  function formatSearchQuery() {
    
  }

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        // go to search page with the query as param? then pull up the search results
        navigate(`/search?q=${searchQuery}`)
      }}
    >
      <input
        type='search'
        value={searchQuery}
        onChange={e => setSearchQuery(e.target.value)}
      />
    </form>
  );
}
