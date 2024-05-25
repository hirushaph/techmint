import { Outlet } from 'react-router-dom';
import Header from './header/Header';
import Footer from './Footer';

function AppLayout() {
  return (
    <div className='app'>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default AppLayout;
