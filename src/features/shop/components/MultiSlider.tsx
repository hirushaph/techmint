import { useEffect, useState } from 'react';

type MultiSliderProps = {
  name: string;
  min: number;
  max: number;
  step?: number;
  startEl: string;
  endEl: string;
};

function MultiSlider({
  name,
  min,
  max,
  step,
  startEl,
  endEl,
}: MultiSliderProps) {
  const [startFrom, setStartFrom] = useState(min);
  const [end, setEnd] = useState(max);

  console.log(startFrom);

  useEffect(
    function () {
      const slider = document.getElementById(`${name}`);
      const startElement = document.getElementById(`${startEl}`);
      const endElement = document.getElementById(`${endEl}`);

      if (!slider) return;

      const startPercent = ((Number(startFrom) - min) / (max - min)) * 100;
      const endPercent = ((Number(end) - min) / (max - min)) * 100;

      slider.style.left = `${startPercent}%`;
      slider.style.right = `${100 - endPercent}%`;

      // Update elements
      if (startElement) {
        startElement.textContent = String(Math.round(startFrom));
      }
      if (endElement) {
        endElement.textContent = String(Math.round(end));
      }
    },
    [end, max, min, name, startFrom]
  );

  const handleStartFromChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    if (value <= end) {
      setStartFrom(value);
    }
  };

  const handleEndChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    if (value >= startFrom) {
      setEnd(value);
    }
  };

  return (
    <div>
      <div className='range-slider'>
        <span className='range-selected' id={name}></span>
      </div>
      <div className='range-input'>
        <input
          type='range'
          onChange={handleStartFromChange}
          min={min}
          max={max}
          step={step}
          value={startFrom}
        />
        <input
          type='range'
          onChange={handleEndChange}
          min={min}
          max={max}
          step={step}
          value={end}
        />
      </div>
    </div>
  );
}

export default MultiSlider;
