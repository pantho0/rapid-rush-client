import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../Hooks/useAxiosSecure";

const TopDeliveryMan = () => {
  const axiosSecure = useAxiosSecure();
  const { data: deliveryMans = [] } = useQuery({
    queryKey: ["deliveryMans"],
    queryFn: async () => {
      const res = await axiosSecure.get("user/role-dBoy");
      console.log(res.data);
      return res.data;
    },
  });
  return (
    <div>
      <div className="max-w-fit mx-auto">
        <h2 className="w-1/2 mx-auto first-letter:font-ubuntu text-5xl text-center pb-8 text-[#3b0032] border-b-2 border-[#3b0032] border-dotted">
          Top 5 Delivery Man
        </h2>
        <div className="grid grid-cols-3 gap-4 mt-8">
          {deliveryMans.map((deliveryMan) => (
            <div
              key={deliveryMan._id}
              className="overflow-hidden rounded-lg shadow-lg w-80"
            >
              <img
                className="w-full h-[200px] object-cover"
                src={deliveryMan?.photo}
                alt=""
              />
              <div className="p-4 flex flex-col gap-2">
                <h3 className="text-xl font-semibold text-center">
                  {deliveryMan?.name}
                </h3>

                <div className="flex flex-col gap-2">
                  <div className="badge badge-secondary w-full bg-[#3b0032] border-none">
                    Total Parcel Delivered: {}
                  </div>
                  <div className="flex justify-center rating rating-md">
                    <input
                      type="radio"
                      name="rating-6"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-6"
                      className="mask mask-star-2 bg-orange-400"
                      checked
                    />
                    <input
                      type="radio"
                      name="rating-6"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-6"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-6"
                      className="mask mask-star-2 bg-orange-400"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopDeliveryMan;
