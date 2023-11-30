import { useEffect, useState } from "react";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

const AssignDeliveryMan = () => {
    const {id} = useParams()
    console.log(id);
  const [dBoys, setdBoys] = useState([]);
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate()
  const { refetch, data: parcels } = useQuery({
    queryKey: ["parcels"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/bookings`);
      return res.data;
    },
  });


  useEffect(() => {
    axiosSecure.get("/deliveryMan").then((res) => {
      console.log(res.data);
      setdBoys(res.data);
    });
  }, []);

  const handleAssign = async(e) =>{
    e.preventDefault()
    const form = e.target;
    const deliveryManID = form.id.value;
    const deliveryDate = form.date.value;
    console.log(deliveryManID, deliveryDate);
    const info = {
        deliveryManID,
        deliveryDate
    }
    const res = await axiosSecure.patch(`/assign/${id}`, info)
    console.log(res.data);
    console.log(res.data);
    if(res?.data.modifiedCount>0){
        refetch();
        navigate('/dashboard/allParcels')
    }
  }

  return (
    <div className="text-center"> 
      <h2 className="text-3xl text-[#3b0032] text-center mt-8">
        Assign Delivery Man
      </h2>
      <div className="w-1/2 mx-auto mt-8">
        <form onSubmit={handleAssign}>
          <select name="id" className="select select-bordered w-full">
            <option disabled selected>
              Select Delivery Man Id
            </option>
            {dBoys.map((dBoy) => (
              <option key={dBoy._id}>
               {dBoy._id}
              </option>
            ))}
          </select>
          <input type="date" name="date" placeholder="Type here" className="input input-bordered w-full mt-4" />
          <br />
          <input className="btn btn-xl mt-6" type="submit" value="Assign" />
        </form>
      </div>
    </div>
  );
};

export default AssignDeliveryMan;
