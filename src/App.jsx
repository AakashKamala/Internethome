import './App.css'

import { Routes, Route } from 'react-router-dom';

import Nav from "./components/Nav"


//pages
import Home from './pages/Home';
// import About from './pages/About';
// import Contact from './pages/Contact';
// import Error from './pages/Error';
import Products from './pages/Products';
import InternetHome from './pages/InternetHome';
// import Resume from './pages/Resume';



export default function App() {
  return (
    <main>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} /> */}
        {/* <Route path="/contact" element={<Contact />} /> */}
        <Route path="/products" element={<Products />} />
        <Route path="/internethome" element={<InternetHome />} />
        {/* <Route path="/resume" element={<Resume />} /> */}
      </Routes>
    </main>
  )
}
