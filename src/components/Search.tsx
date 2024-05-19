import { GoSearch } from 'react-icons/go';

function Search() {
  return (
    <div className='search-container relative'>
      <input
        type='search'
        placeholder='Search Product'
        className='w-[400px] rounded-md border border-blue-200 bg-dark-50  px-4 py-1.5 outline-none transition-shadow duration-300 hover:shadow-sm hover:shadow-blue-100 hover:ease-in-out focus:border-blue-400 focus:transition dark:border-none dark:bg-dark-200 dark:hover:shadow-dark-200'
      />

      <span className='absolute right-3 top-1/2  translate-y-[-50%]'>
        <GoSearch className='text-xl text-dark-500' />
      </span>
    </div>
  );
}

export default Search;
