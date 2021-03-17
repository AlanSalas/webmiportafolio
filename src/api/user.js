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

export const updateUser = async (avatar, data, token) => {
  try {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("lastName", data.lastName);
    formData.append("position", data.position);
    formData.append("facebook", data.facebook);
    formData.append("twitter", data.twitter);
    formData.append("instagram", data.instagram);
    formData.append("linkedin", data.linkedin);
    formData.append("youtube", data.youtube);
    if (typeof avatar === "object") {
      formData.append("image", avatar.file, avatar.file.name);
    }

    const response = await API.put(`user/${data.id}`, formData, { headers: { token } });
    return response;
  } catch (err) {
    return err.response;
  }
};
