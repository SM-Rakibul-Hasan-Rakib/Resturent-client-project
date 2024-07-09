import { useQuery } from "@tanstack/react-query";
import useAxious from "./useAxious";
import useAuth from "./useAuth";
// import useAxious from "./useAxious";p

const useCarts = () => {
  // tan stack query
  const axiousSecoure = useAxious();
  const { user } = useAuth();
  const { refetch, data: cart = [] } = useQuery({
    queryKey: ["cart", user?.email],
    queryFn: async () => {
      const res = await axiousSecoure.get(`/carts?email=${user?.email}`);
      console.log(res.data);

      return res.data;
    },
  });
  return [cart, refetch];
};

export default useCarts;
