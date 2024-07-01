import CheckBox from '../../../components/CheckBox';
import SidebarWidget from './SidebarWidget';

const category = ['Budget', 'Midrange', 'Flagship'];

function CategoryFilter() {
  return (
    <SidebarWidget title='Category'>
      <ul className='flex flex-col gap-1'>
        {category.map((item) => (
          <li key={item}>
            <CheckBox item={item} />
          </li>
        ))}
      </ul>
    </SidebarWidget>
  );
}

export default CategoryFilter;
