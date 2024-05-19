import { RiShoppingCart2Line } from 'react-icons/ri';
import { VscAccount } from 'react-icons/vsc';
import { Link } from 'react-router-dom';
import DarkMode from './DarkMode';

function IconMenu() {
  return (
    <div className='header-icons flex items-center gap-4 justify-self-end'>
      <DarkMode />
      <Link to='/account'>
        <span className=''>
          <VscAccount className='header-icon text-2xl' />
        </span>
      </Link>
      <div className='flex items-center gap-3 rounded-3xl bg-blue-100 px-4 py-2 text-blue-700 shadow-sm shadow-blue-100 '>
        <RiShoppingCart2Line className='' />
        <span className='font-bold'>180$</span>
      </div>
    </div>
  );
}

export default IconMenu;
