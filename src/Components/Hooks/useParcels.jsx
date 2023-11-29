import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";


const useParcels = () => {
    const axiosSecure = useAxiosSecure();
    const {data:parcels=[], isPending:loading, refetch} = useQuery({
        queryKey: ['parcels'],
        queryFn: async () => {
            const res = await axiosSecure.get("bookings")
            return res.data;
        }
    })
    return [parcels, loading, refetch];
};

export default useParcels;