import Product from '../../../components/Product';
import { products } from '../../../data/constants';

function ShopItems() {
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
