import useProductFilter from '../../../hooks/useProductFilter';

type Color = {
  color: string;
  hex: string;
};

type ColorSelectorProps = {
  className?: string;
  color: Color[];
};

function ColorSelector({ className = '', color }: ColorSelectorProps) {
  const { color: selectedColor, setProductFilters } = useProductFilter();
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
            onClick={() => setProductFilters({ color: color.hex })}
          ></span>
        ))}
      </div>
    </div>
  );
}

export default ColorSelector;
