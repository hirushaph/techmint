import { navLinks } from '../../data/navLinks';
import NavItem from './NavItem';

type NavBarProps = {
  className?: string;
};

function NavBar({ className }: NavBarProps) {
  return (
    <nav className={`${className} self-center justify-self-end`}>
      <ul className='flex list-none items-center gap-4 text-base uppercase'>
        {navLinks.map((item) => (
          <NavItem key={item.label} link={item.link} label={item.label} />
        ))}
      </ul>
    </nav>
  );
}

export default NavBar;
