import BrandsFilter from './BrandsFilter';
import CategoryFilter from './CategoryFilter';
import ColorFilter from './ColorFilter';
import PriceFilter from './PriceFilter';

function Sidebar() {
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
