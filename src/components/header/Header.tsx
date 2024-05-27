import Logo from './Logo';
import NavBar from './NavBar';
import Search from './Search';
import IconMenu from './IconMenu';
import { useState } from 'react';
import DarkMode from './DarkMode';
import { IoClose } from 'react-icons/io5';
import { AnimatePresence, motion } from 'framer-motion';
import TopBar from './TopBar';

function Header() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <header>
      <TopBar />
      <div className='container mx-auto flex h-[80px] items-center gap-20 px-4 '>
        <Logo />
        <Search />
        <NavBar className='hidden xl:block' />
        <IconMenu
          setShowMobileMenu={setShowMobileMenu}
          showMobileMenu={showMobileMenu}
        />
      </div>

      <AnimatePresence>
        {showMobileMenu && (
          <motion.div
            initial={{ translateX: 300 }}
            animate={{ translateX: 0 }}
            exit={{ translateX: 320 }}
            transition={{ type: 'just', stiffness: 100 }}
            className=' fixed right-0 top-0 z-50 h-full w-[20rem] bg-dark-50 px-6 pt-16 shadow-sm'
          >
            <div className='absolute left-4 top-4 rounded-full bg-blue-50 p-[0.2rem]'>
              <IoClose
                onClick={() => setShowMobileMenu(!showMobileMenu)}
                className='cursor-pointer text-2xl text-dark-500 transition-[transform] hover:scale-110'
              />
            </div>
            <div className='account-area flex items-center justify-between'>
              <div className='account flex items-center gap-4'>
                <img
                  src='https://avatar.iran.liara.run/public'
                  alt='avatar'
                  className='h-12 w-12'
                />
                <div>
                  <span className='text-[0.8rem] font-thin tracking-wider'>
                    Welcome
                  </span>
                  <p>Mikaelson</p>
                </div>
              </div>
              <div className='darkmode'>
                <DarkMode />
              </div>
            </div>
            <NavBar className='mobile-menu sm:block xl:hidden' />
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Header;
