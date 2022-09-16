import React from 'react';

function Search({ onSearch }) {
  return (
    <>
      {!onSearch && <div className='p-4 font-semibold text-xl'>Trends</div>}
      {onSearch && (
        <div className='text-center text-sm font-semibold mt-6'>
          Try searching for people, topics or keywords
        </div>
      )}
    </>
  );
}

export default Search;
