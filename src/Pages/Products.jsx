import React, { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import api from "../services/api";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  //  get products
  const getProducts = async () => {
    try {
      const response = await api.get("/products");
      setProducts(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  // getcategories
  const getCategory = async () => {
    try {
      const response = await api.get("/categories");
      setCategories(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  //  filter
  const getProductsByCategories = async (categoryId) => {
    try {
      const response = await api.get(`/products/categories/${categoryId}`);
      setProducts(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getProducts();
    getCategory();
  }, []);

  return (
    <div className="container mt-4">
      
      
      <div className="mb-3">
        <button
          className="btn btn-outline-primary me-2"
          onClick={getProducts}
        >
          All
        </button>

       
      </div>

      
      <div className="row">
        {products.length === 0 ? (
          <h4 className="text-center">Loading...</h4>
        ) : (
          products.map((product) => (
            <div className="col-md-4 mb-4" key={product.id}>
              <ProductCard product={product} />
            </div>
          ))
        )}
      </div>
    </div>
  );
}