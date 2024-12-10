import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import required modules
import { FreeMode, Navigation } from 'swiper/modules';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { useEffect, useState } from 'react';
import { SingleProduct } from '../../../types/types';

type ImageGalleryProps = {
  currentProduct?: SingleProduct;
  selectedVarient: any;
};

// TODO Fix image gallery

function ImageGallery({ currentProduct, selectedVarient }: ImageGalleryProps) {
  const [currentMainThumb, setCurrentMainThumb] = useState<string | null>(
    currentProduct?.image || ''
  );

  const images = currentProduct?.variants.map((item) => {
    return item.images[0];
  });

  useEffect(
    function () {
      if (selectedVarient === null) return;
      setCurrentMainThumb(selectedVarient?.images[0] || currentProduct?.image);
    },
    [selectedVarient]
  );
  return (
    <div>
      <div className='product-thumb flex h-[400px] justify-center'>
        <img
          src={currentMainThumb || ''}
          alt=''
          width='400px'
          height={100}
          className='object-cover'
        />
      </div>
      <div className='relative mx-8 px-10'>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          freeMode={true}
          navigation={{
            nextEl: '.thumb-button-next',
            prevEl: '.thumb-button-prev',
          }}
          modules={[FreeMode, Navigation]}
          className='mySwiper'
          width={400}
        >
          {images?.map((image) => (
            <SwiperSlide key={image}>
              <img
                src={image}
                className='border hover:cursor-pointer hover:shadow-md'
                alt=''
                onClick={() => setCurrentMainThumb(image)}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className='thumb-button-next absolute right-0 top-[50%] z-20 translate-y-[-50%] hover:cursor-pointer'>
          <IoIosArrowForward className='text-2xl text-dark-800' />
        </div>
        <div className='thumb-button-prev absolute left-0 top-[50%] z-20 translate-y-[-50%] hover:cursor-pointer'>
          <IoIosArrowBack className='text-2xl text-dark-800' />
        </div>
      </div>
    </div>
  );
}

export default ImageGallery;
