import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../services/productService";
import { useCart } from "../context/CartContext";

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart;

  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (id) fetchProduct();
  }, [id]);

  const fetchProduct = async () => {
    try {
      const res = await getProductById(id);
      console.log(res.data); 
      setProduct(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  if (!product) {
    return <h3 className="text-center mt-5">Loading...</h3>;
  }

  return (
    <div className="container mt-5">
      <div className="row">

        {/* 🔥 الصورة */}
        <div className="col-md-6">
          <img
            src={`http://127.0.0.1:8000/${product.image}`}
            onError={(e) => {
              e.target.src = "/default.png";
            }}
            className="img-fluid rounded shadow"
            alt={product.name}
          />
        </div>

        {/* 🔥 التفاصيل */}
        <div className="col-md-6">
          <h2>{product.name}</h2>

          <h4 className="text-success my-3">
            {product.price} EGP
          </h4>

          <p className="text-muted">
            {product.description || "No description available"}
          </p>

          <p>
            <strong>Category:</strong> {product.category?.name}
          </p>

          <button
            className="btn btn-success mt-3"
            onClick={() => addToCart(product)}
          >
            Add to Cart 🛒
          </button>
        </div>

      </div>
    </div>
  );
};

export default ProductDetail;