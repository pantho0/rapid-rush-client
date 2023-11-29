import { ImSpinner9 } from "react-icons/im";
import useAuth from "../../Components/Hooks/useAuth";
import { Children } from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({children}) => {
  const { user, loading } = useAuth();
  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <ImSpinner9 className="animate-spin text-6xl text-[#3b0032]" />
      </div>
    );
  }
  if(user){
    return children;
  }

  return <Navigate to={"/"}></Navigate>
};

export default PrivateRoute;
