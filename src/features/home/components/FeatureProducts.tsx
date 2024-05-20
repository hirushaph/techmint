function FeatureProducts() {
  return (
    <section className='showcase mt-4 grid grid-cols-custom-2fr-1fr grid-rows-[500px] gap-6'>
      <div className='main h-full overflow-hidden rounded-3xl '>
        <img src='/iphone.jpg' alt='iphone' className='h-full w-full' />
      </div>

      {/* Small Grid */}
      <div className='small grid h-full grid-rows-2 gap-6'>
        <div className='overflow-hidden rounded-3xl '>
          <img
            src='/watch.jpg'
            alt='small-card'
            className='h-full w-full object-cover'
          />
        </div>
        <div className='overflow-hidden rounded-3xl'>
          <img
            src='/acc.jpg'
            alt='small-card'
            className='o h-full w-full object-cover'
          />
        </div>
      </div>
    </section>
  );
}

export default FeatureProducts;
