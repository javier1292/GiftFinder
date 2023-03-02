import { useState } from "react";
import { AddCategoria, GiftGrid } from "./components";

export const GifFinder = () => {
  const [categories, setCategories] = useState(["one piece"]);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      <h1>Gif App</h1>
      <AddCategoria onNewValue={(event) => onAddCategory(event)} />
      {categories.map((categories) => (
        <GiftGrid key={categories} category={categories} />
      ))}
    </>
  );
};
