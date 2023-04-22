
import './App.css';

import Slide from './componets/slider';
import Footer from './componets/footer';
import Navbar1 from './componets/navbar';
import { BrowserRouter , Route, Routes } from 'react-router-dom';
import Index from './componets/index';

function App() {
  return (
    
    <BrowserRouter>
      
        <Navbar1/>
        
        
        <Routes>
          <Route path='/' Component={Index} />
          <Route path='/slide' Component={Slide}/>
        </Routes>

        <Footer/>
    </BrowserRouter>
  );
}

export default App;
