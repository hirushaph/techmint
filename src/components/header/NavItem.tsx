import { NavLink } from 'react-router-dom';
import { NavLinkType } from '../../types/navlinks';

function NavItem({ label, link, className }: NavLinkType) {
  return (
    <li>
      <NavLink
        className={`${className} transition-text text-dark-900  hover:text-blue-600`}
        to={link}
      >
        {label}
      </NavLink>
    </li>
  );
}

export default NavItem;
