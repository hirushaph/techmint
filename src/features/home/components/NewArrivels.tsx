import Product from '../../../components/Product';
import { products } from '../../../data/constants';

function NewArrivels() {
  return (
    <section className='my-12'>
      <div className='header-bar flex justify-between border-b-2 py-4'>
        <h2 className='mr-12 text-xl uppercase'>New Arrivels</h2>
        <ul className='flex flex-1 items-center gap-8'>
          <li className='cursor-pointer hover:text-blue-600'>Phones</li>
          <li>Tablets</li>
          <li>Accessories</li>
        </ul>
        <button className='border border-blue-500 px-3 py-1 text-sm text-blue-600'>
          View more
        </button>
      </div>

      {/* Products Grid */}
      <div className='mt-12 grid grid-cols-5 gap-8'>
        {products.map((product) => (
          <Product product={product} />
        ))}
      </div>
    </section>
  );
}

export default NewArrivels;
