import AxiosClient from "../USERApi/AxiosClient";

export const ProductApi = {
  getAll(params) {
    const url = "product";
    return AxiosClient.get(url, { params });
  },
  getByPage(page) {
    const url = `product?_page=${page}&_limit=8`;
    return AxiosClient.get(url);
  },
  getById(id) {
    const url = `product/${id}`;
    return AxiosClient.get(url);
  },
  deleteProduct(id) {
    const url = `product/${id}`;
    return AxiosClient.delete(url);
  },
  editProduct() {},
  updateProduct(id, params) {
    const url = `product/${id}`;
    return AxiosClient.put(url, params);
  },
  AddProduct(params) {
    const url = "product";
    return AxiosClient.post(url, params);
  },
};
