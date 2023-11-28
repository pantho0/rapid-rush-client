import { Helmet } from "react-helmet-async";
import { Link, Outlet } from "react-router-dom";

const UserDashboard = () => {
  return (
    <div>
      <Helmet>
        <title>RapidRush | USER DASHBOARD</title>
      </Helmet>
      <div className="grid grid-cols-12 ">
        <div className="col-span-2 bg-[#3b0032ea] min-h-screen">
          <ul className="menu w-full text-white">
            <li>
              <Link to={'/dashboard/booking'}>Book A Percel</Link>
            </li>
            <li>
              <Link to={'/mybooking'}>My Percels</Link>
            </li>
            <li>
              <Link to={'/profile'}>My Profile</Link>
            </li>
          </ul>
        </div>
        <div className="col-span-10 bg-[#ebeaa9] min-h-screen">
            <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
