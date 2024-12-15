import { useQuery } from '@tanstack/react-query';
import Heading from '../../../components/Heading';
import { getPopularProducts } from '../../../services/api';
import Spinner from '../../../components/Spinner';
import Product from '../../../components/Product';

function PopularProducts() {
  const { data: popularProducts, isLoading: loading } = useQuery({
    queryFn: () => getPopularProducts(),
    queryKey: ['popular'],
  });
  return (
    <section className='my-16'>
      <Heading subtitle='our best selling products' title='popular products' />
      <div className='lg:h-[370px]'>
        {loading && <Spinner className='h-[100%]' />}
        <div className='mt-6 grid grid-cols-2 gap-6 md:grid-cols-3 md:gap-16 lg:grid-cols-4'>
          {/* Products Grid */}

          {popularProducts &&
            popularProducts.map((product) => (
              <Product key={product.id} product={product} />
            ))}
        </div>
      </div>
    </section>
  );
}

export default PopularProducts;
