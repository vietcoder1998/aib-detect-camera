import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LandingPage, ProductionPage } from '@pages';
import { Loader2 } from 'lucide-react';
import './i18n';

const LoadingSpinner: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-50 to-red-50">
      <div className="flex flex-col items-center gap-4">
        <Loader2
          className="w-12 h-12 text-red-600 animate-spin"
          strokeWidth={2}
        />
        <p className="text-gray-600 font-medium">Loading...</p>
      </div>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/products" element={<ProductionPage />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
