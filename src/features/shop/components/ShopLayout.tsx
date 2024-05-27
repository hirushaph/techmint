import ShopItems from './ShopItems';
import Sidebar from './Sidebar';

function ShopLayout() {
  return (
    <section>
      <div className='container mx-auto px-4 pt-6'>
        <div className='grid-cols-custom-shop grid gap-12'>
          <Sidebar />
          <ShopItems />
        </div>
      </div>
    </section>
  );
}

export default ShopLayout;
