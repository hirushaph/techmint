import {
  Categories,
  FeatureProducts,
  NewArrivels,
  OffersSection,
  PopularProducts,
} from '../features/home';

function Home() {
  return (
    <div className='container mx-auto px-4'>
      <FeatureProducts />
      <PopularProducts />
      <OffersSection />
      <NewArrivels />
      <Categories />
    </div>
  );
}

export default Home;
