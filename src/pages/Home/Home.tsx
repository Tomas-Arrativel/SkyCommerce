import './Home.css';
import { Banner, SomeProducts } from '../../containers/exports';

function Home() {
  return (
    <>
      <main>
        <Banner />
        <SomeProducts />
      </main>
    </>
  );
}

export default Home;
