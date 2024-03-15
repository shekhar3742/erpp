
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';



import Navbar from './Components/Navbar';
import Dashboard from './Components/Dashboard';
import Product from './Components/Product';
import Oders from './Components/Oders';
import Home from './Components/Home';

function App() {
  return (
   <>
   
  <Navbar/>
 
  <BrowserRouter>
    <Routes>
      <Route path='/home' element={<Home/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='/product' element={<Product/>}/>
      <Route path='/oders' element={<Oders/>}/>
    </Routes>
  </BrowserRouter>



  
  
   </>
  );
}

export default App;
