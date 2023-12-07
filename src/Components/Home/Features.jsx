import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { GiDoorway } from "react-icons/gi";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import useAxiosPublic from "../Hooks/useAxiosPublic";

const Features = () => {
  const [features, setFeatures] = useState([]);
  const axiosPublic = useAxiosPublic();
  const {data:orders=[]} = useQuery({
      queryKey : ['orders'],
      queryFn : async()=>{
        const res = await axiosPublic.get('/bookings')
        return res.data;
      }
  })
  const {data:users=[]} = useQuery({
    queryKey : ['users'],
    queryFn : async()=>{
      const res = await axiosPublic.get('/users')
      return res.data;
    }
  })
  const {data:totalDelivery=[]} =useQuery({
    queryKey : ['totalDelivery'],
    queryFn : async()=>{
      const res = await axiosPublic.get("/totalDelivery")
      return res.data;
    }
  })
  useEffect(() => {
    fetch("features.json")
      .then((res) => res.json())
      .then((data) => {
        setFeatures(data);
      });
  }, []);
  console.log(features);
  return (
    <div className="space-y-20 my-20">
      <div className="max-w-fit mx-auto">
        <h2 className="font-ubuntu text-5xl text-center pb-8 text-[#3b0032] border-b-2 border-[#3b0032] border-dotted">
          Our Features
        </h2>
      </div>
      <div className="flex justify-evenly">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="overflow-hidden rounded-lg shadow-lg w-80"
          >
            <img className="w-full h-[200px] object-cover" src={feature.icons} alt="" />
            <div className="p-4 flex flex-col gap-2">
              <h3 className="text-xl font-semibold text-center">
                {feature.title}
              </h3>
              <div className="text-sm text-justify">
                <p>{feature.description}</p>
              </div>
              <div className="flex flex-col gap-2">
                <div className="badge badge-secondary w-full bg-[#3b0032] border-none">
                  Total Orders: {orders.length}
                </div>
                <div className="badge badge-secondary w-full bg-[#3b0032] border-none">
                  Total Deliveries: {totalDelivery.length}
                </div>
                <div className="badge badge-secondary w-full bg-[#3b0032] border-none">
                  Total Users: {users.length}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
