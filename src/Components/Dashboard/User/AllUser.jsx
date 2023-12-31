import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const AllUser = () => {
  const axiosSecure = useAxiosSecure();
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/user/role-user");
      console.log(res.data);
      return res.data;
    },
  });

  const makeAdmin = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Make Admin",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.patch(`/user/makeAdmin/${id}`).then((res) => {
          if (res.data.modifiedCount > 0) {
            refetch();
          }
          console.log(res.data);
        });
        Swal.fire({
          title: "Done!",
          text: "Admin Request Approved",
          icon: "success",
        });
      }
    });
  };

  const makeDboy = (id) => {
    console.log(id);
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
          text: "Your file has been deleted.",
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
              {users.map((user, idx) => (
                <tr key={user?._id}>
                  <th>{idx + 1}</th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div>
                        <div className="font-bold">{user?.name}</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    {user && user?.phoneNumber
                      ? user?.phoneNumber
                      : "Not Found"}
                  </td>
                  <td>
                    {user && user.totalBooking
                      ? user.totalBooking
                      : "Not Found"}
                  </td>
                  <td>
                    {user && user.totalSpent ? user.totalSpent : "Not Found"}
                  </td>
                  <td>{user?.role.toUpperCase()}</td>
                  <td>
                    {user && (
                      <>
                        {user.role === "admin" && (
                          <>
                            <button
                              onClick={() => makeUser(user?._id)}
                              className="btn btn-ghost btn-xs"
                            >
                              Make User
                            </button>
                          </>
                        )}
                        {user.role === "user" && (
                          <>
                            <button
                              onClick={() => makeAdmin(user?._id)}
                              className="btn btn-ghost btn-xs"
                            >
                              Make Admin
                            </button>
                            <button
                              onClick={() => makeDboy(user?._id)}
                              className="btn btn-ghost btn-xs"
                            >
                              Delivery Boy
                            </button>
                          </>
                        )}
                        {user.role === "dBoy" && (
                          <>
                            <button className="btn btn-ghost btn-xs">
                              Make Admin
                            </button>
                            <button
                              onClick={() => makeUser(user?._id)}
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

export default AllUser;
