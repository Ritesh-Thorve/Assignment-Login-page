import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

//login a user
export const loginUser = async (data: { email: string; password: string }) => {
  try {
    const response = await axios.post(`${API_URL}/login`, data);
    return response.data;
  } catch (error: any) {
    throw error;
  }
};

//Register a user
export const registerUser = async (data: { email: string; password: string }) => {
  try {
    const response = await axios.post(`${API_URL}/register`, data);
    return response.data;
  } catch (error: any) {
    throw error;
  }
};
