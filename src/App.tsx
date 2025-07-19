import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import WhyUsPage from './pages/WhyUsPage';
import PersonalTrainingPage from './pages/PersonalTrainingPage';
import OnlineTransformationPage from './pages/OnlineTransformationPage';
import ClientResultsPage from './pages/ClientResultsPage';
import ContactPage from './pages/ContactPage';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/why-us" element={<WhyUsPage />} />
          <Route path="/personal-training" element={<PersonalTrainingPage />} />
          <Route path="/online-transformation" element={<OnlineTransformationPage />} />
          <Route path="/client-results" element={<ClientResultsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;