export default function validate(values) {
  let errors = {};

  if (!values.username.trim()) {
    errors.username = "Username required";
  }
  if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email address is invalid";
  }
  if (
    !/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,20})/.test(
      values.password1
    )
  ) {
    errors.password1 = "Password needs to be 8 characters or more";
  }
  if (!values.password2) {
    errors.password2 = "Password is required";
  }
  if (values.password2 !== values.password1) {
    errors.password2 = "Passwords do not match";
  }
  return errors;
}