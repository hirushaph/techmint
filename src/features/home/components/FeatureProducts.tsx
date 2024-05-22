import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { images } from '../../../data/constants';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

function FeatureProducts() {
  return (
    <section className='mt-4'>
      <div className='slider group relative h-full w-full overflow-hidden rounded-3xl'>
        <Swiper
          slidesPerView={1}
          spaceBetween={0}
          loop={true}
          autoplay={{
            delay: 10000,
            disableOnInteraction: false,
          }}
          navigation={{
            nextEl: '.button-next',
            prevEl: '.button-prev',
          }}
          modules={[Navigation, Autoplay]}
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

          <div className='button-next absolute right-0 top-1/2 z-10 translate-y-[-50%] cursor-pointer pr-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
            <FaArrowRight className='text-2xl text-white' />
          </div>
          <div className='button-prev absolute top-1/2 z-10 translate-y-[-50%] cursor-pointer pl-6 opacity-0 transition-opacity duration-300 hover:opacity-100 group-hover:opacity-100'>
            <FaArrowLeft className='text-2xl text-white' />
          </div>
        </Swiper>
      </div>

      <div className='mt-7 flex justify-center gap-7'>
        <div className='aspect-showcase w-full overflow-hidden rounded-3xl'>
          <img
            src='/public/watch.jpg'
            alt=''
            className='h-full w-full object-cover'
          />
        </div>
        <div className='aspect-showcase w-full overflow-hidden rounded-3xl '>
          <img
            src='/public/acc.jpg'
            alt=''
            className='h-full w-full object-cover'
          />
        </div>
      </div>
    </section>
  );
}

export default FeatureProducts;
