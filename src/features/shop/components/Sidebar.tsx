import CategoryFilter from './CategoryFilter';
import PriceFilter from './PriceFilter';

function Sidebar() {
  return (
    <aside>
      <PriceFilter />
      <CategoryFilter />
      <div>
        <h2>Brand</h2>
        <select id='brand'>
          <option value='apple'>Apple</option>
          <option value='samsung'>Samsung</option>
          <option value='google'>Google</option>
          <option value='huawei'>Huawei</option>
        </select>
      </div>
      <div>
        <h2></h2>
      </div>
    </aside>
  );
}

export default Sidebar;
