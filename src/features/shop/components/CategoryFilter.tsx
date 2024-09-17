import CheckBox from '../../../components/CheckBox';
import SidebarWidget from './SidebarWidget';
import { useQuery } from '@tanstack/react-query';
import { Categories, getCategories } from '../../../services/api';

function CategoryFilter() {
  const { data: categories } = useQuery<Categories>({
    queryFn: () => getCategories(),
    queryKey: ['categories'],
  });

  // const dispatch = useDispatch();

  return (
    <SidebarWidget title='Category'>
      <ul className='flex flex-col gap-1'>
        {categories &&
          categories.map((item) => (
            <li key={item.id}>
              <CheckBox item={item} />
            </li>
          ))}
      </ul>
    </SidebarWidget>
  );
}

export default CategoryFilter;
