import React from 'react';
import BrandsFilter from './BrandsFilter';
import CategoryFilter from './CategoryFilter';
import ColorFilter from './ColorFilter';
import PriceFilter from './PriceFilter';

type SidebarPropTypes = {
  onPriceChange: (priceRange: [number, number]) => void;
};

function Sidebar({ onPriceChange }: SidebarPropTypes) {
  return (
    <aside>
      <PriceFilter />
      <CategoryFilter />
      <BrandsFilter />
      <ColorFilter />
    </aside>
  );
}

export default Sidebar;
