import { IoLocationOutline } from 'react-icons/io5';
import { LuPhone } from 'react-icons/lu';
import { MdAlternateEmail } from 'react-icons/md';
import NavItem from './header/NavItem';
import { navLinks } from '../data/navLinks';
import {
  RiFacebookCircleFill,
  RiInstagramFill,
  RiWhatsappFill,
  RiYoutubeFill,
} from 'react-icons/ri';

function Footer() {
  return (
    <footer className='pt-12'>
      <div className='container mx-auto grid w-full grid-cols-4 justify-items-center px-4'>
        {/* About Section */}
        <div className='justify-self-start'>
          <h3 className='text-2xl'>TechMint</h3>
          <p>Your trusted mobile phone store</p>

          <div className='flex items-center gap-4'>
            <span className='rounded-full border-2 p-2'>
              <IoLocationOutline className='text-xl' />
            </span>
            <p>
              <span className='text-md block font-semibold'>Location</span>
              <span className='block'>12 Main Street, England</span>
            </p>
          </div>

          <div className='flex items-center gap-4'>
            <span className='rounded-full border-2 p-2'>
              <LuPhone className='text-xl' />
            </span>
            <p>
              <span className='text-md block font-semibold'>Phone</span>
              <span className='block'>+123 1234 12345</span>
            </p>
          </div>

          <div className='flex items-center gap-4'>
            <span className='rounded-full border-2 p-2'>
              <MdAlternateEmail className='text-xl' />
            </span>
            <p>
              <span className='text-md block font-semibold'>Email</span>
              <span className='block'>contact@techmint.local</span>
            </p>
          </div>
        </div>

        {/* Quick Menu */}
        <div>
          <h3 className='text-2xl'>Quick Menu</h3>
          <ul>
            {navLinks.map((item) => (
              <NavItem key={item.label} link={item.link} label={item.label} />
            ))}
          </ul>
        </div>

        {/* My Account */}
        <div>
          <h3 className='text-2xl'>My Account</h3>
          <ul>
            {navLinks.map((item) => (
              <NavItem key={item.label} link={item.link} label={item.label} />
            ))}
          </ul>
        </div>

        {/* Follow Us */}
        <div>
          <h3 className='text-2xl'>Follow Us</h3>
          <div>
            <RiFacebookCircleFill />
            <RiInstagramFill />
            <RiYoutubeFill />
            <RiWhatsappFill />
          </div>
        </div>
      </div>

      <div className='flex justify-center py-6'>
        <p>Copyright &copy; {new Date().getFullYear()} TechMint Store</p>
      </div>
    </footer>
  );
}

export default Footer;
