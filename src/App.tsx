import './App.css';
import { Banner, Categories, Navbar, SomeProducts } from './containers/exports';

function App() {
  return (
    <>
      <header>
        <Navbar />
        <Categories />
      </header>
      <main>
        <Banner />
        <SomeProducts />
      </main>
    </>
  );
}

export default App;
