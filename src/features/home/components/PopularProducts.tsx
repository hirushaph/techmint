import Heading from '../../../components/Heading';
import Product from '../../../components/Product';
import { products } from '../../../data/constants';

const updatedProducts = products.slice(0, 4);

function PopularProducts() {
  return (
    <section className='my-16'>
      <Heading subtitle='our best selling products' title='popular products' />
      <div className='mt-6 grid grid-cols-2 gap-6 md:grid-cols-3 md:gap-16 lg:grid-cols-4'>
        {/* Products Grid */}
        {updatedProducts.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}

export default PopularProducts;
