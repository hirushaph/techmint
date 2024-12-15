function OffersSection() {
  return (
    <section className='mt-12'>
      <div
        className='aspect-offer h-full w-full bg-cover bg-center'
        style={{ backgroundImage: `url(${'/iphone.jpg'})` }}
      >
        <div className='flex h-full flex-col justify-center p-10'>
          <span className='pb-4 font-semibold text-white sm:text-sm lg:text-3xl'>
            20% OFF
          </span>
          <h3 className='uppercase text-white md:text-3xl lg:text-6xl'>
            Galaxy S24 Series
          </h3>

          <button className='lg:text-md mt-4 self-start bg-white px-2 py-1 text-sm uppercase text-black lg:mt-12 lg:px-4 lg:py-2'>
            explore now
          </button>
        </div>
      </div>
    </section>
  );
}

export default OffersSection;
