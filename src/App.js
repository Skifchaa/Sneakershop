import './App.css';
import { Header } from './Components/Header/Header';
import { NewProducts } from './Components/NewProducts/NewProducts';
import Brands from './Components/Brands/Brands';

function App() {
  return (
    <div>
      <Header />
      <div className='content'>
      <NewProducts />
      {/*<Brands /> */}
      </div>
    </div>
  );
}

export default App;
