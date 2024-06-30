import SidebarWidget from './SidebarWidget';

function BrandsFilter() {
  return (
    <SidebarWidget title='Brands'>
      <select id='brand'>
        <option value='apple'>Apple</option>
        <option value='samsung'>Samsung</option>
        <option value='google'>Google</option>
        <option value='huawei'>Huawei</option>
      </select>
    </SidebarWidget>
  );
}

export default BrandsFilter;
