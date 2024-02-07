import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { getUser } from "../../apis/api";

export default function Admin() {
  const [users, setUsers] = useState([]);
  const [adminUser, setAdminUser] = useState("");

  useEffect(() => {
    getUser()
      .then((res) => setUsers(res.data.result))
      .catch((err) => {
        console.log(err);
      });

    let name;
    if (localStorage.getItem("user")) {
      name = localStorage.getItem("user");
    }

    setAdminUser(name);
  }, []);

  console.log(users);
  return (
    <>
      <h4 className="display-4 text-center">{adminUser != "" && adminUser}</h4>
      <div className="user-list col-md-5 mx-auto m-3">
        <ul className="list-group text-dark">
          {users.length > 0 &&
            users.map((ele) => {
              return (
                <li className="list-group-item" key={ele.UserId}>
                  {" "}
                  {ele.UserId} | {ele.Name} | {ele.Email}
                </li>
              );
            })}
        </ul>
      </div>

      <Outlet />
    </>
  );
}
