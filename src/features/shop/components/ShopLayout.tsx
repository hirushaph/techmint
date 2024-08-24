import ShopItems from './ShopItems';
import Sidebar from './Sidebar';
import { useQuery } from '@tanstack/react-query';
import { getAllProducts } from '../../../services/api';
import { ProductType } from '../../../types/types';
import { useState } from 'react';

function ShopLayout() {
  const [priceRange, setPriceRange] = useState<[number, number] | null>(null);

  const { data: products, isLoading: isProductLoading } = useQuery<
    ProductType[]
  >({
    queryFn: () => getAllProducts(),
    queryKey: ['products'],
  });

  // Handle Filters

  function handlePriceChange(newPriceRange: [number, number]) {
    setPriceRange(newPriceRange);
  }

  const filterdProducts = products?.filter((product) => {
    if (!priceRange) return true;

    return product.price >= priceRange[0] && product.price <= priceRange[1];
  });

  return (
    <section>
      <div className='container mx-auto px-4 pt-6'>
        <div className='grid grid-cols-custom-shop gap-12'>
          <Sidebar onPriceChange={handlePriceChange} />
          <ShopItems products={filterdProducts ?? []} />
        </div>
      </div>
    </section>
  );
}

export default ShopLayout;
