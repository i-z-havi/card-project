import { useState, useCallback, useMemo } from "react";
import useAxios from "../../hooks/useAxios";
import {
  getUser,
  removeToken,
  setTokenInLocalStorage,
} from "../services/localStorageService";
import { useUser } from "../providers/UserProvider";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../routes/routesModel";
import { getUserData, login, signup, updateUser } from "../services/userApiService";
import normalizeUser from "../helpers/normalization/normalizeUser";
import { useSnack } from "../../providers/SnackBarProvider";


const useUsers = () => {
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const snack = useSnack();
  const navigate = useNavigate();
  //useUser is from UserProvider, NOT from useUsers hook!
  const { user, setUser, setToken } = useUser();

  useAxios();

  const requestStatus = useCallback(
    (loading, errorMessage, user = null) => {
      setLoading(loading);
      setUser(user);
      setError(errorMessage);
    },
    [setUser]
  );

  const handleLogin = useCallback(async (user) => {
    try {
      const token = await login(user);
      //vvvsets token in local storage vvv
      setTokenInLocalStorage(token);
      //vvv re-renders according to token vvv
      setToken(token);
      const userFromLocalStorage = getUser();
      requestStatus(false, null, userFromLocalStorage);
      navigate(ROUTES.CARDS);
    } catch (error) {
      requestStatus(false, error, null);
    }
  }, []);

  const handleSignup = useCallback(
    async (userFromTheClient) => {
      try {
        const normalizedUser = normalizeUser(userFromTheClient);
        await signup(normalizedUser);
        await handleLogin({
          email: userFromTheClient.email,
          password: userFromTheClient.password,
        });
      } catch (error) {
        requestStatus(false, error, null);
      }
    },
    [normalizeUser, handleLogin, requestStatus]
  );


  const handleGetUser = useCallback(async () => {
    try {
      setLoading(true);
      const user = await getUserData();
      requestStatus(false, null, user);
      return user;
    } catch (error) {
      requestStatus(false, error, null);
    }
  }, []);

  const handleUpdateUser = useCallback(async (updatedUser) => {
    try {
      setLoading(true);
      console.log(updatedUser.isBusiness);
      const user = await updateUser(updatedUser.user_id, updatedUser);
      requestStatus(false, null, user);
      snack("success", "The user has been successfully updated");
    } catch (error) {
      requestStatus(false, error, null);
    }
  }, []);


  const handleLogout = useCallback(() => {
    removeToken();
    setUser(null);
  }, [setUser]);

  const value = useMemo(
    () => ({ isLoading, error, user }),
    [isLoading, error, user]
  );



  return {
    value,
    handleLogin,
    handleLogout,
    handleSignup,
    handleGetUser,
    handleUpdateUser
  };
};

export default useUsers;
