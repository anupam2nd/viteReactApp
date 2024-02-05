import React from "react";
import Form from "../../components/form/Form";
import "./Login.css";

export default function Login() {
  let componentInfo = {
    header: "Login",
    btn: "Sign In",
  };

  return (
    <div className="form-content">
      <Form value={componentInfo} />
    </div>
  );
}
