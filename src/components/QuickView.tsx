import { motion } from 'framer-motion';
import { useState } from 'react';
import { createPortal } from 'react-dom';
import { IoClose } from 'react-icons/io5';

type QuickViewProps = {
  onClose: React.Dispatch<React.SetStateAction<boolean>>;
};

type QuickViewContainerProps = {
  children: React.ReactNode;
};

function QuickViewContainer({ children }: QuickViewContainerProps) {
  return (
    <motion.div
      exit={{ opacity: 0 }}
      className={`bg-lightDark fixed left-0 top-0 z-50 flex h-[100vh] w-full items-center justify-center backdrop-blur-md`}
    >
      {children}
    </motion.div>
  );
}

function QuickView({ onClose }: QuickViewProps) {
  return createPortal(
    <QuickViewContainer>
      <motion.div className='quickview-animation z-50 rounded-3xl bg-dark-50 p-4 shadow-lg '>
        <div className='relative h-[50vh] w-[50vw] '>
          <button onClick={() => onClose(false)} className='absolute right-0'>
            <IoClose className='text-xl ' />
          </button>
          <h1>Hello</h1>
        </div>
      </motion.div>
    </QuickViewContainer>,
    document.body,
  );
}

export default QuickView;
