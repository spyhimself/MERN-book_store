import http from "./http-common";

const getCategories = async () => await http.get("/category/all");
const addCategory = async (category) =>
  await http.post("/category/add", category);

export { getCategories, addCategory };
