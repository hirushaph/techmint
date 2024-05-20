import FeatureProducts from '../features/home/components/FeatureProducts';
import PopularProducts from '../features/home/components/PopularProducts';

function Home() {
  return (
    <div className='container mx-auto'>
      <FeatureProducts />
      <PopularProducts />
    </div>
  );
}

export default Home;
