function Categories() {
  return (
    <section>
      <div className='grid-cols-custom-category grid h-[500px] w-full'>
        <div
          style={{
            background: `url(${'/public/mobile.jpg'})`,
            backgroundSize: 'cover',
          }}
          className='flex h-full w-full items-end justify-between border px-6'
        >
          <p className='text-3xl'>Mobile</p>
          <button className=''>Explore</button>
        </div>
        <div className='grid h-full grid-cols-2 grid-rows-2 overflow-hidden'>
          <div className='border'>
            <img
              src='/public/blue.jpg'
              alt=''
              className='h-full w-full object-cover'
            />
          </div>
          <div className='border'>
            <img
              src='/public/blue.jpg'
              alt=''
              className='h-full w-full object-cover'
            />
          </div>
          <div className='border'>
            <img
              src='/public/blue.jpg'
              alt=''
              className='h-full w-full object-cover'
            />
          </div>
          <div className='border'>
            <img
              src='/public/blue.jpg'
              alt=''
              className='h-full w-full object-cover'
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Categories;
