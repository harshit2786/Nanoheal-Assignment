import React, { useState } from 'react';
import { useMobileLayout } from '../moblayout/mob';

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('');
  const [keyword, setKeyword] = useState('');
  const isMobile = useMobileLayout();

  const handleSubmit = (e) => {
    setKeyword(query);
    e.preventDefault();
    onSearch(query);
  };

  return (
    <div className="my-4 w-full flex flex-col">
      <form className='flex flex-row justify-center items-center w-full' onSubmit={handleSubmit}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="  Search movies..."
          className={`p-4 m-2 bg-gray-600 hover:bg-gray-200 border rounded-full ${isMobile ? 'w-[80%]' : 'w-[40%]'}`}
        />
        <button type="submit" className="m-2 p-4 bg-[#17a2b8] text-white rounded-full">
          Search 
        </button>
      </form>
      {!(keyword === '') && <div>
      <h2 className="text-2xl text-white mt-3 mb-5 font-semibold">Results for: {keyword} </h2>
      <p className="text-base text-white mt-3 mb-5 font-semibold" >(Hover to read overview)</p>
        </div>}
    </div>
  );
}

export default SearchBar;