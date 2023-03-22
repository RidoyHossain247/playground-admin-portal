
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutPage from './pages/About';
import Layout from './components/layout';
import Dashboard from './components/layout/dashborad';

function App() {
  return (
    <Router>
      <Layout>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
      </Layout>
  
  </Router>
  );
}

export default App;
