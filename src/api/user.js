import API from "./config";

export const register = async () => {
  try {
    const response = await API.post(`register`);
    console.log(response);
  } catch (err) {
    console.log(err);
  }
};
