import MultiSlider from './MultiSlider';
import SidebarWidget from './SidebarWidget';

function PriceFilter() {
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
        min={10000}
        max={800000}
        step={0.1}
      />
    </SidebarWidget>
  );
}

export default PriceFilter;
