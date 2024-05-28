import { useQuery } from "@tanstack/react-query";
import useAxious from "./useAxious";

// import useAxious from "./useAxious";

const axiousSecoure = useAxious();

const useCarts = () => {
  // tan stack query
  const { data: cart = [] } = useQuery({
    queryKey: ["cart"],
    queryFn: async () => {
      const res = await axiousSecoure.get("/carts");
      return res.data;
    },
  });
  return [cart];
};

export default useCarts;
