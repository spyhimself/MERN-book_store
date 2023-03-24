import React, { createContext, useState } from "react";
import { getCategories } from "../services/category-services";

export const CategoryContext = createContext();

const CategoryContextProvider = ({ children }) => {
  const [categoryState, setCategoryState] = useState({
    categories: null,
    msg: null,
  });

  const loadCategories = async () => {
    const result = await getCategories();
    if (JSON.stringify(result.data) !== JSON.stringify(categoryState)) {
      setCategoryState({
        categories: result.data,
        msg: null,
      });
    }
  };

  return (
    <CategoryContext.Provider value={{ ...categoryState, loadCategories }}>
      {children}
    </CategoryContext.Provider>
  );
};

export default CategoryContextProvider;
