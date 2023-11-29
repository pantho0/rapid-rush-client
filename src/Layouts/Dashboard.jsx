import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";
import useAuth from "../Components/Hooks/useAuth";
import { ImSpinner9 } from "react-icons/im";
import UserDashboard from "../Components/Dashboard/User/UserDashboard";
import useRole from "../Components/Hooks/useRole";
import AdminDashboard from "../Components/Dashboard/User/AdminDashboard";

const Dashboard = () => {
  const { loading } = useAuth();
  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <ImSpinner9 className="animate-spin text-6xl text-[#3b0032]" />
      </div>
    );
  }
  const [role] = useRole();
  const loggedUserRole = role?.role;
  console.log(loggedUserRole);
  return (
    <div>
      <Navbar></Navbar>
      <div className="min-h-screen">
        {loggedUserRole && loggedUserRole === "user" && (
          <UserDashboard></UserDashboard>
        )}
        {loggedUserRole && loggedUserRole === "admin" && (
          <AdminDashboard></AdminDashboard>
        )}
        {loggedUserRole && loggedUserRole === "dBoy" && (
          <UserDashboard></UserDashboard>
        )}
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Dashboard;
