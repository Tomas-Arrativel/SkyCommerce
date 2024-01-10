import './App.css';
import { Banner, Categories, Navbar } from './containers/exports';

function App() {
  return (
    <>
      <header>
        <Navbar />
        <Categories />
      </header>
      <main>
        <Banner />
      </main>
    </>
  );
}

export default App;
