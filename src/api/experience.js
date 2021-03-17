import API from "./config";

export const countExperiences = async token => {
  try {
    const response = await API.get("count-experiences", { headers: { token } });
    return response;
  } catch (err) {
    return err.response;
  }
};
