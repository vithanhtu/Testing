import axiosClient from "./Axios_Client";

// api/productApi.js
const productApi = {
  getAll: (params) => {
    const url = "api/v1/products";
    return axiosClient.get(url, { params });
  },

  get: (id) => {
    const url = `api/v1/products${id}`;
    return axiosClient.get(url);
  },
};
export default productApi;
