import React, { useState, useEffect } from "react";
import "./Form.css";
import { register, login } from "../../apis/api";
import sha256 from "sha256";
import { Navigate, useNavigate } from "react-router-dom";

export default function Form({ value }) {
  const [isRegister, setIsRegister] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleOnChange = (event) => {
    if (event.target.name == "password") {
    }
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();

    isRegister == true ? handleRegister(formData) : handleLogin(formData);
  };

  useEffect(() => {
    if (value.header === "Login") {
      setIsRegister(false);
    } else if (value.header === "Register") {
      setIsRegister(true);
    }
  }, [value.header]);

  const handleRegister = (data) => {
    data.password = sha256(data.password);
    if (checkFieldEmptyFn(data)) {
      register(data)
        .then((res) => {
          if (res.data == "Success") {
            alert("Registration Success!");
          }
          setFormData({ name: "", email: "", password: "" });
        })
        .catch((error) => console.log(error));
    } else {
      return alert("Field Cannot Be Empty!");
    }
  };

  const handleLogin = (data) => {
    delete data.name;
    data.password = sha256(data.password);
    if (checkFieldEmptyFn(data)) {
      login(formData)
        .then((res) => {
          console.log(res);
          if (res.data == "success") {
            alert("Login Success");
            navigate("/admin", { replace: true });
          }
          setFormData({ name: "", email: "", password: "" });
        })
        .catch((error) => console.log(error));
    } else {
      return alert("Field Cannot Be Empty!");
    }
  };

  const checkFieldEmptyFn = (formField) => {
    const isFormFilled = Object.values(formField).every((ele) => ele !== "");
    return isFormFilled;
  };

  return (
    <div className="form-layout mt-5 p-5">
      <div className="card p-4 col-md-4 col-12 mx-auto">
        <p className="lead text-light text-center fs-2">{value.header}</p>
        <form onSubmit={handleOnSubmit}>
          {isRegister && (
            <div className="mb-2">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                placeholder="name"
                className="form-control"
                onChange={handleOnChange}
              />
            </div>
          )}

          <div className="mb-2">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              name="email"
              type="text"
              value={formData.email}
              placeholder="Email"
              className="form-control"
              onChange={handleOnChange}
            />
          </div>

          <div className="mb-2">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              name="password"
              type="password"
              value={formData.password}
              placeholder="password"
              className="form-control"
              onChange={handleOnChange}
            />
          </div>

          {/* {isRegister && (
            <div className="mb-2">
              <label htmlFor="confirm-password" className="form-label">
                Confirm Password
              </label>
              <input
                type="password"
                placeholder="Re-type password"
                className="form-control"
                name="confirm_password"
              />
            </div>
          )} */}
          <div className="d-flex justify-content-end">
            <button type="submit" className="btn btn-primary mt-2">
              {value.btn}{" "}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
