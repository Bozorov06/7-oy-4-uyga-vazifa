import axios from "axios";

const productsService = {
  getAll: async () => await axios.get("https://fakestoreapi.com/products"),
  getByID: async (id) =>
    await axios.get(`https://fakestoreapi.com/products/${id}`),
};

export default productsService;
