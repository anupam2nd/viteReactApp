import React from "react";
import "./Register.css";
import Form from "../../components/form/Form";

export default function Register() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const { name, email, pass } = document.forms[0];
    console.log("form value");
  };

  let componentInfo = {
    header: "Register",
    btn: "Sign Up",
  };

  return (
    <div className="form-layout">
      <Form value={componentInfo} />
    </div>
  );
}
