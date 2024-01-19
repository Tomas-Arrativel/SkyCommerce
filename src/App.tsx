import { Route, Routes } from 'react-router-dom';

import './App.css';
import { Categories, Navbar, Footer } from './containers/exports';
import {
  Category,
  Home,
  NotFound,
  ProductPage,
  Search,
  ShoppingCartPage,
} from './pages/exports';
import { ShoppingCartProvider } from './context/ShoppingCartContext';

function App() {
  return (
    <ShoppingCartProvider>
      <header>
        <Navbar />
        <Categories />
      </header>
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/category/:cat' element={<Category />} />
          <Route path='/product/:id' element={<ProductPage />} />
          <Route path='/search/:query' element={<Search />} />
          <Route path='*' element={<NotFound />} />
          <Route path='shopping-cart' element={<ShoppingCartPage />} />
        </Routes>
      </main>

      <Footer />
    </ShoppingCartProvider>
  );
}

export default App;
