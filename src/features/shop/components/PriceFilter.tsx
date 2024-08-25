import { useDispatch } from 'react-redux';
import MultiSlider from './MultiSlider';
import SidebarWidget from './SidebarWidget';
import { setPriceRange } from '../../../redux/filterSlice';

function PriceFilter() {
  const dispatch = useDispatch();

  function handlePriceChange(priceRange: [number, number]) {
    dispatch(setPriceRange(priceRange));
  }
  return (
    <SidebarWidget title='Price'>
      <div className='mb-2 flex justify-between'>
        <p className='rounded-xl bg-blue-100 px-4 py-1'>
          <span className='text-sm' id='start-price'></span>
        </p>
        <p className='rounded-xl bg-blue-100 px-4 py-1'>
          <span className='text-sm' id='end-price'></span>
        </p>
      </div>
      <MultiSlider
        startEl='start-price'
        endEl='end-price'
        name='hellox'
        min={100}
        max={8000}
        step={0.1}
        onPriceChange={handlePriceChange}
      />
    </SidebarWidget>
  );
}

export default PriceFilter;
