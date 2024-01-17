import { Route, Routes } from 'react-router-dom';

import './App.css';
import { Categories, Footer, Navbar } from './containers/exports';
import { Home } from './pages/exports';

function App() {
  return (
    <>
      <header>
        <Navbar />
        <Categories />
      </header>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
