import { useParams } from 'react-router-dom';
import { ImageGallery } from '../features/product';
import { useQuery } from '@tanstack/react-query';
import { getSingleProduct } from '../services/api';
import Button from '../components/Button';
import SelectorSet from '../features/product/components/SelectorSet';
import { HiMinusSm, HiPlusSm } from 'react-icons/hi';
import StockSelector from '../features/product/components/StockSelector';
import ColorSelector from '../features/product/components/ColorSelector';

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
          <p className='mb-5'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque
            possimus, molestiae eaque reprehenderit minus illo cumque
            consequatur placeat animi magnam. Hic minima vel repellat nulla, ab
            quasi libero reprehenderit officiis?
          </p>
          <div className='discount-price mb-5 flex items-center justify-start gap-4'>
            <p className='discounted-price text-xl font-bold text-blue-500'>
              {currentProduct?.price} $
            </p>
            <p className='retail-price font-s font-semibold text-gray-600 line-through'>
              1000$
            </p>
            <span className='discount-percentage text-blue-600'>40%</span>
          </div>
          <SelectorSet />
          <ColorSelector />
          <StockSelector />

          {/* TODO Code storage select box and color selectbox */}
          <Button>Add To Cart</Button>
        </div>
      </div>
    </div>
  );
}

export default Product;
