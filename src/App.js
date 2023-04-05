import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CategoriesList from './pages/categories/CategoriesList';
import CategoriesAdd from './pages/categories/CategoriesAdd';
import Login from './pages/login';
import Register from './pages/register';
import Layout from './components/layout';
import { useStoreState } from 'easy-peasy'
import SizeList from "./pages/size/SizeList"
import SizeAdd from "./pages/size/SizeAdd"
import SizeEdit from "./pages/size/SizeEdit"

const PublicRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  )
}


const PrivateRoute = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/categories/categories-list" element={<CategoriesList />} />
        <Route path="/categories/categories-add" element={<CategoriesAdd />} />
        <Route path="/size/size-list" element={<SizeList/>} />
        <Route path="/size/size-add" element={<SizeAdd/>} />
        <Route path="/size/size-edit/:id" element={<SizeEdit/>} />
      </Routes>
    </Layout>
  )
}


function App() {
  const authState = useStoreState((state) => state.auth.isAuth)
  const isAuth = authState;

  return (
    <Router>
      {isAuth ? <PrivateRoute /> : <PublicRoute />}
    </Router>
  );
}

export default App;
