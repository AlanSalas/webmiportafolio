import API from "./config";

export const register = async data => {
  try {
    const response = await API.post(`register`, data);
    return response;
  } catch (err) {
    return err.response;
  }
};
