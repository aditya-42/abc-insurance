import './App.css';
import Home from "../src/components/pages/Home";
import About from "../src/components/pages/About";
import Product from "../src/components/pages/Product";
import Contact from "../src/components/pages/Contact";
import Navbar from "./components/inc/Navbar";
import Footer from './components/inc/Footer'; 

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './components/pages/Login';


function App() {
  return (
    <div className='App'>
      <Router>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/product' element={<Product />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/login' element={<Login />}></Route>
      </Routes>
      <Footer />
    </Router>

    </div>
    
  );
}

export default App;
