import { RiShoppingCart2Line } from 'react-icons/ri';
import { VscAccount } from 'react-icons/vsc';
import { Link } from 'react-router-dom';
import DarkMode from './DarkMode';
import MobileHamburger from './MobileHamburger';
import useCart from '../../hooks/useCart';
import { getSubTotal } from '../../utils/helpers';

type IconMenuProps = {
  setShowMobileMenu: React.Dispatch<React.SetStateAction<boolean>>;
  showMobileMenu: boolean;
};

function IconMenu({ setShowMobileMenu, showMobileMenu }: IconMenuProps) {
  const { cart } = useCart();

  return (
    <div className='header-icons flex items-center gap-4 justify-self-end'>
      <DarkMode className='hidden xl:flex' />
      <Link to='/account' className='hidden xl:block'>
        <span className=''>
          <VscAccount className='header-icon text-2xl' />
        </span>
      </Link>
      <Link to='/cart'>
        <div className='flex cursor-pointer items-center gap-3 rounded-3xl border-2 px-3 py-[6px] transition hover:shadow-md'>
          <RiShoppingCart2Line className='' color='#6b7280 ' />
          <span className='text-[12px] font-semibold text-gray-500'>
            {getSubTotal(cart)}$
          </span>
        </div>
      </Link>
      <MobileHamburger
        setShowMobileMenu={setShowMobileMenu}
        showMobileMenu={showMobileMenu}
      />
    </div>
  );
}

export default IconMenu;
