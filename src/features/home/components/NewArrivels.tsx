import Product from '../../../components/Product';
import { products } from '../../../data/constants';

function NewArrivels() {
  return (
    <section className='my-12'>
      <div className='header-bar flex items-center justify-between border-b-2 py-4'>
        <h2 className='text-md mr-12 uppercase lg:text-xl'>New Arrivels</h2>
        <ul className='hidden flex-1 items-center gap-8 lg:flex'>
          <li className='cursor-pointer hover:text-blue-600'>Phones</li>
          <li>Smartwatches</li>
          <li>Accessories</li>
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
      <div className='mt-12 grid grid-cols-2 gap-8 lg:grid-cols-5'>
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}

export default NewArrivels;
