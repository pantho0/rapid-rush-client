import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";


const useRole = () => {
    const {user} = useAuth()
    const axiosSecure = useAxiosSecure()

    const {data:role, isPending:loading} = useQuery({
        queryKey : [user?.email, "role"],
        queryFn: async() => {
            const res = await axiosSecure.get(`/user/role/${user?.email}`)
            console.log(res.data);
            return res.data;
        }
    })

    return [role, loading]
};

export default useRole;