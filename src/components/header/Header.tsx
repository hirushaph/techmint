import Logo from './Logo';
import NavBar from './NavBar';
import Search from './Search';
import IconMenu from './IconMenu';

function Header() {
  return (
    <header>
      {/* <div className='container mx-auto grid h-[70px] grid-cols-4 items-center'> */}
      <div className='container mx-auto flex h-[80px] items-center px-4 lg:gap-20'>
        <Logo />
        <Search />
        <NavBar />
        <IconMenu />
        <MobileHamburger />
      </div>
    </header>
  );
}

export default Header;
