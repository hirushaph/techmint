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
      <div className='sort-by'>Sort By</div>

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
