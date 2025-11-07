import './App.css';
import { Header } from './Components/Header/Header';
import { NewProducts } from './Components/NewProducts/NewProducts';
import Brands from './Components/Brands/Brands';
import Mens from './Components/Mens/Mens';
import Womens from './Components/Womens/Womens';
import Accessories from './Components/Accessories/Accessories';
import {  Route, Routes } from 'react-router-dom';


function App(props) {
 

  return (
    
    <div>
      <Header />
      <div className='content'>
      <Routes>
      <Route path='/NewProducts' element={<NewProducts state={props.state.newProductsPage} addComment={props.addComment} />} />
      <Route path='/Brands' element={<Brands />} />
      <Route path='/Mens' element={<Mens state={props.state.mensPage} />} />
      <Route path='/Womens' element={<Womens />} />
      <Route path='/Accessories' element={<Accessories state={props.state.accessoriesPage} />} />
      </Routes>
      </div>
    </div>
    
  );
}

export default App;
