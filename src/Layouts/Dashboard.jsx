import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";
import useAuth from "../Components/Hooks/useAuth";
import { ImSpinner9 } from "react-icons/im";
import UserDashboard from "../Components/Dashboard/User/UserDashboard";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
    const {loading} = useAuth()
  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <ImSpinner9 className="animate-spin text-6xl text-[#3b0032]" />
      </div>
    );
  }
  return (
    <div>
      <Navbar></Navbar>
      <div className="min-h-[calc(100vh-150px)]">
        <UserDashboard>
        </UserDashboard>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Dashboard;
