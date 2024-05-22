import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { images } from '../../../data/constants';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

function FeatureProducts() {
  return (
    <section>
      <div className='slider relative h-full w-full overflow-hidden rounded-3xl'>
        <Swiper
          slidesPerView={1}
          spaceBetween={0}
          loop={true}
          autoplay={true}
          navigation={{
            nextEl: '.button-next',
            prevEl: '.button-prev',
          }}
          modules={[Navigation]}
          className='aspect-slider'
          speed={800}
        >
          {images.map((image) => (
            <SwiperSlide key={image.url} className=''>
              <img
                src={image.url}
                alt='slider image'
                className='h-full w-full object-cover'
              />
            </SwiperSlide>
          ))}

          <div className='button-next absolute right-0 top-1/2 z-10 translate-y-[-50%] cursor-pointer pr-6'>
            <FaArrowRight className='text-2xl text-white' />
          </div>
          <div className='button-prev absolute top-1/2 z-10 translate-y-[-50%] cursor-pointer pl-6'>
            <FaArrowLeft className='text-2xl text-white' />
          </div>
        </Swiper>
      </div>
    </section>
  );
}

export default FeatureProducts;
