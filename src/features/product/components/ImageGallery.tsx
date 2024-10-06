function ImageGallery() {
  return (
    <div className=''>
      <div className='main-banner flex flex-col items-center'>
        <img
          src='/pixel9.jpg'
          className='w-[420px] border border-gray-700'
          alt=''
        />
        <div className='image-casarol mt-3 flex overflow-hidden'>
          <img
            src='/pixel9.jpg'
            className='h-full w-[100px] border border-gray-700'
            alt=''
          />
          <img
            src='/pixel9.jpg'
            className='h-full w-[100px] border border-gray-700'
            alt=''
          />
          <img
            src='/pixel9.jpg'
            className='h-full w-[100px] border border-gray-700'
            alt=''
          />
          <img
            src='/pixel9.jpg'
            className='h-full w-[100px] border border-gray-700'
            alt=''
          />
          <img
            src='/pixel9.jpg'
            className='h-full w-[100px] border border-gray-700'
            alt=''
          />
        </div>
      </div>
    </div>
  );
}

export default ImageGallery;
