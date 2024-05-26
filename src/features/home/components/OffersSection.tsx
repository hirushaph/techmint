function OffersSection() {
  return (
    <section className='mt-12 '>
      <div
        className='aspect-offer h-full w-full bg-cover bg-center'
        style={{ backgroundImage: `url(${'/iphone.jpg'})` }}
      >
        <div className='flex h-full flex-col justify-center p-10'>
          <span className=' pb-4 font-semibold text-white lg:text-3xl'>
            20% OFF
          </span>
          <h3 className='text-3xl uppercase text-white lg:text-6xl'>
            Galaxy S24 Series
          </h3>

          <button className='lg:text-md mt-12  self-start bg-white px-4  py-2 text-sm uppercase text-black'>
            explore now
          </button>
        </div>
      </div>
    </section>
  );
}

export default OffersSection;
