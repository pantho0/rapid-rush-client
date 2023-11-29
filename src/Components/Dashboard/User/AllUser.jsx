import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const AllUser = () => {
  const axiosSecure = useAxiosSecure();
  const { data: users = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      console.log(res.data);
      return res.data;
    },
  });

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
                    {user && user.phoneNumber ? user.phoneNumber : "Not Found"}
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
                            <button className="btn btn-ghost btn-xs">
                              Make User
                            </button>
                            <button className="btn btn-ghost btn-xs">
                              Delivery Boy
                            </button>
                          </>
                        )}
                        {user.role === "user" && (
                          <>
                            <button className="btn btn-ghost btn-xs">
                              Make Admin
                            </button>
                            <button className="btn btn-ghost btn-xs">
                            Delivery Boy
                            </button>
                          </>
                        )}
                        {user.role === "dBoy" && (
                          <>
                            <button className="btn btn-ghost btn-xs">
                            Make Admin
                            </button>
                            <button className="btn btn-ghost btn-xs">
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
