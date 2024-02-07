import axios from "axios";

const url = "http://localhost:3000";

export const getUser = async () => {
  try {
    const response = await axios.get(`${url}/users`);
    return response;
  } catch (error) {
    throw error;
  }
};

export const register = async (data) => {
  try {
    const response = await axios.post(`${url}/users/register`, data);
    return response;
  } catch (error) {
    throw new Error("Error in Registering!");
  }
};

export const login = async (data) => {
  try {
    const response = await axios.post(`${url}/users/login`, data);
    return response;
  } catch (error) {
    return error;
  }
};
