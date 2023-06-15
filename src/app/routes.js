
import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Account from '../components/account';
import DashboardCard from '../components/dashboard-card';
import Layout from '../components/layout';
import useAuth from '../hooks/useAuth';
import PageNotFound from '../pages/404';
import AboutPage from '../pages/abouts';
import ForgotPasswordPage from '../pages/auth/forgot-password';
import ResetPasswordPage from '../pages/auth/reset-password';
import SignInPage from '../pages/auth/signin';
import SignUpPage from '../pages/auth/signup';
import VerifyEmailPage from '../pages/auth/verify-email';
import CategoryAdd from "../pages/category/category-add";
import CategoryEdit from '../pages/category/category-edit';
import CategoryList from "../pages/category/category-list";
import ColorAdd from "../pages/color/color-add";
import UpdateColor from '../pages/color/color-edit';
import ColorList from '../pages/color/color-list';
import Orders from '../pages/orders/orders';
import ProductAdd from '../pages/product/product-add';
import ProductEdit from '../pages/product/product-edit';
import ProductList from '../pages/product/product-list';
import ReviewList from '../pages/review/review-list';
import SizeAdd from '../pages/size/size-add';
import UpdateSize from '../pages/size/size-edit';
import SizeList from '../pages/size/size-list';
import SubcategoryAdd from '../pages/subcategories/subcategory-add';
import UpdateSubcategory from '../pages/subcategories/subcategory-edit';
import SubcategoryList from '../pages/subcategories/subcategory-list';
import AddUser from '../pages/user/user-add';
import UpdateUser from '../pages/user/user-edit';
import UserList from '../pages/user/user-list';




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
            <Route path="/category/add" element={<CategoryAdd />} />
            <Route path="/category/list" element={<CategoryList />} />
            <Route path="/category/edit/:id" element={<CategoryEdit />} />
            <Route path="/signin" element={<SignInPage />} />
            <Route path="/forgot-password" element={<ForgotPasswordPage />} />
            <Route path="/verify-email" element={<VerifyEmailPage />} />
            <Route path="/reset-password" element={<ResetPasswordPage />} />
            <Route path="/color/add" element={<ColorAdd />} />
            <Route path="/color/list" element={<ColorList />} />
            <Route path='/color/edit/:id' element={<UpdateColor />} />
            <Route path="/subcategory/add" element={<SubcategoryAdd />} />
            <Route path="/subcategory/list" element={<SubcategoryList />} />
            <Route path='/subcategory/edit/:id' element={<UpdateSubcategory />} />
            <Route path='*' element={<PageNotFound />} />
            <Route path='/size/add' element={<SizeAdd />} />
            <Route path='/size/list' element={<SizeList />} />
            <Route path='/size/edit/:id' element={<UpdateSize />} />
            <Route path='/user/add' element={<AddUser />} />
            <Route path='/user/list' element={<UserList />} />
            <Route path='/user/edit/:id' element={<UpdateUser />} />
            <Route path='/product/add' element={<ProductAdd />} />
            <Route path='/product/list' element={<ProductList />} />
            <Route path='/product/edit/:id' element={<ProductEdit />} />
            <Route path='/review/list' element={<ReviewList />} />
            <Route path='/order/list' element={<Orders />} />
            <Route path='/account' element={<Account />} />
         </Routes>
      </Layout>
   )
}

function AppRoutes() {
   const { isAuth } = useAuth()

   return isAuth ? <PrivetRoute /> : <PublicRoute />
}
export default AppRoutes; 