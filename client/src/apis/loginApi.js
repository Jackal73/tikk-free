import { makeRequest } from "./axios.helper";

// const rootApi = process.env.REACT_APP_ROOT_API;
const rootApi = "http://localhost:8000/api/v1/";

export const apiLogin = async (obj) => {
  const axiosObj = {
    method: "post",
    url: rootApi + "/login",
    data: obj,
  };
  return await makeRequest(axiosObj);
};