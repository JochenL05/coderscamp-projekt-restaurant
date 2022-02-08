import React, { useState } from "react";
import LoginForm from "../../components/LoginForm/LoginForm";
import Topbar from "../../components/Topbar/Topbar";

export default function LoginPage() {
  const [user, setUser] = useState({ email: "", password: "" });

  const [error, setError] = useState("");

  const login = (details) => {
    const usersLoginDetails = JSON.parse(
      localStorage.getItem("usersLoginDetails")
    );
    if (usersLoginDetails) {
      const emailCheck = usersLoginDetails.filter((el) => {
        return el.email === details.email;
      });
      if (emailCheck.length > 0) {
        if (emailCheck[0].password === details.password) {
          localStorage.setItem("loggedIn", "true");
          setUser({
            name: details.name,
            email: details.email,
          });
          return true;
        }
      } else {
        setError("Login failed, wrong email or password");
        localStorage.setItem("loggedIn", "false");
        return false;
      }
    } else {
      setError("Login failed, wrong email or password");
      localStorage.setItem("loggedIn", "false");
      return false;
    }
  };

  return (
    <div>
      <Topbar />
      {user.email != "" ? (
        <div className="welcome">
          <h2>
            {" "}
            Welcome <span>{user.name}</span>
          </h2>
        </div>
      ) : (
        <LoginForm login={login} error={error} />
      )}
    </div>
  );
}
