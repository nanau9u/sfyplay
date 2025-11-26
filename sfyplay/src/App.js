import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MenuSelectionPage from './pages/MenuSelectionPage';
import BettingPage from './pages/BettingPage';
import MainDashboard from './pages/MainDashboard';
import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<MenuSelectionPage />} />
          <Route path="/betting" element={<BettingPage />} />
          <Route path="/dashboard" element={<MainDashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;