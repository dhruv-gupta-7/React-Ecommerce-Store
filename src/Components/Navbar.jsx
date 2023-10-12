import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Menu,
  MenuItem,
} from "@mui/material";
import { useSortingContext } from "./SortingProvider";
import ProductForm from "./ProductForm";

const NavBar = ({ onSortChange, onAddProduct }) => {
  const { sortOrder, updateSortOrder } = useSortingContext();
  const [anchorEl, setAnchorEl] = useState(null);
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleSortChange = (order) => {
    updateSortOrder(order);
    handleSortMenuClose();
  };

  const handleSortMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleSortMenuClose = () => {
    setAnchorEl(null);
  };

  const handleAddProductClick = () => {
    setIsFormOpen(true);
  };

  const closeProductForm = () => {
    setIsFormOpen(false);
  };

  return (
    <div>
      <AppBar position="static" sx={{ width: "100vw" }}>
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            Ecommerce Store
          </Typography>
          <div>
            <Button color="inherit" onClick={handleSortMenuOpen}>
              Sort
            </Button>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleSortMenuClose}
            >
              <MenuItem onClick={() => handleSortChange("low-to-high")}>
                Low to High
              </MenuItem>
              <MenuItem onClick={() => handleSortChange("high-to-low")}>
                High to Low
              </MenuItem>
            </Menu>
            <Button color="inherit" onClick={handleAddProductClick}>
              Add Product
            </Button>
          </div>
        </Toolbar>
      </AppBar>
      <ProductForm
        open={isFormOpen}
        onClose={closeProductForm}
        onAddProduct={onAddProduct}
      />
    </div>
  );
};

export default NavBar;
