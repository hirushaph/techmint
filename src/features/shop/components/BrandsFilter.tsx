import { useQuery } from '@tanstack/react-query';
import SidebarWidget from './SidebarWidget';
import { Brands, getBrands } from '../../../services/api';

function BrandsFilter() {
  const { data: brands } = useQuery<Brands[]>({
    queryFn: () => getBrands(),
    queryKey: ['brands'],
  });

  return (
    <SidebarWidget title='Brands'>
      <div className='flex flex-wrap gap-4'>
        {brands?.map((brand) => (
          <div
            key={brand.id}
            className='w-[25%] cursor-pointer overflow-hidden rounded-md border shadow-sm'
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
