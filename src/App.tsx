import './App.css';
import { Categories, Navbar } from './containers/exports';

function App() {
  return (
    <main>
      <header>
        <Navbar />
        <Categories />
      </header>
    </main>
  );
}

export default App;
