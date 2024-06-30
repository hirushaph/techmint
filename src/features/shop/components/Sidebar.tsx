import BrandsFilter from './BrandsFilter';
import CategoryFilter from './CategoryFilter';
import PriceFilter from './PriceFilter';

function Sidebar() {
  return (
    <aside>
      <PriceFilter />
      <CategoryFilter />
      <BrandsFilter />
    </aside>
  );
}

export default Sidebar;
