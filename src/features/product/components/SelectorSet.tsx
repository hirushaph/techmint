import { useState } from 'react';

const data = [
  { id: 1, name: '128GB' },
  { id: 2, name: '256GB' },
  { id: 3, name: '512GB' },
  { id: 4, name: '1TB' },
];

function SelectorSet() {
  const [selectedItem, setSelectedItem] = useState<number | null>(null);

  function handleSelctedItem(id: number) {
    setSelectedItem(id);
  }

  return (
    <div>
      {data.map((item) => (
        <span
          className={`mr-2 cursor-pointer rounded-md border px-2 py-1 transition hover:border-dark-700 hover:shadow-md ${selectedItem === item.id ? `border-blue-600` : ''}`}
          onClick={() => handleSelctedItem(item.id)}
        >
          {item.name}
        </span>
      ))}
    </div>
  );
}

export default SelectorSet;
