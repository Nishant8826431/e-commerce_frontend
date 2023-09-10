import React, { useEffect } from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';
import ProductList from './features/product-list/components/ProdutList';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';


import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  createHashRouter,
} from "react-router-dom";
import Cart from './features/cart/Cart';
import CartPage from './pages/CartPage';
import Checkout from './pages/Checkout';
import ProductDetail from './features/product-list/components/ProductsDetails';
import ProductDetailPage from './pages/ProductDetailPage';
import Protected from './features/auth/components/Protected';
import { useDispatch, useSelector } from 'react-redux';
import { fetchItemsByUserIdAsync } from './features/cart/cartSlice';
import { selectLoggedInUser } from './features/auth/authSlice';
import PageNotFound from './pages/404';
import OrderSuccessPage from './pages/OrderSuccessPage';

import UserOrderPage from './pages/UserOrderPage';
import UserProfile from './features/user/Components/UserProfile';
import UserProfilePage from './pages/UserProfilePage';
import { fetchLoggedInUserAsync } from './features/user/userSlice';
import LogOut from './features/auth/components/LogOut';
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import ProtectedAdmin from './features/auth/components/ProtectedAdmin';
import AdminHome from './pages/AdminHome';
import AdminProductDetailPage from './pages/AdminProductDetailPage';
import ProductForm from './features/Admin/components/ProductForm';
import AdminProductFormPage from './pages/AdminProductFormPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Protected>
    <Home></Home>

      </Protected>
    ),
  },
  {
    path: "/admin",
    element: (
      <ProtectedAdmin>
        <AdminHome></AdminHome>
      </ProtectedAdmin>
    ),
  },
  {
    path: "/admin/product-form",
    element: (
      <ProtectedAdmin>
        <AdminProductFormPage></AdminProductFormPage>
      </ProtectedAdmin>
    ),
  },
  {
    path: "/login",
    element: <LoginPage></LoginPage>,
  },
  {
    path: "/signup",
    element: <SignupPage></SignupPage>,
  },
  {
    path: "/cart",
    element: <Protected><CartPage></CartPage></Protected>,
  },
  {
    path: "/checkout",
    element: <Protected><Checkout></Checkout></Protected>,
  },
  {
    path: "/product-detail/:id",
    element: <Protected><ProductDetailPage></ProductDetailPage></Protected>,
  },
  {
    path: "/admin/product-detail/:id",
    element: <ProtectedAdmin><AdminProductDetailPage></AdminProductDetailPage></ProtectedAdmin>,
  },
  {
    path: "/orders",
    element: <UserOrderPage></UserOrderPage>
  },
  {
    path: "/profile",
    element: <UserProfilePage></UserProfilePage>
  },
  {
    path: "/logout",
    element: <LogOut></LogOut>
  },
  {
    path: "/forgot-password",
    element: <ForgotPasswordPage></ForgotPasswordPage>
  },
  
  
  {
    path: "/order-success/:id",
    element: <OrderSuccessPage></OrderSuccessPage>,
  },
  {
    path: "*",
    element: <PageNotFound></PageNotFound>,
  },

]);

function App() {
  const dispatch = useDispatch()
  const user = useSelector(selectLoggedInUser)

  useEffect(()=>{
    if(user){
    dispatch(fetchItemsByUserIdAsync(user.id))
    dispatch(fetchLoggedInUserAsync(user.id))

    }
  },[dispatch, user])
  return (
    <div className="App">
      {/* <Home></Home> */}
      {/* <LoginPage></LoginPage> */}
      
     
  <RouterProvider router={router} />

      {/* <SignupPage></SignupPage> */}
    </div>
  );
}

export default App;
