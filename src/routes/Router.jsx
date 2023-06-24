import React from "react";
import { Route, Routes } from "react-router-dom";
import CardDetailsPage from "../cards/pages/CardDetailsPage";
import CardsPage from "../cards/pages/CardsPage";
import FavCardsPage from "../cards/pages/FavCardsPage";
import MyCardsPage from "../cards/pages/MyCardsPage";
import AboutPage from "../pages/AboutPage";
import ErrorPage from "../pages/ErrorPage";
import FirstComponent from "../sandbox/components/FirstComponent";
import LifeCycle from "../sandbox/components/LifeCycle";
import SecondComponent from "../sandbox/components/SecondComponent";
import SandBox from "../sandbox/SandBox";
import EditUser from "../users/pages/EditUser";
import LoginPage from "../users/pages/LoginPage";
import SignupPage from "../users/pages/SignupPage";
import UserProfile from "../users/pages/UserProfile";
import ROUTES from "./routesModel";
import Country from "../sandbox/components/Country";
import Memoization from "../sandbox/components/Memoization";
import MyCounter from "../sandbox/components/MyCounter";
import Countires from "../sandbox/components/Countires";
import GrandComponent from "../sandbox/context/GrandComponent";
import TestForm from "../sandbox/forms/TestForm";
import Login from "../pages/Login";
import Signin from "../pages/Signin";
import CreateCardPage from "../cards/pages/CreateCardPage";
import EditCardPage from "../cards/pages/EditCardPage";

export default function Router() {
  return (
    <Routes>
      <Route path={ROUTES.ROOT} element={<CardsPage />} />
      <Route path={ROUTES.CREATE_CARD} element={<CreateCardPage/>}/>
      <Route path={ROUTES.CARDS} element={<CardsPage />} />
      <Route path={ROUTES.ABOUT} element={<AboutPage />} />
      <Route path={ROUTES.FAV_CARDS} element={<FavCardsPage />} />
      <Route path={ROUTES.MY_CARDS} element={<MyCardsPage />} />
      <Route path={ROUTES.SIGNUP} element={<SignupPage />} />
      <Route path={ROUTES.LOGIN} element={<LoginPage />} />
      <Route path={ROUTES.EDIT_USER} element={<EditUser />} />
      <Route path={ROUTES.USER_PROFILE} element={<UserProfile />} />
      <Route path={`${ROUTES.CARD_INFO}/:id`} element={<CardDetailsPage />} />
      <Route path={`${ROUTES.EDIT_CARD}/:id`} element={<EditCardPage/>}/>
      <Route path={ROUTES.SANDBOX} element={<SandBox />}>
        <Route path="first" element={<FirstComponent />} />
        <Route path="second" element={<SecondComponent />} />
        <Route path="life-cycle" element={<LifeCycle />} />
        <Route path="country" element={<Country />} />
        <Route path="memo" element={<Memoization />} />
        <Route path="counter" element={<MyCounter />} />
        <Route path="countries" element={<Countires />} />
        <Route path="grand" element={<GrandComponent />} />
        <Route path="form" element={<TestForm/>} />
        <Route path="login" element={<Login/>}/>
        <Route path="signin" element={<Signin/>}/>
      </Route>
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}
