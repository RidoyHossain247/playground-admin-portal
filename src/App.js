
import React from 'react';
import { useStoreState } from 'easy-peasy';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutPage from './pages/about';
import DashboardCard from './components/dashboard-card';
import CategoryAdd from "./pages/category/category-add"
import CategoryList from "./pages/category/category-list"
import SubcategoryList from './pages/subcategories/subcategory-list';
import SubcategoryAdd from './pages/subcategories/subcategory-add';
import ColorAdd from "./pages/color/color-add"
import ColorList from './pages/color/color-list';
import SizeAdd from './pages/size/size-add';
import SizeList from './pages/size/size-list';
import Account from './components/account';
import Layout from './components/layout';
import SignInPage from './pages/auth/signin'
import SignUpPage from './pages/auth/signup'
import ForgotPasswordPage from './pages/auth/forgot-password'
import VerifyEmailPage from './pages/auth/verify-email'
import ResetPasswordPage from './pages/auth/reset-password';
import PageNotFound from './pages/404';
import CategoryEdit from './pages/category/category-edit';
import UpdateColor from './pages/color/color-edit';
import UpdateSubcategory from './pages/subcategories/subcategory-edit';
import UpdateSize from './pages/size/size-edit';
import AddUser from './pages/user/user-add';
import UserList from './pages/user/user-list';
import UpdateUser from './pages/user/user-edit';
import ProductAdd from './pages/product/product-add';
import ProductList from './pages/product/product-list';
import ReviewAdd from './pages/review/review-add';
import ProductEdit from './pages/product/product-edit';
import ReviewList from './pages/review/review-list';
import AllOrders from './pages/orders/all-orders';
import MyOrders from './pages/orders/my-orders';
import ReviewEdit from './pages/review/review-edit';




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
      <Route path='/color/edit/:id' element={<UpdateColor/>}/>
      <Route path="/subcategory/add" element={<SubcategoryAdd />} />
      <Route path="/subcategory/list" element={<SubcategoryList />} />
      <Route path='/subcategory/edit/:id' element={<UpdateSubcategory/>}/>
      <Route path='*' element={<PageNotFound />} />
      <Route path='/size/add' element={<SizeAdd />} />
      <Route path='/size/list' element={<SizeList />} />
      <Route path='/size/edit/:id' element={<UpdateSize />} />
      <Route path='/user/add' element={<AddUser/>}/>
      <Route path='/user/list' element={<UserList/>}/>
      <Route path='/user/edit/:id' element={<UpdateUser/>}/>
      <Route path='/product/add' element={<ProductAdd/>}/>
      <Route path='/product/list' element={<ProductList/>}/>
      <Route path='/product/edit/:id' element={<ProductEdit/>}/>
      <Route path='/review/add' element={<ReviewAdd/>}/>
      <Route path='/review/list' element={<ReviewList/>}/>
      <Route path='/review/edit/:id' element={<ReviewEdit/>}/>
      <Route path='/all-order/list' element={<AllOrders/>}/>
      <Route path='/my-order/list' element={<MyOrders/>}/>
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
      