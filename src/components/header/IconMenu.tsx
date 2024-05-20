import { RiShoppingCart2Line } from 'react-icons/ri';
import { VscAccount } from 'react-icons/vsc';
import { Link } from 'react-router-dom';
import DarkMode from './DarkMode';
import MobileHamburger from './MobileHamburger';

type IconMenuProps = {
  setShowMobileMenu: React.Dispatch<React.SetStateAction<boolean>>;
  showMobileMenu: boolean;
};

function IconMenu({ setShowMobileMenu, showMobileMenu }: IconMenuProps) {
  return (
    <div className='header-icons flex items-center gap-4 justify-self-end'>
      <DarkMode className='hidden xl:flex' />
      <Link to='/account' className='hidden xl:block'>
        <span className=''>
          <VscAccount className='header-icon text-2xl' />
        </span>
      </Link>
      <div className='flex items-center gap-3 rounded-3xl bg-blue-100 px-4 py-2 text-blue-700 shadow-sm shadow-blue-100 '>
        <RiShoppingCart2Line className='' />
        <span className='font-bold'>180$</span>
      </div>
      <MobileHamburger
        setShowMobileMenu={setShowMobileMenu}
        showMobileMenu={showMobileMenu}
      />
    </div>
  );
}

export default IconMenu;
