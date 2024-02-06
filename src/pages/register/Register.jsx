import React, { useState } from "react";
import "./Register.css";
import Form from "../../components/form/Form";

export default function Register() {
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
