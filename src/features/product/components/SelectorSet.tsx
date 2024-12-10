import useProductFilter from '../../../hooks/useProductFilter';

// const data = [
//   { id: 1, name: '128GB' },
//   { id: 2, name: '256GB' },
//   { id: 3, name: '512GB' },
//   { id: 4, name: '1TB' },
// ];

type SelectorSetProps = {
  storage: string[];
};

function SelectorSet({ storage }: SelectorSetProps) {
  const { storage: selectedStorage, setProductFilters } = useProductFilter();
  function handleSelctedItem(id: string) {
    setProductFilters({ storage: id });
  }

  return (
    <div>
      <h4 className='mb-2 text-sm uppercase text-dark-400'>Storage</h4>
      {storage.map((item) => (
        <span
          key={item}
          className={`mr-2 cursor-pointer rounded-md border px-2 py-1 transition hover:border-dark-700 hover:shadow-md ${selectedStorage === item ? `border-blue-600` : ''}`}
          onClick={() => handleSelctedItem(item)}
        >
          {item}
        </span>
      ))}
    </div>
  );
}

export default SelectorSet;
