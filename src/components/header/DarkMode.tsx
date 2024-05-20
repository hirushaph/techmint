import { GoSun } from 'react-icons/go';
import { useDispatch, useSelector } from 'react-redux';
import { RootStateType } from '../../redux/store';
import { toggleDarkMode } from '../../redux/settingSlice';
import { useEffect, useState } from 'react';
import { HiOutlineMoon } from 'react-icons/hi';

function DarkMode() {
  const dispatch = useDispatch();
  const { darkmode } = useSelector((state: RootStateType) => state.setting);
  const [showAnimation, setShowAnimation] = useState(false);

  useEffect(
    function () {
      if (darkmode) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    },
    [darkmode],
  );

  function handleDarkMode() {
    dispatch(toggleDarkMode());
    setShowAnimation(true);
  }
  return (
    <div
      onClick={handleDarkMode}
      className=' relative flex w-8 cursor-pointer items-center justify-center bg-blue-400'
    >
      <span
        className={`darkmode-icon ${showAnimation && darkmode ? 'rotateback-effect' : 'opacity-0'} ${darkmode && 'opacity-100'} ${!darkmode && 'rotate-effect'}`}
      >
        <HiOutlineMoon className={`text-2xl`} />
      </span>

      <span
        className={`darkmode-icon ${showAnimation && !darkmode ? 'rotate-effect' : 'opacity-0'} ${darkmode && 'rotateback-effect'} ${!darkmode && 'opacity-100'}`}
      >
        <GoSun className={`text-2xl`} />
      </span>
    </div>
  );
}

export default DarkMode;
