import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomePage from './pages/Home';
import AboutPage from './pages/About';
import SignInPage from './pages/Auth/signin'
import SignUpPage from './pages/Auth/signup'
import ForgotPasswordPage from './pages/Auth/forgot-password'
import VerifyEmailPage from './pages/Auth/verify-email'
import ResetPasswordPage from './pages/Auth/reset-password';
import PageNotFound from './pages/404';

function App() {
  return (
    <Router>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/verify-email" element={<VerifyEmailPage />} />
        <Route path="/reset-password" element={<ResetPasswordPage />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>

    </Router>
  );
}

export default App;
