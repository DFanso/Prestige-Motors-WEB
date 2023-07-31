import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Pages/Home';
import About from './components/Pages/About';
import ContactUs from './components/Pages/Contact';
import Collection from './components/Pages/Collection';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CarLearnMore from './components/Pages/Car-learn-more';
import ScrollToTop from './components/Pages/ScrollToTop';
import RestorationPage from './components/Pages/Restoration.js';

function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<ContactUs />} />
          <Route path='/collection' element={<Collection />} />
          <Route path='/car-learn-more' element={<CarLearnMore />} />
          <Route path='/restoration' element={<RestorationPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;