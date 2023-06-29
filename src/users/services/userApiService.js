import axios from "axios";

const apiUrl = "http://localhost:8181";

//this is what interacts with backend 
export const login = async (user) => {
  try {     //axios.get RETRIEVES from backend, .post SENDS
    const { data } = await axios.post(`${apiUrl}/users/login`, user);
    console.log(data);
    return data;
  } catch (error) {
    return Promise.reject(error.message);
    //throw new Error(error.message);
  }
};

export const signup = async (normalizedUser) => {
  try {
    const { data } = await axios.post(`${apiUrl}/users`, normalizedUser);
    return data;
  } catch (error) {
    return Promise.reject(error.message);
  }
};


//this SHOULD work
export const getUser = async () => {
  try {
    const { data } = await axios.post(`${apiUrl}/user`);
    return data;
  } catch (error) {
    return Promise.reject(error.message);
  }
};