import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import BusDetailPage from './pages/BusDetailPage';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/bus1" element={<BusDetailPage />} />
        <Route path="/bus2" element={<BusDetailPage />} />
        <Route path="/bus3" element={<BusDetailPage />} />
      </Routes>
    </Router>
  );
}

export default App;
