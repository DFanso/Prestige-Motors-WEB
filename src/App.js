import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Pages/Home';
import About from './components/Pages/About';
import ContactUs from './components/Pages/Contact';
import Collection from './components/Pages/Collection';
import CarLearnMore from './components/Pages/Car-learn-more';
import RestorationPage from './components/Pages/Restoration';
import ResLearnMore from './components/Pages/res-learn-more';
import NotFound from './components/Pages/NotFound'; // Import the NotFound component
import CustomRouteWrapper from './components/Pages/CustomRouteWrapper'; // Import the custom wrapper

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<CustomRouteWrapper path='/'><Home /></CustomRouteWrapper>} />
        <Route path='/about' element={<CustomRouteWrapper path='/about'><About /></CustomRouteWrapper>} />
        <Route path='/contact' element={<CustomRouteWrapper path='/contact'><ContactUs /></CustomRouteWrapper>} />
        <Route path='/collection' element={<CustomRouteWrapper path='/collection'><Collection /></CustomRouteWrapper>} />
        <Route path='/car-learn-more/:id' element={<CustomRouteWrapper path='/car-learn-more/:id'><CarLearnMore /></CustomRouteWrapper>} />
        <Route path='/res-learn-more/:id' element={<CustomRouteWrapper path='/res-learn-more/:id'><ResLearnMore /></CustomRouteWrapper>} />
        <Route path='/restoration' element={<CustomRouteWrapper path='/restoration'><RestorationPage /></CustomRouteWrapper>} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
