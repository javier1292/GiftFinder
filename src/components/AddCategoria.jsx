import { useState } from "react";

export const AddCategoria = ({ onNewValue }) => {
  const [inputValue, setInputValue] = useState("One Piece");
  const onInputChage = (event) => {
    setInputValue(event.target.value);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim().length <= 1) return;
    onNewValue(inputValue.trim());
    setInputValue("");
  };
  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Buscar Gift"
        value={inputValue}
        onChange={onInputChage}
      />
    </form>
  );
};
