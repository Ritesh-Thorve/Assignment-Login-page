import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

export const loginUser = async (data: { email: string; password: string }) => {
  try {
    const response = await axios.post(`${API_URL}/login`, data);
    console.log("Login Success:", response.data);
  } catch (error) {
    console.error("Login Failed:", error);
  }
};

export const registerUser = async (data: { email: string; password: string }) => {
  try {
    console.log("Sending Data:", data); // Debugging
    const response = await axios.post(`${API_URL}/register`, data);
    console.log("Signup Success:", response.data);
  } catch (error: any) {
    console.error("Signup Failed:", error.response?.data || error.message);
  }
};
