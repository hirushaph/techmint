import { useParams } from 'react-router-dom';
import { ImageGallery } from '../features/product';
import { useQuery } from '@tanstack/react-query';
import { getSingleProduct } from '../services/api';
import Button from '../components/Button';
import SelectorSet from '../features/product/components/SelectorSet';

import StockSelector from '../features/product/components/StockSelector';
import ColorSelector from '../features/product/components/ColorSelector';
import DetailsTabs from '../features/product/components/DetailsTabs';
import Rate from 'rc-rate';
import 'rc-rate/assets/index.css';

function Product() {
  const { productId } = useParams();

  const { data: currentProduct, isLoading: productLoading } = useQuery({
    queryFn: () => getSingleProduct(productId || ''),
    queryKey: ['product'],
    enabled: !!productId,
  });

  return (
    <div className='container mx-auto px-4'>
      <div className='grid grid-cols-2'>
        <div className='left'>
          <ImageGallery />
        </div>
        <div className='right'>
          <p className='brand'>{currentProduct?.brand}</p>
          <h3 className='mb-4 text-3xl font-bold'>{currentProduct?.name}</h3>

          <p className='mb-2'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque
            possimus, molestiae eaque reprehenderit minus illo cumque
            consequatur placeat animi magnam. Hic minima vel repellat nulla, ab
            quasi libero reprehenderit officiis?
          </p>
          <div className='rating mb-2 flex items-center justify-start gap-4'>
            <Rate count={5} value={4} direction='ltr' />
            <span className='text-sm text-dark-500'>4.3/5</span>
          </div>

          <div className='discount-price mb-5'>
            <p className='retail-price font-s font-semibold text-gray-500 line-through'>
              1000$
            </p>
            <div className='discountedPrice'>
              <p className='discounted-price text-xl font-bold text-blue-500'>
                {currentProduct?.price} $
              </p>
            </div>
          </div>
          <SelectorSet />
          <ColorSelector className='mt-5' />
          <StockSelector />
          {/* TODO Code storage select box and color selectbox */}
          <Button>Add To Cart</Button>
        </div>
      </div>
      {/* Additional details */}
      <section className='addtional-details mt-14'>
        <DetailsTabs />
      </section>
    </div>
  );
}

export default Product;
