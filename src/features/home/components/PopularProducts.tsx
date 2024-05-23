import Heading from '../../../components/Heading';
import Product from '../../../components/Product';
import { products } from '../../../data/constants';

function PopularProducts() {
  return (
    <section className='my-16'>
      <Heading subtitle='our best selling products' title='popular products' />
      <div className='mt-6 grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-16'>
        {/* Products Grid */}
        {products.map((product) => (
          <Product product={product} />
        ))}
      </div>
    </section>
  );
}

export default PopularProducts;
