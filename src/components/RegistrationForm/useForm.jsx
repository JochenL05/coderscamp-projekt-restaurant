import { useEffect, useState } from "react";
import validate from "./validate";

const useForm = () => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    password2: "",
  });

  const [errors, setErrors] = useState({});

  const [dataIsCorrect, setDataIsCorrect] = useState(false);

  const [formSubmited, setFormSubmited] = useState(false);

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("form submitted", values);
    setErrors(validate(values));
    setFormSubmited(true);
  };

  useEffect(() => {
    if (!formSubmited) return;
    if (Object.keys(errors).length === 0) {
      setDataIsCorrect(true);
    }
  }, [errors]);

  return { handleChange, values, handleSubmit, errors, dataIsCorrect };
};

export default useForm;
