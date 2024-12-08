import { useQuery } from '@tanstack/react-query';
import SidebarWidget from './SidebarWidget';
import { Brands, getBrands } from '../../../services/api';
import { useDispatch, useSelector } from 'react-redux';
import { setBrand } from '../../../redux/filterSlice';
import { RootStateType } from '../../../redux/store';

function BrandsFilter() {
  const dispatch = useDispatch();
  const { data: brands } = useQuery<Brands[]>({
    queryFn: () => getBrands(),
    queryKey: ['brands'],
  });

  const selectedBrand = useSelector(
    (state: RootStateType) => state.filter.selectedBrand
  );

  function handleBrandClick(id: string) {
    dispatch(setBrand(id));
  }

  return (
    <SidebarWidget title='Brands'>
      <div className='flex flex-wrap gap-4'>
        {brands?.map((brand) => (
          <div
            key={brand.id}
            className={`w-[25%] cursor-pointer overflow-hidden rounded-md border shadow-sm transition ${selectedBrand === brand.name ? 'border-blue-600 shadow-blue-300' : ''}`}
            onClick={() => handleBrandClick(brand.name)}
          >
            <img
              src={brand.image}
              alt=''
              width='100%'
              className='transition hover:scale-110'
            />
          </div>
        ))}
      </div>
    </SidebarWidget>
  );
}

export default BrandsFilter;
