import Hamburger from 'hamburger-react';

type MobileHamburgerProps = {
  setShowMobileMenu: React.Dispatch<React.SetStateAction<boolean>>;
  showMobileMenu: boolean;
};

function MobileHamburger({
  setShowMobileMenu,
  showMobileMenu,
}: MobileHamburgerProps) {
  return (
    <div className='xl:hidden'>
      <Hamburger toggled={showMobileMenu} toggle={setShowMobileMenu} />
    </div>
  );
}

export default MobileHamburger;
