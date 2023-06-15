import axios from "axios";
import { useEffect } from "react";
import { useSnack } from "../providers/SnackBarProvider";
import { useUser } from "../users/providers/UserProvider";

const useAxios = () => {
  const snack = useSnack();
  const { token } = useUser();

  useEffect(() => {
    //headers here is NOT our header! its a saved word in axios
    //x-auth-token is also in server
    //a header in this case means that it will be at the head of all
    //requests to/from server
    axios.defaults.headers.common["x-auth-token"] = token;
    const requestInterceptor = axios.interceptors.request.use((data) => {
      console.log("This log came from interceptor request");
      return Promise.resolve(data);
    }, null);

    const responseInterceptor = axios.interceptors.response.use(
      null,
      (error) => {
        console.log(error.message);
        snack("error", error.message);
        return Promise.reject(error);
      }
    );
    return () => {
      axios.interceptors.request.eject(requestInterceptor);
      axios.interceptors.response.eject(responseInterceptor);
    };
  }, [token]);
};

export default useAxios;
