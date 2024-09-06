import { useDispatch, useSelector } from 'react-redux';
import CheckBox from '../../../components/CheckBox';
import SidebarWidget from './SidebarWidget';
import { RootStateType } from '../../../redux/store';

const category = ['Budget', 'Midrange', 'Flagship'];

function CategoryFilter() {
  const dispatch = useDispatch();
  const selectedCategories = useSelector(
    (state: RootStateType) => state.filter.selectedCategory
  );

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
