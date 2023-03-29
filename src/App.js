
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
import SizeAdd from './components/size/size-add';
import SizeList from './components/size/size-list';
import DashboardCard from './components/dashboard-card';
import Account from './components/account';

import ColorAdd from "../src/pages/Color/create-color"
import ColorList from './pages/Color/list-color';
import SubcategoryList from './pages/subcategories/subcategories-list';

import SubcategoryAdd from './pages/subcategories/create-subcategories';

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
        <Route path="/" element={<DashboardCard />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/list" element={<List />} />
        <Route path="/add" element={<Add />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/verify-email" element={<VerifyEmailPage />} />
        <Route path="/reset-password" element={<ResetPasswordPage />} />
      
        <Route path="/color-add" element={<ColorAdd />} />
        <Route path="/color-list" element={<ColorList />} />
        <Route path="/subcategory-list" element={<SubcategoryList />} />
        <Route path="/subcategory-add" element={<SubcategoryAdd />} />

        <Route path='*' element={<PageNotFound />} />
        <Route path='/size-add' element={<SizeAdd />} />
        <Route path='/size-list' element={<SizeList />} />
        <Route path='/account' element={<Account />} />
     
      
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
