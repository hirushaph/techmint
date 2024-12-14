import { AnimatePresence, motion } from 'framer-motion';

import { SingleProduct } from '../types/types';
import { RiShoppingCartLine } from 'react-icons/ri';
import { IoHeartOutline } from 'react-icons/io5';
import { FiEye } from 'react-icons/fi';
import { useState } from 'react';
import QuickView from './QuickView';
import { Link } from 'react-router-dom';

type ProductProps = {
  product: SingleProduct;
};

function Product({ product }: ProductProps) {
  const [showQuickMenu, setShowQuickMenu] = useState(false);
  return (
    <Link to={`/products/${product.slug}`}>
      <div className='group relative overflow-hidden rounded-3xl border border-dark-200 px-2 pb-4 pt-2 transition duration-300 hover:bg-blue-100'>
        <div className='image-contaier aspect-square overflow-hidden rounded-2xl'>
          <img
            src={product.image}
            alt={product.name}
            className='h-full w-full object-cover'
          />
        </div>
        <p className='ml-2 mt-2 text-[1rem] font-semibold md:ml-6 md:text-[1.1rem]'>
          {product.name}
        </p>
        <p className='ml-2 mt-1 font-semibold text-blue-600 md:ml-6'>
          ${product.price}
        </p>

        {/* Toolbar */}
        <div className='absolute right-2 top-6 flex translate-x-20 flex-col items-center overflow-hidden rounded-lg border border-dark-100 bg-dark-50 shadow-md transition duration-500 group-hover:translate-x-0 dark:bg-dark-200'>
          <button className='px-3 py-3 transition duration-300 hover:bg-blue-400'>
            <RiShoppingCartLine className='text-lg' />
          </button>
          <button className='px-3 py-3 transition duration-300 hover:bg-blue-400'>
            <IoHeartOutline className='text-lg' />
          </button>
          <motion.button
            onClick={() => setShowQuickMenu(!showQuickMenu)}
            className='px-3 py-3 transition duration-300 hover:bg-blue-400'
          >
            <FiEye className='text-lg' />
          </motion.button>
        </div>

        <AnimatePresence>
          {showQuickMenu && <QuickView onClose={setShowQuickMenu} />}
        </AnimatePresence>
      </div>
    </Link>
  );
}

export default Product;
