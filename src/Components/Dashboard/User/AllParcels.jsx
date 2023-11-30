import { Helmet } from "react-helmet-async";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { Link } from "react-router-dom";

const AllParcels = () => {
  const axiosSecure = useAxiosSecure();
  const { refetch, data: parcels } = useQuery({
    queryKey: ["parcels"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/bookings`);
      refetch();
      return res.data;
    },
  });

  return (
    <div>
      <Helmet>
        <title>RapidRush || ADMIN </title>
      </Helmet>
      <h1 className="text-[#3b0032] text-4xl text-center mt-6 mb-6">
        Manage Bookings
      </h1>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="text-[10px]">
              <th>#</th>
              <th>User’s Name</th>
              <th>User’s Phone</th>
              <th>Booking Date</th>
              <th>Requested Delivery Date</th>
              <th>Cost</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="text-[11px] font-bold">
            {parcels?.map((parcel, idx) => (
              <tr key={parcel._id}>
                <th className="bg-gray-300">{idx + 1}</th>
                <td className="bg-gray-200">{parcel?.name.toUpperCase()}</td>
                <td className="bg-gray-300">{parcel?.phone}</td>
                <td className="bg-gray-200">
                  {parcel?.bookingDate.split("T")[0]}
                </td>
                <td className="text-[#3b0032] text-center bg-gray-300">
                  {parcel?.requestedTime}
                </td>
                <td className="text-right text-[#3b0032] text-sm bg-gray-200">
                  {parcel?.price}
                </td>
                <td className="text-right text-[#3b0032] text-sm bg-gray-300">
                  {parcel?.status}
                </td>
                <td className="bg-gray-200">
                  <Link to={`/dashboard/assign/${parcel._id}`}><button className="btn btn-xs">Manage</button></Link>
                </td>
              </tr>
            ))}
            {/* row 1 */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllParcels;
