function Search() {
  return (
    <div className='search-container'>
      <input
        type='search'
        placeholder='Search Product'
        className='w-[400px] rounded-md border border-blue-200 px-4 py-1.5  outline-none transition hover:shadow-sm hover:shadow-blue-100 focus:border-blue-400'
      />
    </div>
  );
}

export default Search;
