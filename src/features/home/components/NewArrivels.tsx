import { useState } from 'react';
import Product from '../../../components/Product';
import { useQuery } from '@tanstack/react-query';
import { getFilterdProducts } from '../../../services/api';
import Spinner from '../../../components/Spinner';

function NewArrivels() {
  const [category, setCategory] = useState('all');

  const { data: filterdProducts, isLoading } = useQuery({
    queryFn: () => getFilterdProducts(category),
    queryKey: ['newarrivels', category],
  });

  function handleCategoryChange(cat: string) {
    setCategory(cat);
  }
  return (
    <section className='my-12'>
      <div className='header-bar flex items-center justify-between border-b-2 py-4'>
        <h2
          className='text-md mr-12 cursor-pointer uppercase hover:text-blue-400 lg:text-xl'
          onClick={() => handleCategoryChange('all')}
        >
          New Arrivels
        </h2>
        <ul className={`hidden flex-1 items-center gap-8 lg:flex`}>
          <li
            className={`${category === '001' ? 'text-blue-500' : ''} cursor-pointer hover:text-blue-600`}
            onClick={() => handleCategoryChange('001')}
          >
            Phones
          </li>
          <li
            className={`${category === '006' ? 'text-blue-500' : ''} cursor-pointer hover:text-blue-600`}
            onClick={() => handleCategoryChange('006')}
          >
            Smartwatches
          </li>
          <li
            className={`${category === '002' ? 'text-blue-500' : ''} cursor-pointer hover:text-blue-600`}
            onClick={() => handleCategoryChange('002')}
          >
            Accessories
          </li>
        </ul>
        <select id='products' className='lg:hidden'>
          <option value='phones'>Phones</option>
          <option value='tablets'>Smartwatches</option>
          <option value='accessories'>Accessories</option>
        </select>
        <button className='border border-blue-500 px-3 py-1 text-sm text-blue-600'>
          View more
        </button>
      </div>

      {/* Products Grid */}
      <div className='lg:h-[310px]'>
        {isLoading && <Spinner className='h-[100%]' />}
        {filterdProducts && (
          <div className='mt-12 grid grid-cols-2 gap-8 lg:grid-cols-5'>
            {filterdProducts.map((product) => (
              <Product key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default NewArrivels;
