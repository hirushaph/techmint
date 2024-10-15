import { useState } from 'react';

const colors = [
  {
    hex: '#111',
    name: 'Black',
    code: 1,
  },
  {
    hex: '#cc3e1f',
    name: 'Red',
    code: 2,
  },
];

function ColorSelector() {
  const [selectedColor, setSelectedColor] = useState<number | null>(null);
  return (
    <div className='color-selector flex gap-2'>
      {colors.map((color) => (
        <span
          style={{ backgroundColor: color.hex }}
          className={`h-7 w-7 rounded-full transition hover:ring ${
            selectedColor === color.code ? 'ring-2 ring-blue-500' : ''
          }`}
          onClick={() => setSelectedColor(color.code)}
        ></span>
      ))}
    </div>
  );
}

export default ColorSelector;
