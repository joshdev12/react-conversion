import Footer from "./components/common/Footer";
import Navbar from "./components/common/Navbar";
import Fashion from "./components/pages/Fashion";
import Contact from "./components/pages/Contact";
import Home from "./components/pages/Home";
import Index from "./components/pages/Index";
import './bgstyle.css'
import './cnstyle.css'
import './hmstyle.css'
import './fhstyle.css'

import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />  
        <Routes>                
          <Route path='/' element={ <Index /> } />
          <Route path='/fashion' element={ <Fashion /> } />
          <Route path='/contact' element={ <Contact /> } />
          <Route path='/home' element={ <Home /> } />                
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App;
