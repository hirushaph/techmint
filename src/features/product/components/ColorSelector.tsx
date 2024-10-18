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

type ColorSelectorProps = {
  className?: string;
};

function ColorSelector({ className = '' }: ColorSelectorProps) {
  const [selectedColor, setSelectedColor] = useState<number | null>(null);
  return (
    <div className={`color-selector ${className}`}>
      <h4 className='text-sm uppercase text-dark-400'>Color</h4>
      <div className='mt-2 flex gap-2'>
        {colors.map((color) => (
          <span
            style={{ backgroundColor: color.hex }}
            className={`h-7 w-7 cursor-pointer rounded-full transition hover:ring ${
              selectedColor === color.code
                ? 'ring-2 ring-blue-500 ring-offset-1'
                : ''
            }`}
            onClick={() => setSelectedColor(color.code)}
          ></span>
        ))}
      </div>
    </div>
  );
}

export default ColorSelector;
