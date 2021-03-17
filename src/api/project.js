import API from "./config";

export const countProjects = async token => {
  try {
    const response = await API.get("count-projects", { headers: { token } });
    return response;
  } catch (err) {
    return err.response;
  }
};

export const getProjects = async id => {
  try {
    const response = await API.get(`projects/${id}`);
    return response;
  } catch (err) {
    return err.response;
  }
};

export const getProjectImage = async (type, image) => {
  try {
    const response = await API.get(`image/${type}/${image}`);
    return response;
  } catch (err) {
    return err.response;
  }
};

export const updateProject = async (image, data, token) => {
  try {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("url", data.url);
    formData.append("description", data.description);
    if (typeof image === "object") {
      formData.append("image", image.file, image.file.name);
    }

    const response = await API.put(`project/${data.key}`, formData, { headers: { token } });
    return response;
  } catch (err) {
    return err.response;
  }
};

export const deleteProject = async (token, id) => {
  try {
    const response = await API.delete(`project/${id}`, { headers: { token } });
    return response;
  } catch (err) {
    return err.response;
  }
};
