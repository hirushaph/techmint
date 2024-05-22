import { RiMenu3Fill, RiMenu3Line } from 'react-icons/ri';

type MobileHamburgerProps = {
  setShowMobileMenu: React.Dispatch<React.SetStateAction<boolean>>;
  showMobileMenu: boolean;
};

function MobileHamburger({
  setShowMobileMenu,
  showMobileMenu,
}: MobileHamburgerProps) {
  function handleMenuClick() {
    setShowMobileMenu(!showMobileMenu);
  }
  return (
    <div className='xl:hidden'>
      <RiMenu3Fill
        onClick={handleMenuClick}
        className='cursor-pointer text-3xl'
      />
    </div>
  );
}

export default MobileHamburger;
