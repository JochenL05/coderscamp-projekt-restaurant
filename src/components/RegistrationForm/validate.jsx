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
      values.password
    )
  ) {
    errors.password =
      "Password needs to have at least: 8 characters, 1 lowercase letter, 1 uppercase letter, 1 digit & 1 special character";
  }
  if (!values.password2) {
    errors.password2 = "Password is required";
  }
  if (values.password2 !== values.password) {
    errors.password2 = "Passwords do not match";
  }
  return errors;
}
