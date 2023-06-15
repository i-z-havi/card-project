import { Box, Button, TextField, Typography } from "@mui/material";
import Joi from "joi";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const initialValue = {
  firstName: "",
  lastName: "",
};
//error messages are part of joi library
const schema = {
  firstName: Joi.string().max(10).required(),
  lastName: Joi.string().min(2).max(10).allow(""),
};

export default function MyForm() {
  //הגדר סטייט בשם דאטה
  //כתוב פונקציית הנדל צ'יינג שתעדכן את הסטייט כאשר משנים את הטקסט בטקסט פילד
  //נא לגרום לכפתורים לעבוד

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
    //takes previous value, and replaces the target (first or last name) with the value of the appropriate text box
    const errorMessage = validateProperty(target);
    if (errorMessage) {
      //[] in this case makes target.name dynamic (i.e based on a variable, in this case first/last name), NOT an array! 
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
          e.preventDefault(); //prevents default action (in this case, reloading page)
          handleSubmit();
        }}
      >
        <Typography>My Form</Typography>
        <Box>
          <TextField
            label="First Name"
            name="firstName"
            onChange={handleChange}
            //conditional rendering: if condition is true, then (?) , otherwise (:) 
            //if a nonbool var is used, check to see if it has a value (is defined)
            //if it does, returns true. else returns false
            value={data["firstName"] ? data["firstName"] : ""} 
            helperText={errors["firstName"]} //gives text explaining error
            error={Boolean(errors["firstName"])} //if true, text field turns red. else, is normal
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
