import { Helmet } from "react-helmet-async";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useAuth from "../../Hooks/useAuth";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyParcel = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const { refetch, data: parcels, } = useQuery({
    queryKey: ["parcels"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/bookings?email=${user.email}`);
        return res.data;
    },
  });

  const handleCancel = (id) => {
    console.log("got the id", id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/delete/${id}`).then((res) => {
          console.log(res.data);
          
          if(res.data.deletedCount > 0){
            refetch()
            
          }
        });
        Swal.fire({
          title: "Deleted!",
          text: "Your booking has been deleted.",
          icon: "success"
        });
      }
    });
    
  };
  return (
    <div>
      <Helmet>
        <title>RapidRush || My Percels</title>
      </Helmet>
      <h1 className="text-[#3b0032] text-4xl text-center mt-6 mb-6">
        My Bookings
      </h1>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="text-[10px]">
              <th></th>
              <th>Parcel Type</th>
              <th>Requested Delivery Date</th>
              <th>Approximate Delivery Date</th>
              <th>Booking Date</th>
              <th>Delivery Men ID</th>
              <th>Booking Status</th>
              <th>Action</th>
              <th>Payment</th>
            </tr>
          </thead>
          <tbody className="text-[11px]">
            {parcels?.map((parcel, idx) => (
              <tr key={parcel._id}>
                <th>{idx + 1}</th>
                <td>{parcel?.type.toUpperCase()}</td>
                <td>{parcel?.requestedTime}</td>
                <td>{parcel?.approxDelivery.split("T")[0]}</td>
                <td>{parcel?.bookingDate.split("T")[0]}</td>
                <td>{parcel?.deliveryManId}</td>
                <td>{parcel?.status.toUpperCase()}</td>
                <td>
                  {parcel?.status === "pending" ? (
                    <div>
                      <Link to={`/dashboard/update/${parcel?._id}`}>
                        <button className="btn btn-xs">Update</button>
                      </Link>
                      <button
                        onClick={() => handleCancel(parcel?._id)}
                        className="btn btn-xs"
                      >
                        Cancel
                      </button>
                    </div>
                  ) : (
                    <div>
                      <button className="btn btn-xs mr-1">Review</button>
                    </div>
                  )}
                </td>
                <td>
                  <button className="btn btn-xs mr-1">
                    Pay ${parcel?.price}
                  </button>
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

export default MyParcel;
