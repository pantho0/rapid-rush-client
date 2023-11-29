import React, { useContext } from "react";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer/Footer";
import { Outlet } from "react-router-dom";
import { authContext } from "../Provider/AuthProvider/AuthProvider";
import { ImSpinner9 } from "react-icons/im";

const MainLayout = () => {
  const { loading } = useContext(authContext);
  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
          <ImSpinner9 className="animate-spin text-6xl text-[#3b0032]" />
      </div>

    );
  }
  return (
    <>
      <Navbar></Navbar>
      <div className="min-h-[calc(100vh-150px)]">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </>
  );
};

export default MainLayout;
