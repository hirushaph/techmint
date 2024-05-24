function OffersSection() {
  return (
    <section className='mt-12 '>
      <div
        className='aspect-offer h-full w-full bg-cover bg-center'
        style={{ backgroundImage: `url(${'/iphone.jpg'})` }}
      >
        <div className='flex h-full flex-col justify-center p-10'>
          <span className=' pb-4 text-3xl font-semibold text-white'>
            20% OFF
          </span>
          <h3 className='text-6xl uppercase text-white'>Galaxy S24 Series</h3>

          <button className='mt-12 self-start bg-white  px-4 py-2 uppercase text-black'>
            explore now
          </button>
        </div>
      </div>
    </section>
  );
}

export default OffersSection;
