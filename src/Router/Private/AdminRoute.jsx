
import useAdmin from "../../Components/Hooks/useAdmin";
import useAuth from "../../Components/Hooks/useAuth";
import { Navigate } from "react-router-dom";

const AdminRoute = ({children}) => {
  const { isAdmin, isAdminLoading } = useAdmin();
  const { user, loading } = useAuth();
  if (loading || isAdminLoading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <ImSpinner9 className="animate-spin text-6xl text-[#3b0032]" />
      </div>
    );
  }
  if(user && isAdmin){
    return children;
  }
  return <Navigate to={'/'}></Navigate>;
};

export default AdminRoute;
