import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LandingPage, ProductionPage } from '@pages';
import './i18n';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/products" element={<ProductionPage />} />
      </Routes>
    </Router>
  );
};

export default App;
