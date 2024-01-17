import { Route, Routes } from 'react-router-dom';

import './App.css';
import { Categories, Footer, Navbar } from './containers/exports';
import { Category, Home } from './pages/exports';
import NotFound from './pages/NotFound/NotFound';

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
          <Route path='*' element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;
