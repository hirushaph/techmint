import { navLinks } from '../../data/navLinks';
import NavItem from './NavItem';

function NavBar() {
  return (
    <nav className='hidden self-center justify-self-end xl:block'>
      <ul className='flex list-none items-center gap-4 text-base uppercase'>
        {navLinks.map((item) => (
          <NavItem key={item.label} link={item.link} label={item.label} />
        ))}
      </ul>
    </nav>
  );
}

export default NavBar;
