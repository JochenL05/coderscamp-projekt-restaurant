import React, { useState } from "react";
import LoginForm from "../../components/LoginForm/LoginForm";
//import Topbar from "../../components/Topbar/Topbar";

export default function LoginPage() {
  const adminUser = {
    email: "admin@admin.com",
    password: "admin123",
  };

  const [user, setUser] = useState({ email: "", password: "" });

  const [error, setError] = useState("");

  const Login = (details) => {
    console.log(details);
    if (
      details.email == adminUser.email &&
      details.password == adminUser.password
    ) {
      console.log("Logged in");
      setUser({
        name: details.name,
        email: details.email,
      });
    } else {
      setError("Login failed, wrong email or password");
    }
  };

  return (
    <div>
      {user.email != "" ? (
        <div className="welcome">
          <h2>
            {" "}
            Welcome <span>{user.name}</span>
          </h2>
        </div>
      ) : (
        <LoginForm Login={Login} error={error} />
      )}
    </div>
  );
}
