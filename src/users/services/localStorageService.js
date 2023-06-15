import jwtDecode from "jwt-decode";

const TOKEN="token";
export const setTokenInLocalStorage=(encryptedToken)=> localStorage.setItem(TOKEN,encryptedToken)

export const removeToken=()=> localStorage.removeItem(TOKEN)

//if an arrow function has no brackets, then it is returned by default
export const getToken=()=> localStorage.getItem(TOKEN)

export const getUser=()=>{
    try{const myToken = getToken();
    return jwtDecode(myToken);
    } catch(error){
        return null;
    }
}