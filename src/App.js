import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home';
import AboutPage from './pages/About';
import List from './components/form-list/AddList';
import Add from './components/form-list/AddForm';
import Layout from './components/layout';
import store from './store';
import { StoreProvider } from 'easy-peasy';
import SignInPage from './pages/Auth/signin'
import SignUpPage from './pages/Auth/signup'
import ForgotPasswordPage from './pages/Auth/forgot-password'
import VerifyEmailPage from './pages/Auth/verify-email'
import ResetPasswordPage from './pages/Auth/reset-password';
import PageNotFound from './pages/404';
import { useStoreState } from 'easy-peasy';

const PublicRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<SignInPage />} />
      <Route path="/signup" element={<SignUpPage />} />
    </Routes>
  )
}
const PrivetRoute = () => {
  return (

    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/list" element={<List />} />
        <Route path="/add" element={<Add />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/verify-email" element={<VerifyEmailPage />} />
        <Route path="/reset-password" element={<ResetPasswordPage />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </Layout>

  )
}


function App() {


  const isAuth = useStoreState(state => state.auth.isAuth)

  // const isAuth = authAction

  return (
    <Router>

      {isAuth ? <PrivetRoute /> : <PublicRoute />}
    </Router >



  );
}

export default App;
