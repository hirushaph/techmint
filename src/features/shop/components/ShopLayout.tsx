import ShopItems from './ShopItems';
import Sidebar from './Sidebar';
import { useQuery } from '@tanstack/react-query';
import { getAllProducts } from '../../../services/api';
import { ProductType } from '../../../types/types';
import { useSelector } from 'react-redux';
import { RootStateType } from '../../../redux/store';

function ShopLayout() {
  // const [priceRange, setPriceRange] = useState<[number, number] | null>(null);

  const priceRange = useSelector(
    (state: RootStateType) => state.filter.priceRange
  );

  // selected categories = [1,3,4,56,64,9]

  const selectedCategories = useSelector(
    (state: RootStateType) => state.filter.selectedCategory
  );

  const { data: products, isLoading: isProductLoading } = useQuery<
    ProductType[]
  >({
    queryFn: () => getAllProducts(),
    queryKey: ['products'],
  });

  const filterdProducts = products?.filter((product) => {
    if (!priceRange) return true;

    const categoryFilter =
      !selectedCategories.length || selectedCategories.includes(product.id);
    const priceFilter =
      product.price >= priceRange[0] && product.price <= priceRange[1];

    return categoryFilter && priceFilter;
  });

  return (
    <section>
      <div className='container mx-auto px-4 pt-6'>
        <div className='grid grid-cols-custom-shop gap-12'>
          <Sidebar />
          <ShopItems
            products={filterdProducts ?? []}
            isProductLoading={isProductLoading}
          />
        </div>
      </div>
    </section>
  );
}

export default ShopLayout;
