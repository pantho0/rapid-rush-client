import { useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const DeliveryList = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [orders, setOrders] = useState([]);
  const { data: deliveryMan = [] } = useQuery({
    queryKey: ["deliveryMan"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/${user?.email}`);
      return res.data;
    },
  });

  const [deliveryPerson] = deliveryMan;
  console.log(deliveryPerson);
  useEffect(() => {
    axiosSecure.get(`/deliverList/${deliveryPerson?._id}`).then((res) => {
      console.log(res.data);
      setOrders(res.data);
    });
  }, []);

  const cancelOrder = (id) => {
    axiosSecure.patch(`/deliveryMan/cancel/${id}`)
    .then(res=>{
        console.log(res.data);
    })
  }

  const confirmOrder = (id) => {
    axiosSecure.patch(`/deliveryMan/confirm/${id}`)
    .then(res=>{
        console.log(res.data);
    })
  }

  return (
    <div>
      <h2 className="text-center text-3xl text-[#3b0032] mt-8">
        All Assigned Orders
      </h2>
      <div>
        <div className="overflow-x-auto">
          <table className="table table-xs">
            <thead>
              <tr className="text-center">
                <th></th>
                <th>Booked User</th>
                <th>Receiver's Name</th>
                <th>Booked User’s Phone</th>
                <th>Requested Delivery Date</th>
                <th>Approximate Delivery Date</th>
                <th>Reciever's phone number</th>
                <th>View Location</th>
                <th>Action</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
                {
                    orders.map((order, idx) =><tr className="text-center" key={order._id}>
                        <th>{idx+1}</th>
                        <td>{order?.name}</td>
                        <td>{order?.receiverName}</td>
                        <td>{order?.phone}</td>
                        <td>{order?.requestedTime}</td>
                        <td>{order?.approxDelivery.split("T")[0]}</td>
                        <td>{order?.receiverPhone}</td>
                        <td>{order?.receiverAddress}</td>
                        <td>
                        <button onClick={()=>cancelOrder(order?._id)} className="btn btn-link">Cancel</button>
                        </td>
                        <td>
                        <button onClick={()=>confirmOrder(order?._id)} className="btn btn-link">Sent</button>
                        </td>
                      </tr> )
                }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DeliveryList;