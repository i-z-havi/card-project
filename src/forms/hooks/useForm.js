import { useState } from "react";
import { object, func } from "prop-types";
import Joi from "joi";
const useForm = (initialForm, schema, handleSubmit) => {
  const [data, setData] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const handleReset = () => {
    setData(initialForm);
    setErrors({});
  };
  const onSubmit = () => {
    handleSubmit(data);
  };
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
  const validateForm = () => {
    const schemaForValidate = Joi.object(schema);
    const { error } = schemaForValidate.validate(data);
    if (error) return error;
    return null;
  };
  return {
    data,
    errors,
    onSubmit,
    handleChange,
    handleReset,
    validateForm,
    setData,
  };
};
useForm.propTypes = {
  initialForm: object.isRequired,
  schema: object.isRequired,
  handleSubmit: func.isRequired,
};

export default useForm;
