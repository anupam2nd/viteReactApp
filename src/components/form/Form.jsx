import React from "react";
import "./Form.css";

export default function Form() {
  return (
    <div className="form-layout mt-5 p-5">
      <div className="card p-4 col-md-4 col-11 mx-auto">
        <form>
          <div className="mb-2">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input type="text" placeholder="name" className="form-control" />
          </div>
          <div className="mb-2">
            <label htmlFor="password" className="form-label">
              Name
            </label>
            <input
              type="password"
              placeholder="password"
              className="form-control"
            />
          </div>
          <button className="btn btn-primary mt-2 w-100">Login</button>
        </form>
      </div>
    </div>
  );
}
