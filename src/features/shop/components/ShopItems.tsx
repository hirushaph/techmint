import Product from '../../../components/Product';
import Spinner from '../../../components/Spinner';
import { AllProducts } from '../../../types/types';

type ShopItemsProps = {
  products: AllProducts;
  isProductLoading: boolean;
};

function ShopItems({ products, isProductLoading }: ShopItemsProps) {
  return (
    <div>
      <div className='sort-by mb-4 flex w-full justify-between py-2 pr-8'>
        <p>Home / Shop</p>
        <select
          name='sort-filter'
          className='border-1 border-dark-200 px-2 py-1 text-sm shadow-sm outline-none'
          id=''
        >
          <option value='offers'>Sort by latest</option>
          <option value='newest'>Sort by popular</option>
          <option value='Price low to high'>Sort by Price: low-high</option>
          <option value='Price high to low'>Sort by Pirce: high-low</option>
        </select>
      </div>

      {isProductLoading && (
        <div className='notify-area mt-4 flex justify-center'>
          <Spinner /> <span>Loading...</span>
        </div>
      )}

      <div className='grid grid-cols-4 gap-4'>
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default ShopItems;
