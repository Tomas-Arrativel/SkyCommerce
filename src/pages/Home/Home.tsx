import './Home.css';
import {
  Navbar,
  Categories,
  Banner,
  SomeProducts,
  Footer,
} from '../../containers/exports';

function Home() {
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

export default Home;
