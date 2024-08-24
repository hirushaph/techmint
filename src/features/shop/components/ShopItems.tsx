import Product from '../../../components/Product';
import { ProductType } from '../../../types/types';

type ShopItemsProps = {
  products: ProductType[];
};

function ShopItems({ products }: ShopItemsProps) {
  return (
    <div>
      <div className='sort-by'>Sort By</div>
      <div className='grid grid-cols-4 gap-4'>
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default ShopItems;
