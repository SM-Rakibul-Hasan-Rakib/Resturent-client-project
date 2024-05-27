import axios from "axios";

export const axiousSecoure = axios.create({
  baseURL: "http://localhost:5000",
});

const useAxious = () => {
  return axiousSecoure;
};

export default useAxious;
