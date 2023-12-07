import useAxiosSecure from '../../Components/Hooks/useAxiosSecure';
import useAuth from '../../Components/Hooks/useAuth';
import { useQuery } from '@tanstack/react-query';

const useAdmin = () => {
    const {user} = useAuth()
    const axiosSecure = useAxiosSecure();
    const {data: isAdmin, isPending: isAdminLoading} = useQuery({
        queryKey : [user?.email, "isAdmin"],
        queryFn : async()=>{
            const res = await axiosSecure.get(`/users/isadmin/${user.email}`)
            console.log(res.data);
            return res.data?.admin;
        }
    })
    return [isAdmin, isAdminLoading]
};

export default useAdmin;