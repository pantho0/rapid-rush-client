import { useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";

const DeliveryList = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data:deliveryMan=[], isPending:loading } = useQuery({
    queryKey: ["deliveryMan"],
    queryFn:  async() => {
     const res = await axiosSecure.get(`/users/${user?.email}`)
        return res.data; 
      
    },
  });
  const [deliveryPerson] = deliveryMan;
  console.log(deliveryPerson);
  const {data:deliveryList = [], refetch:reMount} = useQuery({
    queryKey : ["deliveryList", deliveryPerson?._id],
    queryFn : async()=>{
      const res = await axiosSecure.get(`/deliverList/${deliveryPerson?._id}`)
      return res.data;
    }
  })

 
  const cancelOrder = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes"
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.patch(`/deliveryMan/cancel/${id}`)
        .then(res=>{
        console.log(res.data);
    })
        Swal.fire({
          title: "Deleted!",
          text: "Your order has been canceled.",
          icon: "success"
        });
      }
    });
    
  }

  const confirmOrder = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Confirm Delivery"
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.patch(`/deliveryMan/confirm/${id}`)
    .then(res=>{
        console.log(res.data);
    })
        Swal.fire({
          title: "Deleted!",
          text: "Your order has been delivered.",
          icon: "success"
        });
      }
    });
    
  }

  return (
    <div>
      <h2 className="text-center text-3xl text-[#3b0032] mt-8">
        All Assigned Orders
      </h2>
      {
        loading ? <div className="flex justify-center items-center h-[50vh]">
          <progress className="progress w-56"></progress>
          </div>
        :
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
                    deliveryList.map((order, idx) =><tr className="text-center" key={order._id}>
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
      }
      
    </div>
  );
};

export default DeliveryList;