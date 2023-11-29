import { Helmet } from "react-helmet-async";
import { Link, Outlet } from "react-router-dom";

const UserDashboard = () => {
  return (
    <div>
      <Helmet>
        <title>RapidRush | USER DASHBOARD</title>
      </Helmet>
      <div className="grid grid-cols-12 min-h-screen">
        <div className="col-span-2 bg-[#3b0032ea]">
          <ul className="menu w-full text-white">
            <li>
              <Link to={'/dashboard/booking'}>Book A Percel</Link>
            </li>
            <li>
              <Link to={'/dashboard/mybooking'}>My Percels</Link>
            </li>
            <li>
              <Link to={'/dashboard/profile'}>My Profile</Link>
            </li>
          </ul>
        </div>
        <div className="col-span-10 bg-neutral-200">
            <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
