import {
  createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";

import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";

import Dashboard from "../Layout/Dashboard";
import Cart from "../pages/Dashboard/Cart/Cart";
import AllUsers from "../pages/Dashboard/AllUsers/AllUsers";
import AddItems from "../pages/Dashboard/AddItems/AddItems";
import AdminRoute from "./AdminRoute";
import ManageItems from "../pages/Dashboard/MangeItem/ManageItem";
import UpdateItem from "../pages/Dashboard/Updateitem/Updateitem";
import Payment from "../pages/Dashboard/Payment/payment";
import PaymentHistory from "../pages/Dashboard/PaymaentHotory/PaymentHistory";
import Apartment from "../pages/Apartment/Apartment";
import Profile from "../pages/Shared/NavBar/Profile";
import Makepayment from "../pages/Dashboard/Makepayment/Makepayment";
import MakeAnnouncement from "../pages/Dashboard/MakeAnnouncement/MakeAnnouncement";
import UserAnnouncement from "../pages/Dashboard/UserAnnouncement/UserAnnouncement";
import AdminHome from "../pages/Dashboard/AdminHome/AdminHome";
import Errorpage from "../Layout/Errorpage";
import Contact from "../pages/Dashboard/ContactPage/Contact";
import Agreement_requests from "../pages/Dashboard/Agreement_requests/Agreement_requests";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Errorpage></Errorpage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'Apartment',
        element: <Apartment></Apartment>
      },

   
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'userProfile',
        element: <Profile></Profile>
      },
      {
        path: 'signup',
        element: <SignUp></SignUp>
      },

    ]
  },
  {
    path: 'dashboard',
    element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children: [
      {
        path: 'cart',
        element: <Cart></Cart>
      },
      {
        path: 'contact',
        element: <Contact></Contact>
      },
      {
        path: 'makepayment',
        element: <Makepayment></Makepayment>
      },
      {
        path: 'UserAnnouncement',
        element: <UserAnnouncement></UserAnnouncement>
      },
      {
        path: 'adminHome',
        element: <AdminRoute><AdminHome></AdminHome></AdminRoute>
      },
      {
        path: 'makeAnnouncement',
        element: <AdminRoute>  <MakeAnnouncement></MakeAnnouncement>  </AdminRoute>
      },

      // admin routes
      {
        path: 'manageItems',
        element: <AdminRoute>  <ManageItems></ManageItems> </AdminRoute>
      },
      {
        path: 'Agreement_requests',
        element: <AdminRoute>  <Agreement_requests></Agreement_requests> </AdminRoute>
      },
      {
        path: 'payment',
        element: <Payment></Payment>
      },
      {
        path: 'paymentHistory',
        element: <PaymentHistory></PaymentHistory>
      },
      {
        path: 'addItems',
        element: <AdminRoute>  <AddItems></AddItems> </AdminRoute>
      },
      {
        path: 'updateItem/:id',
        element: <AdminRoute><UpdateItem></UpdateItem></AdminRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/menu/${params.id}`)
      },
      {
        path: 'users',
        element: <AdminRoute> <AllUsers></AllUsers> </AdminRoute>
      }

    ]
  }
]);