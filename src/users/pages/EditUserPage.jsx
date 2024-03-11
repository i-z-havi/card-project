import { Container } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import useForm from "../../forms/hooks/useForm";
import UserForm from "../components/UserForm";
import initialSignupForm from "../helpers/initialForms/initialSignupForm";
import useUsers from "../hooks/useUsers";
import signupSchema from "../models/joi-schema/signupSchema";
import normalizeUser from "../helpers/normalization/normalizeUser";
import { useEffect } from "react";
import mapUserToModel from "../helpers/normalization/mapUserToModel";

export default function SignupPage() {
  const { value:{user, isLoading},handleUpdateUser,handleGetUser } = useUsers();
  const navigate=useNavigate();

  
  const { value, ...rest } = useForm(
    initialSignupForm,
    signupSchema,
    ()=>{handleUpdateUser({
      ...normalizeUser(value.data),
      user_id: user.user_id,
      isAdmin: user.isAdmin,
    });
  });
  useEffect(() => {
    try {handleGetUser(user.user_id).then((data) => {
      const modelUser = mapUserToModel(data);
      rest.setData(modelUser);
    });
  }catch{navigate("/cards")}}, [handleGetUser,rest,navigate,user]);


  return (
    <div>
    {!isLoading&&
    <Container
      sx={{
        paddingTop: 8,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <UserForm
        onSubmit={rest.onSubmit}
        onReset={rest.handleReset}
        onFormChange={rest.validateForm}
        title="Edit User Profile"
        errors={value.errors}
        data={value.data}
        onInputChange={rest.handleChange}
        setData={rest.setData}
      />
    </Container>
   }
    </div>
  );
}