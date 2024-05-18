import { NavLink } from 'react-router-dom';
import { NavLinkType } from '../types/navlinks';

function NavItem({ label, link }: NavLinkType) {
  return (
    <li>
      <NavLink className='text-dark-900' to={link}>
        {label}
      </NavLink>
    </li>
  );
}

export default NavItem;
