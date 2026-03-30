import { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";

const FeaturedProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/products")
      .then((res) => {
        setProducts(res.data.slice(0, 6));
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Featured Products 🔥</h2>

      <div className="row">
        {products.map((product) => (
          <div className="col-md-4 mb-4" key={product.id}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;