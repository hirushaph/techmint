import { motion } from 'framer-motion';
import { createPortal } from 'react-dom';
import { IoClose } from 'react-icons/io5';
import { SingleProduct } from '../types/types';
import { calculateDisountPrice, isArrayUndefined } from '../utils/helpers';
import ColorSelector from '../features/product/components/ColorSelector';
import StockSelector from '../features/product/components/StockSelector';
import Button from './Button';
import { useEffect, useMemo, useState } from 'react';
import useProductFilter from '../hooks/useProductFilter';
import SelectorSet from '../features/product/components/SelectorSet';

type QuickViewProps = {
  onClose: React.Dispatch<React.SetStateAction<boolean>>;
  product: SingleProduct;
};

type QuickViewContainerProps = {
  children: React.ReactNode;
};

function QuickViewContainer({ children }: QuickViewContainerProps) {
  return (
    <motion.div
      exit={{ opacity: 0 }}
      className={`fixed left-0 top-0 z-50 flex h-[100vh] w-full items-center justify-center bg-lightDark backdrop-blur-md`}
    >
      {children}
    </motion.div>
  );
}

function QuickView({ onClose, product }: QuickViewProps) {
  const { color: selectedColor, storage: selectedStorage } = useProductFilter();
  const [selectedVarient, setSelectedVarient] = useState<any | null>(null);

  const storage = useMemo(() => {
    return [...new Set(product?.variants.map((item) => item.storage))];
  }, [product?.variants]);
  console.log(storage.length);

  const colors = [
    ...new Set(
      product?.variants.map((item) => {
        return { color: item.color, hex: item.hex };
      })
    ),
  ];

  useEffect(() => {
    function isStockAvailable() {
      if (selectedColor && selectedStorage) {
        const variant = product?.variants.find(
          (item) =>
            item.hex === selectedColor && item.storage === selectedStorage
        );
        setSelectedVarient(variant || null);
      } else if (isArrayUndefined(storage)) {
        const variant = product?.variants.find(
          (item) => item.hex === selectedColor
        );
        setSelectedVarient(variant || null);
      } else {
        setSelectedVarient(null);
      }
    }
    isStockAvailable();
  }, [selectedColor, selectedStorage, product, storage]);

  return createPortal(
    <QuickViewContainer>
      <motion.div className='quickview-animation z-50 rounded-3xl bg-dark-50 p-4 shadow-lg'>
        <div className='relative h-[440px] w-[820px] overflow-x-hidden overflow-y-scroll'>
          <button onClick={() => onClose(false)} className='absolute right-0'>
            <IoClose className='text-xl' />
          </button>
          <div className='mx-auto my-0 grid grid-cols-2'>
            <img
              src={selectedVarient?.images[0] || product?.image}
              alt={product.slug}
            />

            <div className='py-4'>
              <h1 className='text-xl font-semibold'>{product.name}</h1>
              <p className='text-md mt-3 font-bold text-blue-600'>
                {calculateDisountPrice(
                  selectedVarient?.price || product.price,
                  product.discount
                )}{' '}
                $
              </p>
              <p className='text-md mb-3 mt-4 text-gray-700'>
                {product.description}
              </p>
              {!isArrayUndefined(storage) && <SelectorSet storage={storage} />}
              <ColorSelector className='mt-5' color={colors} />
              <StockSelector selectedVarient={selectedVarient} />

              <Button disabled={selectedVarient ? false : true}>
                Add To Cart
              </Button>
            </div>
          </div>
        </div>
      </motion.div>
    </QuickViewContainer>,
    document.body
  );
}

export default QuickView;
