import API from "./config";

export const register = async data => {
  try {
    const response = await API.post(`register`, data);
    return response;
  } catch (err) {
    return err.response;
  }
};

export const getUserData = async id => {
  try {
    const response = await API.get(`user/${id}`);
    return response;
  } catch (err) {
    return err.response;
  }
};

export const getProfileImage = async (type, image) => {
  try {
    const response = await API.get(`image/${type}/${image}`);
    return response;
  } catch (err) {
    return err.response;
  }
};
