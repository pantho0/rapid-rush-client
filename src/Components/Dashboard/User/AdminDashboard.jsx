import { Helmet } from "react-helmet-async";
import { Link, Outlet } from "react-router-dom";

const AdminDashboard = () => {
  return (
    <div>
      <Helmet>
        <title>RapidRush | DASHBOARD</title>
      </Helmet>
      <div className="grid grid-cols-12 min-h-screen">
        <div className="col-span-2 bg-[#3b0032ea]">
          <ul className="menu w-full text-white">
            <li>
              <Link to={'/dashboard/statistics'}>Statistics</Link>
            </li>
            <li>
              <Link to={'/dashboard/allParcels'}>All Parcels</Link>
            </li>
            <li>
              <Link to={'/dashboard/allUsers'}>All Users</Link>
            </li>
            <li>
              <Link to={'/dashboard/allDeliveryMan'}>All Delivery Man</Link>
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

export default AdminDashboard;
