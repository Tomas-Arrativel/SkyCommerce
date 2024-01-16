import './App.css';
import {
  Banner,
  Categories,
  Footer,
  Navbar,
  SomeProducts,
} from './containers/exports';

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
      <Footer />
    </>
  );
}

export default App;
