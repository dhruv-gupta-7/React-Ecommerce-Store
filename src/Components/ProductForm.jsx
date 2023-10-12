import React, { useState, useContext } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  Button,
  Input,
} from "@mui/material";
import { ProductContext } from "./ProductsProvider";

const ProductForm = ({ open, onClose }) => {
  const { addProduct } = useContext(ProductContext);

  const [product, setProduct] = useState({
    image: "",
    title: "",
    description: "",
    price: "",
  });
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setProduct({ ...product, image: reader.result });
    };
    reader.readAsDataURL(file);
  };

  const validateForm = () => {
    const errors = {};

    if (!product.title.trim()) {
      errors.title = "Title is required";
    }

    if (!product.description.trim()) {
      errors.description = "Description is required";
    }

    if (!product.price.trim()) {
      errors.price = "Price is required";
    } else if (!/^\d+(\.\d{1,2})?$/.test(product.price)) {
      errors.price = "Invalid price format";
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      addProduct(product);
      onClose();
      setProduct("");
    }
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Add New Product</DialogTitle>
      <DialogContent>
        <Input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          fullWidth
        />
        <TextField
          name="title"
          label="Title"
          fullWidth
          margin="normal"
          value={product.title}
          onChange={handleInputChange}
          error={!!errors.title}
          helperText={errors.title}
        />
        <TextField
          name="description"
          label="Description"
          fullWidth
          margin="normal"
          value={product.description}
          onChange={handleInputChange}
          error={!!errors.description}
          helperText={errors.description}
        />
        <TextField
          name="price"
          label="Price"
          fullWidth
          margin="normal"
          value={product.price}
          onChange={handleInputChange}
          error={!!errors.price}
          helperText={errors.price}
        />
        <Button
          sx={{ float: "right", marginTop: "0.5rem" }}
          variant="contained"
          color="primary"
          onClick={handleSubmit}
        >
          Add Product
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default ProductForm;
