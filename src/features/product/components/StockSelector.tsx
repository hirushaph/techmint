import { useState } from 'react';
import { HiMinusSm, HiPlusSm } from 'react-icons/hi';

function StockSelector() {
  const [itemCount, setItemCount] = useState<number>(1);
  const maxStock = 200;

  function increseItems() {
    if (itemCount < maxStock) {
      setItemCount(itemCount + 1);
    }
  }
  function descreaseItems() {
    if (itemCount > 1) {
      setItemCount(itemCount - 1);
    }
  }
  return (
    <div className='stock-selecter mb-8 mt-4 flex h-8'>
      <button className='border px-2' onClick={descreaseItems}>
        <HiMinusSm />
      </button>
      <input
        type='number'
        name='stock'
        className='no-spinner w-10 bg-dark-200 text-center outline-2'
        value={itemCount}
      />
      <button className='border px-2' onClick={increseItems}>
        <HiPlusSm />
      </button>
      <p className='avalibility ml-4 font-medium text-green-500'>
        200 in stock
      </p>
    </div>
  );
}

export default StockSelector;
