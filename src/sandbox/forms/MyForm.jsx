import { Box, Button, TextField, Typography } from "@mui/material";
import Joi from "joi";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const initialValue = {
  firstName: "",
  lastName: "",
};

const schema = {
  firstName: Joi.string().max(10).required(),
  lastName: Joi.string().min(2).max(10).allow(""),
};

export default function MyForm() {

  const [data, setData] = useState(initialValue);
  const [errors, setErrors] = useState(initialValue);
  const navigate = useNavigate();

  const validateProperty = (target) => {
    const joiPropertySchema = Joi.object({
      [target.name]: schema[target.name],
    });
    const obj = { [target.name]: target.value };
    const { error } = joiPropertySchema.validate(obj);
    return error ? error.details[0].message : null;
  };

  const handleChange = ({ target }) => {
    setData((prev) => ({ ...prev, [target.name]: target.value }));
    const errorMessage = validateProperty(target);
    if (errorMessage) {
      setErrors((prev) => ({ ...prev, [target.name]: errorMessage }));
    } else {
      setErrors((prev) => ({ ...prev, [target.name]: "" }));
    }
  };

  const handleSubmit = () => {
    console.log(data);
  };
  const handleCancel = () => {
    navigate("/");
  };
  const handleReset = () => {
    setData(initialValue);
  };
  console.log(errors);

  return (
    <>
      <Box
        component={"form"}
        onSubmit={(e) => {
          e.preventDefault(); 
          handleSubmit();
        }}
      >
        <Typography>My Form</Typography>
        <Box>
          <TextField
            label="First Name"
            name="firstName"
            onChange={handleChange}
            value={data["firstName"] ? data["firstName"] : ""} 
            helperText={errors["firstName"]} 
            error={Boolean(errors["firstName"])} 
          />
          <TextField
            label="Last Name"
            name="lastName"
            onChange={handleChange}
            value={data["lastName"] ? data["lastName"] : ""}
            helperText={errors["lastName"]}
            error={Boolean(errors["lastName"])}
          />
        </Box>
        <Box>
          <Button onClick={handleReset}>Reset</Button>
          <Button onClick={handleCancel}>Cancel</Button>
          <Button type="submit">Submit</Button>
        </Box>
      </Box>
    </>
  );
}
