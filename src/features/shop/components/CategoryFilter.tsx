import SidebarWidget from './SidebarWidget';

function CategoryFilter() {
  return (
    <SidebarWidget title='Category'>
      <ul>
        <li>
          <input type='checkbox' name='check1' id='check' />
          <label htmlFor='check1'>Mobile</label>
          <br />
          <input type='checkbox' name='check1' id='check' />
          <label htmlFor='check1'>Watch</label>
          <br />
          <input type='checkbox' name='check1' id='check' />
          <label htmlFor='check1'>Accesories</label>
        </li>
      </ul>
    </SidebarWidget>
  );
}

export default CategoryFilter;
