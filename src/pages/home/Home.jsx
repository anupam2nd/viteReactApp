import React, { useEffect, useState } from "react";
import sha256 from "sha256";
import "./Home.css";
import { getUser } from "../../apis/api";

export default function Home() {
  const [users, setUsers] = useState({});
  let str = "Hello";
  const eStr = sha256(str);
  console.log(eStr);

  console.log(eStr === sha256("Hello"));

  useEffect(() => {
    console.log("home component");
    const getDataFromApi = async () => {
      try {
        const response = await getUser();
        console.log(response.data.result);
      } catch (error) {
        console.log(error);
      }
    };
    getDataFromApi();
  }, []);

  return (
    <>
      <section className="p-3 mt-5">
        <h1 className="display-1 text-center p-5 fw-bold">
          Welcome To Hotel ManageApp
        </h1>
        <p className="text-center lead fs-2 p-5">
          OneStop solutions for managing Hotels
        </p>
      </section>
    </>
  );
}
