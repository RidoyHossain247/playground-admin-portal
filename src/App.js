
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home';
import AboutPage from './pages/About';
import List from './components/form-list/AddList';
import Add from './components/form-list/AddForm';
import Layout from './components/layout';
import store from './store';
import { StoreProvider } from 'easy-peasy';
import Dashboard from "./components/dashboard-card"

function App() {
  return (
    <StoreProvider store={store}>
      <Router>
        <Layout>
          <Routes>
            <Route path="/about" element={<AboutPage />} />
            <Route path="/list" element={<List />} />
            <Route path="/add" element={<Add />} />
            <Route path="/" element={<Dashboard />} />
          </Routes>
        </Layout>
      </Router>
    </StoreProvider>
  );
}

export default App;
