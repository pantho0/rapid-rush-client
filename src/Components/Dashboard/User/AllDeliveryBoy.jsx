import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const AllDeliveryBoy = () => {
  const axiosSecure = useAxiosSecure();
  const { data: deliveryBoys = [], refetch } = useQuery({
    queryKey: ["deliveryBoys"],
    queryFn: async () => {
      const res = await axiosSecure.get("/user/role-dBoy");
      console.log(res.data);
      return res.data;
    },
  });
  const makeUser = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Make User",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.patch(`/user/makeUser/${id}`).then((res) => {
          console.log(res.data);
          if (res.data.modifiedCount > 0) {
            refetch();
          }
        });
        Swal.fire({
          title: "Success!",
          text: "Request Approved",
          icon: "success",
        });
      }
    });
  };
  const makeDboy = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Make Delivery Boy",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.patch(`/user/makedBoy/${id}`).then((res) => {
          console.log(res.data);
          if (res.data.modifiedCount > 0) {
            refetch();
          }
        });
        Swal.fire({
          title: "Success!",
          text: "Request Approved",
          icon: "success",
        });
      }
    });
  };
  return (
    <div>
      <h2 className="text-center text-3xl mt-4 text-[#3b0032]">All users</h2>
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>User Name</th>
                <th>Phone Number</th>
                <th>Total Booked Parcel</th>
                <th>Total Spent Amount</th>
                <th>Current Role</th>
                <th>Action</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {deliveryBoys.map((deliveryBoy, idx) => (
                <tr key={deliveryBoy?._id}>
                  <th>{idx + 1}</th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div>
                        <div className="font-bold">{deliveryBoy?.name}</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    {deliveryBoy && deliveryBoy?.phoneNumber
                      ? deliveryBoy?.phoneNumber
                      : "Not Found"}
                  </td>
                  <td>
                    {deliveryBoy && deliveryBoy.totalBooking
                      ? deliveryBoy.totalBooking
                      : "Not Found"}
                  </td>
                  <td>
                    {deliveryBoy && deliveryBoy.totalSpent
                      ? deliveryBoy.totalSpent
                      : "Not Found"}
                  </td>
                  <td>{deliveryBoy?.role.toUpperCase()}</td>
                  <td>
                    {deliveryBoy && (
                      <>
                        {deliveryBoy.role === "admin" && (
                          <>
                            <button
                              onClick={() => makeUser(deliveryBoy?._id)}
                              className="btn btn-ghost btn-xs"
                            >
                              Make User
                            </button>
                          </>
                        )}
                        {deliveryBoy.role === "user" && (
                          <>
                            <button
                              onClick={() => makeAdmin(deliveryBoy?._id)}
                              className="btn btn-ghost btn-xs"
                            >
                              Make Admin
                            </button>
                            <button
                              onClick={() => makeDboy(deliveryBoy?._id)}
                              className="btn btn-ghost btn-xs"
                            >
                              Delivery Boy
                            </button>
                          </>
                        )}
                        {deliveryBoy.role === "dBoy" && (
                          <>
                            <button className="btn btn-ghost btn-xs">
                              Make Admin
                            </button>
                            <button
                              onClick={() => makeUser(deliveryBoy?._id)}
                              className="btn btn-ghost btn-xs"
                            >
                              Make User
                            </button>
                          </>
                        )}
                      </>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllDeliveryBoy;
