import { useNavigate, useParams } from 'react-router-dom';
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
import { useEffect, useMemo, useState } from 'react';
import useProductFilter from '../hooks/useProductFilter';
import Spinner from '../components/Spinner';
import Breadcrumbs from '../components/Breadcrumbs';
import { calculateDisountPrice, isArrayUndefined } from '../utils/helpers';
import AddToCart from '../components/AddToCart';

function Product() {
  const { color: selectedColor, storage: selectedStorage } = useProductFilter();
  const [selectedVarient, setSelectedVarient] = useState<any | null>(null);
  const [itemCount, setItemCount] = useState<number>(1);
  const { productId } = useParams();

  const navigate = useNavigate();

  const { data: currentProduct, isLoading } = useQuery({
    queryFn: () => getSingleProduct(productId || ''),
    queryKey: ['product', productId],
    enabled: !!productId,
  });

  console.log(selectedVarient);

  const storage = useMemo(() => {
    return [...new Set(currentProduct?.variants.map((item) => item.storage))];
  }, [currentProduct?.variants]);
  console.log(storage.length);

  const colors = [
    ...new Set(
      currentProduct?.variants.map((item) => {
        return { color: item.color, hex: item.hex };
      })
    ),
  ];

  useEffect(() => {
    if (!isLoading && !currentProduct) {
      navigate('/404'); // Redirect to 404 page if product is not found
    }
  }, [currentProduct, isLoading, navigate]);

  useEffect(() => {
    function isStockAvailable() {
      if (selectedColor && selectedStorage) {
        const variant = currentProduct?.variants.find(
          (item) =>
            item.hex === selectedColor && item.storage === selectedStorage
        );
        setSelectedVarient(variant || null);
      } else if (isArrayUndefined(storage)) {
        console.log('hello');
        const variant = currentProduct?.variants.find(
          (item) => item.hex === selectedColor
        );
        setSelectedVarient(variant || null);
      } else {
        setSelectedVarient(null);
      }
    }
    isStockAvailable();
  }, [selectedColor, selectedStorage, currentProduct, storage]);

  if (isLoading) return <Spinner />;

  return (
    <div className='container mx-auto mt-4 px-4'>
      <div className='grid grid-cols-2'>
        <div className='left'>
          {currentProduct && (
            <ImageGallery
              currentProduct={currentProduct}
              selectedVarient={selectedVarient}
            />
          )}
        </div>
        <div className='right'>
          <div className='mb-2 py-1'>
            <Breadcrumbs />
          </div>
          <p className='brand'>{currentProduct?.brand}</p>
          <h3 className='mb-4 text-3xl font-bold'>{currentProduct?.name}</h3>

          <p className='mb-2'>{currentProduct?.description}</p>
          <div className='rating mb-2 flex items-center justify-start gap-4'>
            <Rate count={5} direction='ltr' />

            <span className='text-sm text-dark-500'>
              {Number(currentProduct?.rating)}/5
            </span>
          </div>

          <div className='discount-price mb-5'>
            <p className='retail-price font-s font-semibold text-gray-500 line-through'>
              {selectedVarient?.price || currentProduct?.price}
            </p>
            <div className='discountedPrice'>
              <p className='discounted-price text-xl font-bold text-blue-500'>
                {calculateDisountPrice(
                  selectedVarient?.price || currentProduct?.price,
                  currentProduct?.discount
                )}{' '}
                $
              </p>
            </div>
          </div>
          {!isArrayUndefined(storage) && <SelectorSet storage={storage} />}

          <ColorSelector className='mt-5' color={colors} />
          <StockSelector
            selectedVarient={selectedVarient}
            itemCount={itemCount}
            setItemCount={setItemCount}
          />
          {/* TODO Code storage select box and color selectbox */}
          <AddToCart
            product={currentProduct}
            selectedVarient={selectedVarient}
            quantity={itemCount}
          >
            Add To Cart
          </AddToCart>
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
