import React from "react";
import "./Register.css";

export default function Register() {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("clicked");
    console.log(document.forms[0]);
  };

  return (
    <div className="form-layout mt-5 p-5">
      <div className="card p-4 col-md-4 col-11 mx-auto">
        <form onSubmit={handleSubmit}>
          <div className="mb-2">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              placeholder="Enter Name"
              className="form-control"
              name="name"
            />
          </div>

          <div className="mb-2">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="text"
              placeholder="Email"
              className="form-control"
              name="email"
            />
          </div>

          <div className="mb-2">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              placeholder="password"
              className="form-control"
              name="password"
            />
          </div>
          <button className="btn btn-primary mt-2 w-100" type="submit">
            Register
          </button>
        </form>
      </div>
    </div>
  );
}
