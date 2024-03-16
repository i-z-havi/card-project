import jwtDecode from "jwt-decode";

const TOKEN = "token";
export const setTokenInLocalStorage = (encryptedToken) =>
  localStorage.setItem(TOKEN, encryptedToken);

  
  export const getUser = () => {
    try {
      const myToken = localStorage.getItem(TOKEN);
      const userDetails = jwtDecode(myToken);
      userDetails.isBusiness = userDetails.isBusiness === "True";
      userDetails.isAdmin = userDetails.isAdmin === "True"
      return userDetails;
    } catch (error) {
      return null;
    }
  };
  
  export const removeToken = () => localStorage.removeItem(TOKEN);
  
  export const getToken = () => localStorage.getItem(TOKEN);