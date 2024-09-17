function Product() {
  return (
    <div className='container mx-auto px-4'>
      <div className='grid grid-cols-2'>
        <div className='left'>Left</div>
        <div className='right'>
          <p className='brand'>Apple</p>
          <h3 className='text-3xl font-bold'>Iphone 16 Pro</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque
            possimus, molestiae eaque reprehenderit minus illo cumque
            consequatur placeat animi magnam. Hic minima vel repellat nulla, ab
            quasi libero reprehenderit officiis?
          </p>
          <div className='discount-price flex items-center justify-start gap-4'>
            <p className='discounted-price text-xl font-bold'>899$</p>
            <span className='discount-percentage text-blue-600'>40%</span>
          </div>
          <button className='btn'>Add To Cart</button>
        </div>
      </div>
    </div>
  );
}

export default Product;
