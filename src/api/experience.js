import API from "./config";

export const countExperiences = async token => {
  try {
    const response = await API.get("count-experiences", { headers: { token } });
    return response;
  } catch (err) {
    return err.response;
  }
};

export const getExperiences = async id => {
  try {
    const response = await API.get(`experiences/${id}`);
    return response;
  } catch (err) {
    return err.response;
  }
};

export const addExperience = async (data, token) => {
  try {
    const response = await API.post("experience", data, { headers: { token } });
    return response;
  } catch (err) {
    return err.response;
  }
};

export const updateExperience = async (data, token) => {
  try {
    const response = await API.put(`experience/${data.key}`, data, { headers: { token } });
    return response;
  } catch (err) {
    return err.response;
  }
};

export const deleteExperience = async (token, id) => {
  try {
    const response = await API.delete(`experience/${id}`, { headers: { token } });
    return response;
  } catch (err) {
    return err.response;
  }
};
