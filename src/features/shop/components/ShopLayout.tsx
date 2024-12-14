import ShopItems from './ShopItems';
import Sidebar from './Sidebar';
import { useQuery } from '@tanstack/react-query';
import { getAllProducts } from '../../../services/api';
import { AllProducts } from '../../../types/types';
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

  const selectedBrand = useSelector(
    (state: RootStateType) => state.filter.selectedBrand
  );

  const { data: products, isLoading: isProductLoading } = useQuery<AllProducts>(
    {
      queryFn: () => getAllProducts(),
      queryKey: ['products'],
    }
  );

  const filterdProducts = products?.filter((product) => {
    if (!priceRange) return true;

    const categoryFilter =
      !selectedCategories.length ||
      product.categories?.some((category) =>
        selectedCategories.includes(category)
      );
    const priceFilter =
      product.price >= priceRange[0] && product.price <= priceRange[1];
    const brandFilter = !selectedBrand || product.brand === selectedBrand;

    return categoryFilter && priceFilter && brandFilter;
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
