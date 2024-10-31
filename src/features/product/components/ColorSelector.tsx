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

type Color = {
  color: string;
  hex: string;
};

type ColorSelectorProps = {
  className?: string;
  color: Color[];
  setSelectedColor: React.Dispatch<React.SetStateAction<string | null>>;
  selectedColor: string | null;
};

function ColorSelector({
  className = '',
  color,
  selectedColor,
  setSelectedColor,
}: ColorSelectorProps) {
  return (
    <div className={`color-selector ${className}`}>
      <h4 className='text-sm uppercase text-dark-400'>Color</h4>
      <div className='mt-2 flex gap-2'>
        {color.map((color) => (
          <span
            key={color.hex}
            style={{ backgroundColor: color.hex }}
            className={`h-7 w-7 cursor-pointer rounded-full transition hover:ring ${
              selectedColor === color.hex
                ? 'ring-2 ring-blue-500 ring-offset-1'
                : ''
            }`}
            onClick={() => setSelectedColor(color.hex)}
          ></span>
        ))}
      </div>
    </div>
  );
}

export default ColorSelector;
