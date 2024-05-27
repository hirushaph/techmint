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
    <footer className='mt-16 bg-dark-100 pt-12'>
      <div className='container mx-auto grid w-full grid-cols-1 gap-16 px-4 pb-12 lg:grid-cols-4 lg:justify-items-center lg:gap-0'>
        {/* About Section */}
        <div className='justify-self-start'>
          <h3 className='mb-2 text-2xl'>TechMint</h3>
          <p className='mb-6'>Your trusted mobile phone store</p>

          <div className='mb-6 flex items-center gap-4'>
            <span className='rounded-full border-2 p-2'>
              <IoLocationOutline className='text-xl' />
            </span>
            <p>
              <span className='text-md block font-semibold'>Location</span>
              <span className='block'>12 Main Street, England</span>
            </p>
          </div>
        </div>

        {/* Quick Menu */}
        <div>
          <h3 className='mb-4 text-xl uppercase'>Quick Menu</h3>
          <ul className='flex flex-col gap-4'>
            {navLinks.map((item) => (
              <NavItem key={item.label} link={item.link} label={item.label} />
            ))}
          </ul>
        </div>

        {/* My Account */}
        <div>
          <h3 className='mb-4 text-xl uppercase'>My Account</h3>
          <ul className='flex flex-col gap-4'>
            {navLinks.map((item) => (
              <NavItem key={item.label} link={item.link} label={item.label} />
            ))}
          </ul>
        </div>

        {/* Follow Us */}
        <div>
          <h3 className=' mb-4 text-xl uppercase'>Contact Us</h3>
          <div>
            <div className='mb-4 flex items-center gap-2'>
              <span className='rounded-full border-2 p-2'>
                <LuPhone className='text-md' />
              </span>
              <p>
                <span className='block'>+123 1234 12345</span>
              </p>
            </div>

            <div className='flex items-center gap-2'>
              <span className='rounded-full border-2 p-2'>
                <MdAlternateEmail className='text-md' />
              </span>
              <p>
                <span className='block'>contact@techmint.local</span>
              </p>
            </div>
            <div className='mt-6 flex gap-2'>
              <RiFacebookCircleFill className='text-2xl' />
              <RiInstagramFill className='text-2xl' />
              <RiYoutubeFill className='text-2xl' />
              <RiWhatsappFill className='text-2xl' />
            </div>
          </div>
        </div>
      </div>

      <div className='flex justify-center bg-dark-200 py-6'>
        <p>Copyright &copy; {new Date().getFullYear()} TechMint Store</p>
      </div>
    </footer>
  );
}

export default Footer;
