import API from "./config";
import jwtDecode from "jwt-decode";

export const willExpireToken = token => {
  const seconds = 60;
  const metaToken = jwtDecode(token);
  const { exp } = metaToken;
  const dateNow = (Date.now() + seconds) / 1000;
  return dateNow > exp;
};

export const activateUser = async token => {
  try {
    const response = await API.put(`/activation`, "", { headers: { token } });
    return response;
  } catch (err) {
    return err.response;
  }
};

export const sendEmailToActivate = async id => {
  try {
    const response = await API.post(`/activation-email/${id}`);
    return response;
  } catch (err) {
    return err.response;
  }
};

export const login = async data => {
  try {
    const response = await API.post(`login`, data);
    return response;
  } catch (err) {
    return err.response;
  }
};
