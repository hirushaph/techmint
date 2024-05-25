function Categories() {
  return (
    <section>
      <div className='grid w-full grid-cols-3 gap-6'>
        <div
          style={{
            background: `url(${'/public/mobile.jpg'})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          className='row-span-2 flex items-end justify-between px-5 pb-3'
        >
          <p className='text-3xl uppercase'>Mobile</p>
          <button className='border bg-white px-4 py-[0.6rem] text-sm uppercase shadow-sm'>
            Explore
          </button>
        </div>

        <div className='relative border'>
          <img
            src='/public/apple watch.jpg'
            alt=''
            className='h-full w-full object-cover'
          />
          <div className='absolute bottom-0 p-5'>
            <p className='mb-4 text-2xl font-semibold uppercase'>Watch</p>
            <button className='bg-white px-4 py-2 uppercase'>Explore</button>
          </div>
        </div>
        <div className='relative border'>
          <img
            src='/public/apple watch.jpg'
            alt=''
            className='h-full w-full object-cover'
          />
          <div className='absolute bottom-0 p-5'>
            <p className='mb-4 text-2xl font-semibold uppercase'>Watch</p>
            <button className='bg-white px-4 py-2 uppercase'>Explore</button>
          </div>
        </div>
        <div className='relative border'>
          <img
            src='/public/apple watch.jpg'
            alt=''
            className='h-full w-full object-cover'
          />
          <div className='absolute bottom-0 p-5'>
            <p className='mb-4 text-2xl font-semibold uppercase'>Watch</p>
            <button className='bg-white px-4 py-2 uppercase'>Explore</button>
          </div>
        </div>
        <div className='relative border'>
          <img
            src='/public/apple watch.jpg'
            alt=''
            className='h-full w-full object-cover'
          />
          <div className='absolute bottom-0 p-5'>
            <p className='mb-4 text-2xl font-semibold uppercase'>Watch</p>
            <button className='bg-white px-4 py-2 uppercase'>Explore</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Categories;
