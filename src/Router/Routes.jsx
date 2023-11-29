
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import Dashboard from "../Layouts/Dashboard";
import Booking from "../Components/Dashboard/User/Booking";
import MyParcel from "../Components/Dashboard/User/MyParcel";
import UpdateParcel from "../Components/Dashboard/User/UpdateParcel";
import useAxiosSecure from "../Components/Hooks/useAxiosSecure";
import PrivateRoute from "./Private/PrivateRoute";
import Profile from "../Pages/Profile/Profile";
import AllParcels from "../Components/Dashboard/User/AllParcels";
import AllUser from "../Components/Dashboard/User/AllUser";

const axiosSecure = useAxiosSecure()

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children : [
        {
          path: "/",
          element : <Home></Home>
        },
        {
          path: "/register",
          element: <Register></Register>

        },
        {
          path : "/login",
          element: <Login></Login>
        },
    
      ]
    },
    {
      path: "/dashboard",
      element : <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      children : [
        {
          path : "booking",
          element: <PrivateRoute><Booking></Booking></PrivateRoute>
        },
        {
          path : "mybooking",
          element : <PrivateRoute> <MyParcel></MyParcel></PrivateRoute>
        },
        {
          path : "update/:id",
          element : <PrivateRoute><UpdateParcel></UpdateParcel></PrivateRoute>,
          loader : ({params}) => axiosSecure.get(`/update/${params.id}`)
        },
        {
          path : "profile",
          element : <Profile></Profile>
        },
        {
          path : "allParcels",
          element: <AllParcels></AllParcels>
        },
        {
          path : "allUsers",
          element : <AllUser></AllUser>
        }
      ]
    }
  ]);


export default router;
