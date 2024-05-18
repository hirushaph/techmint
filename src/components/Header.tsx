import Logo from './Logo';
import NavBar from './NavBar';
import Search from './Search';
import IconMenu from './IconMenu';

function Header() {
  return (
    <header>
      {/* <div className='container mx-auto grid h-[70px] grid-cols-4 items-center'> */}
      <div className='container mx-auto flex h-[70px] items-center gap-20'>
        <Logo />
        <Search />
        <NavBar />
        <IconMenu />
      </div>
    </header>
  );
}

export default Header;
