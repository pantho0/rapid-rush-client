
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
      element : <Dashboard></Dashboard>,
      children : [
        {
          path : "booking",
          element: <Booking></Booking>
        },
        {
          path : "mybooking",
          element : <MyParcel></MyParcel>
        },
        {
          path : "update/:id",
          element : <UpdateParcel></UpdateParcel>,
          loader : ({params}) => axiosSecure.get(`/update/${params.id}`)
        }
      ]
    }
  ]);


export default router;
