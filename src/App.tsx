import { Route, Routes } from 'react-router-dom';
import AppLayout from './components/AppLayout';
import Home from './pages/Home';
import Shop from './pages/Shop';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import Product from './pages/Product';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <Routes>
        <Route element={<AppLayout />}>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<Shop />} />
          <Route path='/products/:productId' element={<Product />} />
        </Route>
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
