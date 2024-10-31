import { ChangeEvent, useState } from 'react';
import { HiMinusSm, HiPlusSm } from 'react-icons/hi';

type StockSelecterProps = {
  selectedVarient: any;
};

function StockSelector({ selectedVarient }: StockSelecterProps) {
  const [itemCount, setItemCount] = useState<number>(1);
  const maxStock = selectedVarient?.stock;

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
  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    const value = Math.max(1, Math.min(maxStock, Number(event.target.value)));
    setItemCount(value);
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
        onChange={handleInputChange}
      />
      <button className='border px-2' onClick={increseItems}>
        <HiPlusSm />
      </button>
      <p
        className={`avalibility ml-4 font-medium ${selectedVarient ? 'text-green-500' : 'text-red-600'} `}
      >
        {selectedVarient ? selectedVarient?.stock + ' left' : 'out of stock'}
      </p>
    </div>
  );
}

export default StockSelector;
