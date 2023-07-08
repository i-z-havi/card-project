import Joi from 'joi';
import React from 'react'
import useForm from '../hooks/useForm';
import Form from './Form';
import { Container } from "@mui/material";
import ROUTES from "../../routes/routesModel";
import Input from "./Input";
import { useState } from 'react';

export default function LogInForm() {
    const InitialLoginForm={
        email:"",
        password:"",
    };

    const loginSchema = {
      email: Joi.string()
        .ruleset.regex(/^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})$/)
        .rule({ message: "Please enter a valid mail" })
        .required(),
    
    
      password: Joi.string()
        .ruleset.regex(
          /((?=.*\d{1})(?=.*[A-Z]{1})(?=.*[a-z]{1})(?=.*[!@#$%^&*-]{1}).{7,20})/
        )
        .rule({
          message:
            "The password must be at least seven characters long and contain an uppercase letter, a lowercase letter, a number and one of the following characters !@#$%^&*-",
        })
        .required(),
    };

    const[email,setEmail]=useState(InitialLoginForm.email)
    const[password,setPassword]=useState(InitialLoginForm.password)  

    const handleemailChange=(e)=>{
      rest.handleChange(e);
      setEmail(e.target.value);
    }
      
    const handlepassChange=(e)=>{
      rest.handleChange(e);
      setPassword(e.target.value);
    }

    const handleSubmit=(data)=> (data); 

    const {data, errors, ...rest} = useForm(InitialLoginForm,loginSchema,handleSubmit) 
    return (
        <Container
          sx={{
            mt: 8,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Form
            title="Login form"
            onSubmit={()=>console.log(email+","+password)}
            onReset={rest.handleReset}
            styles={{ maxWidth: "450px" }}
            validateForm={rest.validateForm}
            to={ROUTES.SANDBOX}
          >
            <Input
              label={"email name"}
              name={"email"}
              data={data}
              error={errors["email"]}
              onChange={handleemailChange}
            />
            <Input
              label={"password name"}
              name={"password"}
              data={data}
              error={errors["password"]}
              onChange={handlepassChange}
            />
          </Form>
        </Container>
      );
}
