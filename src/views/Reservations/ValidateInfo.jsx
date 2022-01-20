export default function validateInfo(values) {
  let errors = {};

  if (!values.email) {
    errors.email = "Email required";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email address is invalid";
  }

  if (!values.phone) {
    errors.phone = "Phone number required";
  }

  if (!/^[1-9][0-9]?$|^100$/.test(values.persons)) {
    errors.persons = "Number is invalid";
  }

  return errors;
}
