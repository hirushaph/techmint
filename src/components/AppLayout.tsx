import { Outlet } from 'react-router-dom';
import Header from './header/Header';

function AppLayout() {
  return (
    <div className='app'>
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
