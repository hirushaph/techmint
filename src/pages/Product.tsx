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
import { useEffect, useState } from 'react';

function Product() {
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const [selectedVarient, setSelectedVarient] = useState<any | null>(null);
  const { productId } = useParams();

  const { data: currentProduct, isLoading: productLoading } = useQuery({
    queryFn: () => getSingleProduct(productId || ''),
    queryKey: ['product'],
    enabled: !!productId,
  });

  const storage = [
    ...new Set(currentProduct?.variants.map((item) => item.storage)),
  ];

  const colors = [
    ...new Set(
      currentProduct?.variants.map((item) => {
        return { color: item.color, hex: item.hex };
      })
    ),
  ];
  useEffect(() => {
    function isStockAvailable() {
      if (selectedColor && selectedItem) {
        const variant = currentProduct?.variants.find(
          (item) => item.hex === selectedColor && item.storage === selectedItem
        );
        setSelectedVarient(variant || null);
      } else {
        setSelectedVarient(null);
      }
    }
    isStockAvailable();
  }, [selectedColor, selectedItem, currentProduct]);

  return (
    <div className='container mx-auto px-4'>
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
          <p className='brand'>{currentProduct?.brand}</p>
          <h3 className='mb-4 text-3xl font-bold'>{currentProduct?.name}</h3>

          <p className='mb-2'>{currentProduct?.description}</p>
          <div className='rating mb-2 flex items-center justify-start gap-4'>
            <Rate
              count={5}
              // value={Number(currentProduct?.rating)}
              direction='ltr'
            />
            <span className='text-sm text-dark-500'>
              {Number(currentProduct?.rating)}/5
            </span>
          </div>

          <div className='discount-price mb-5'>
            <p className='retail-price font-s font-semibold text-gray-500 line-through'>
              {currentProduct?.price}
            </p>
            <div className='discountedPrice'>
              <p className='discounted-price text-xl font-bold text-blue-500'>
                {currentProduct?.discount} $
              </p>
            </div>
          </div>
          <SelectorSet
            storage={storage}
            setSelectedItem={setSelectedItem}
            selectedItem={selectedItem}
          />
          <ColorSelector
            className='mt-5'
            color={colors}
            selectedColor={selectedColor}
            setSelectedColor={setSelectedColor}
          />
          <StockSelector selectedVarient={selectedVarient} />
          {/* TODO Code storage select box and color selectbox */}
          <Button disabled={selectedVarient ? false : true}>Add To Cart</Button>
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
