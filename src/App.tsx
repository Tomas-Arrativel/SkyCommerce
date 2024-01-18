import { Route, Routes } from 'react-router-dom';

import './App.css';
import { Categories, Navbar, Footer } from './containers/exports';
import { Category, Home, NotFound, ProductPage } from './pages/exports';

function App() {
  return (
    <>
      <header>
        <Navbar />
        <Categories />
      </header>
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/category/:cat' element={<Category />} />
          <Route path='/product/:id' element={<ProductPage />} />
          <Route path='/search/:query' />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;
