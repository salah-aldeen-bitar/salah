
import './App.css';
import slide1 from "./slide1.jpg";
import Slide from './componets/slider';
import Footer from './componets/footer';
import Navbar1 from './componets/navbar';
import { BrowserRouter , Route, Routes } from 'react-router-dom';
import Index from './componets/index';

function App() {
  return (
    
    <BrowserRouter>
      <div className='app'>
        <Navbar1/>
        
        
        <Routes>
          <Route path='/' Component={Index} />
          <Route path='/slide' Component={Slide}/>
        </Routes>
        
        <Footer/>
        </div>
    </BrowserRouter>
  );
}

export default App;
