import axiosInstance from "../utils/axiosInstance";
import { API_PATHS } from "../utils/apiPath";

const login = async (email, password) => {
  try {
    const response = await axiosInstance.post(API_PATHS.AUTH.LOGIN, {
      email,
      password,
    });

    return response.data;
  } catch (e) {
    throw e.response?.data || { message: "An unknown error occured" };
  }
};

const register = async (username, email, password) => {
  try {
    const response = await axiosInstance.post(API_PATHS.AUTH.REGISTER, {
      username,
      email,
      password,
    });
    return response.data;
  } catch (e) {
    throw e.response?.data || { message: "An unknown error occured" };
  }
};

const getProfile = async () => {
  try {
    const res = await axiosInstance.get(API_PATHS.AUTH.GET_PROFILE);
    return res.data;
  } catch (e) {
    throw e.response?.data || { message: "An error occured" };
  }
};

const updateProfile = async (userData) => {
  try {
    const response = await axiosInstance.put(
      API_PATHS.AUTH.UPDATE_PROFILE,
      userData,
    );
    return response.data;
  } catch (e) {
    throw e.response?.data || { message: "An error occured" };
  }
};

const changePassword = async (passowrds) => {
  try {
    const response = await axiosInstance.post(
      API_PATHS.AUTH.CHANGE_PASSWORD,
      passowrds,
    );
    return response.data;
  } catch (e) {
    throw e.response?.data || { message: "An error occured" };
  }
};

const authServices = {
  login,
  register,
  getProfile,
  updateProfile,
  changePassword,
};

export default authServices;
