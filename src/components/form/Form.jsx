import React, { useState } from "react";
import "./Form.css";

export default function Form({ value }) {
  let isRegister = false;
  if (value.header == "Register") {
    isRegister = true;
  }

  return (
    <div className="form-layout mt-5 p-5">
      <div className="card p-4 col-md-4 col-12 mx-auto">
        <p className="lead text-light text-center fs-2">{value.header}</p>
        <form>
          {isRegister && (
            <div className="mb-2">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input type="text" placeholder="name" className="form-control" />
            </div>
          )}

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

          {isRegister && (
            <div className="mb-2">
              <label htmlFor="confirm-password" className="form-label">
                Password
              </label>
              <input
                type="password"
                placeholder="Re-type password"
                className="form-control"
                name="confirm_password"
              />
            </div>
          )}
          <div className="d-flex justify-content-end">
            <button className="btn btn-primary mt-2">{value.btn} </button>
          </div>
        </form>
      </div>
    </div>
  );
}
