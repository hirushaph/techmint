import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useState } from 'react';
import { getFeatured, getSliders } from '../../../services/api';
import { useQuery } from '@tanstack/react-query';
import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md';

function FeatureProducts() {
  // const [sliders, setSliders] = useState<Sliders>([]);
  const [sliderIndex, setSliderIndex] = useState(0);
  // const [featuredProducts, setFeaturedProducts] = useState<FeaturedProducts>(
  //   []
  // );

  const { data: sliders, isLoading: slidersLoading } = useQuery({
    queryFn: () => getSliders(),
    queryKey: ['sliders'],
  });

  const { data: featured, isLoading: featuredLoading } = useQuery({
    queryFn: () => getFeatured(),
    queryKey: ['featured'],
  });

  // useEffect(function () {
  //   async function getSliderList() {
  //     const sliderList = await getSliders();
  //     setSliders(sliderList);
  //   }

  //   async function getFeaturedList() {
  //     const featured = await getFeatured();
  //     setFeaturedProducts(featured);
  //   }

  //   getSliderList();
  //   getFeaturedList();
  // }, []);

  function handleTransitionEnd(swiper) {
    setSliderIndex(swiper.realIndex);
  }

  return (
    <section className='mt-4'>
      <div className='slider group relative h-[200px] w-full lg:h-full'>
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
          className='aspect-square bg-dark-100 md:aspect-slider'
          speed={800}
          onTransitionEnd={(swiper) => {
            handleTransitionEnd(swiper);
          }}
        >
          {slidersLoading && (
            <div className='absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%]'>
              Loading
            </div>
          )}
          {!slidersLoading &&
            sliders &&
            sliders.map((slider, index) => (
              <SwiperSlide key={slider.image} className=''>
                <img
                  src={slider.image}
                  alt='slider image'
                  className='h-full w-full object-cover'
                />
                <div
                  className={`${sliderIndex === index ? 'animate-text' : ''} slider-text absolute top-0 flex h-[100%] w-1/2 flex-col justify-center px-12 py-6`}
                >
                  <p className='tagline xl:text-md text-sm uppercase tracking-wider opacity-0'>
                    {slider.tagline}
                  </p>
                  <h2 className='title mt-2 text-3xl font-semibold uppercase opacity-0 lg:mt-4 xl:text-5xl'>
                    {slider.title}
                  </h2>
                  <p className='description text-md mt-2 hidden font-light opacity-0 lg:mt-6 lg:block xl:text-lg'>
                    {slider.description}
                  </p>
                  <button className='mt-4 self-start bg-white px-4 py-1 opacity-0 lg:mt-14 xl:px-6 xl:py-2'>
                    Show Now
                  </button>
                </div>
              </SwiperSlide>
            ))}

          <div className='button-next absolute right-0 top-1/2 z-10 translate-y-[-50%] cursor-pointer pr-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
            <MdArrowForwardIos className='text-2xl text-white' />
          </div>
          <div className='button-prev absolute top-1/2 z-10 translate-y-[-50%] cursor-pointer pl-6 opacity-0 transition-opacity duration-300 hover:opacity-100 group-hover:opacity-100'>
            <MdArrowBackIos className='text-2xl text-white' />
          </div>
        </Swiper>
      </div>

      <div className='mt-7 flex flex-col justify-center gap-7 lg:flex-row'>
        {featured?.map((product) => (
          <div
            key={product.image}
            className='group relative aspect-showcase w-full overflow-hidden'
          >
            <img
              src={product.image}
              alt={product.title}
              className='h-full w-full object-cover transition duration-500 group-hover:scale-110'
            />
            <div className='featured-text absolute top-0 flex h-full flex-col justify-center gap-16 px-10 py-6'>
              <h2 className='text-md font-semibold uppercase lg:text-3xl'>
                {product.title}
              </h2>
              <button className='self-start bg-white px-4 py-2 uppercase lg:px-8 lg:py-2'>
                Shop Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FeatureProducts;
