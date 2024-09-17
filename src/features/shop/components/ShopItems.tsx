import Product from '../../../components/Product';
import Spinner from '../../../components/Spinner';
import { ProductType } from '../../../types/types';

type ShopItemsProps = {
  products: ProductType[];
  isProductLoading: boolean;
};

function ShopItems({ products, isProductLoading }: ShopItemsProps) {
  return (
    <div>
      <div className='sort-by mb-4 flex w-full justify-between py-2 pr-8'>
        <p>Home/Shop</p>
        <select name='sort-filter' className='outline-none' id=''>
          <option value='Price low to high'>Price low-high</option>
          <option value='Price high to low'>Price high-low</option>
          <option value='newest'>Newest</option>
          <option value='offers'>Offers</option>
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
