import { Helmet } from "react-helmet-async";
import { Link, Outlet } from "react-router-dom";


const DeliveryManDashboard = () => {
    return (
        <div>
      <Helmet>
        <title>RapidRush | Delivery Man DASHBOARD</title>
      </Helmet>
      <div className="grid grid-cols-12 min-h-screen">
        <div className="col-span-2 bg-[#3b0032ea]">
          <ul className="menu w-full text-white">
            <li>
              <Link to={'/dashboard/deliveryList'}>My Delivery List</Link>
            </li>
            <li>
              <Link to={'/dashboard/reviews'}>My Reviews</Link>
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

export default DeliveryManDashboard;