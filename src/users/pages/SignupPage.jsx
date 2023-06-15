import React from "react";
import signupSchema from "../models/joi-schema/signupSchema";
import useForm from "../../forms/hooks/useForm";
import useUsers from "../hooks/useUsers";
import { useUser } from "../providers/UserProvider";
import initialSignupForm from "../helpers/initialForms/initialSignupForm";
import { Navigate } from "react-router-dom";
import { Container } from "@mui/material";
import ROUTES from "../../routes/routesModel";
import UserForm from "../components/UserForm";

export default function SignupPage() {
  const { user } = useUser();
  const { handleSignup } = useUsers();
  const { data, errors, ...rest } = useForm(
    initialSignupForm,
    signupSchema,
    handleSignup
  );

  if (user) {
    return <Navigate replace to={ROUTES.ROOT} />;
  }

  return (
    
    <Container
      sx={{
        pt: 8,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <UserForm
      onSubmit={rest.onSubmit}
      onReset={rest.onReset}
      validateForm={rest.validateForm}
      title={"Registration Form"}
      errors={errors}
      data={data}
      onInputChange={rest.handleChange}
      setData={rest.setData}
      >
      </UserForm>

    </Container>
  );
}
