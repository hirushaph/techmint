import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import required modules
import { Autoplay, FreeMode, Navigation } from 'swiper/modules';

function ImageGallery() {
  return (
    <>
      <Swiper
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        navigation={true}
        modules={[FreeMode, Autoplay, Navigation]}
        className='mySwiper'
      >
        <SwiperSlide>
          <img src='/pixel9.jpg' alt='' />
        </SwiperSlide>

        <SwiperSlide>
          <img src='/pixel9.jpg' alt='' />
        </SwiperSlide>
        <SwiperSlide>
          <img src='/pixel9.jpg' alt='' />
        </SwiperSlide>
        <SwiperSlide>
          <img src='/pixel9.jpg' alt='' />
        </SwiperSlide>
        <SwiperSlide>
          <img src='/pixel9.jpg' alt='' />
        </SwiperSlide>
        <SwiperSlide>
          <img src='/pixel9.jpg' alt='' />
        </SwiperSlide>
        <SwiperSlide>
          <img src='/pixel9.jpg' alt='' />
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default ImageGallery;
