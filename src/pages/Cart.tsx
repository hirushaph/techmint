function Cart() {
  return (
    <div className='container mx-auto px-4'>
      <div className='grid-cols-custom-cart grid gap-12 pt-4'>
        <div>
          <h1 className='mb-4 text-2xl font-semibold'>Cart</h1>
          <div className='flex items-center justify-between rounded-sm bg-gray-100 px-3 py-3'>
            {/* Details */}
            <div>
              <img src='' alt='' />
              <h2>Iphone</h2>
              <p>Color : White</p>
            </div>
            {/* Actions */}
            <div>Update and Delete</div>
          </div>
        </div>
        <div>Hellow</div>
      </div>
    </div>
  );
}

export default Cart;
