import Slider from '../features/home/components/FeatureProducts';
import FeatureProducts from '../features/home/components/FeatureProducts';
import PopularProducts from '../features/home/components/PopularProducts';

function Home() {
  return (
    <div className='container mx-auto px-4'>
      <FeatureProducts />
      <PopularProducts />
    </div>
  );
}

export default Home;
