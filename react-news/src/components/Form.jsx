import {
  FormControl,
  InputLabel, MenuItem, Select
} from "@mui/material";
import React from "react";
import useNews from "../hooks/useNews";
const CATEGORIES = [
  { value: "general", label: "General" },
  { value: "business", label: "Negocios" },
  { value: "entertainment", label: "Entretenimiento" },
  { value: "health", label: "Salud" },
  { value: "science", label: "Ciencia" },
  { value: "sports", label: "Deportes" },
  { value: "technology", label: "Tecnología" },
];
const Form = () => {
  const { category, handlerChangeCategory } = useNews();
  return (
    <form>
      <FormControl fullWidth>
        <InputLabel>Categoría</InputLabel>
        <Select
          label="category"
          onChange={handlerChangeCategory}
          value={category}
        >
          {CATEGORIES.map((cat) => (
            <MenuItem key={cat.value} value={cat.value}>
              {cat.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </form>
  );
};

export default Form;
