import { useCart } from "../context/CartContext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const handleAdd = () => {
    addToCart(product);
    toast.success("Added to cart 🛒");
  };

  return (
    <div className="card product-card h-100">

      <div className="product-image-wrapper">
        <img
          src={`http://127.0.0.1:8000/products/${product.image}`}
          onError={(e) => {
            e.target.src = "https://via.placeholder.com/300";
          }}
          className="card-img-top product-img"
          alt={product.name}
        />
      </div>

      <div className="card-body d-flex flex-column">

        <h5 className="product-title">{product.name}</h5>

        <p className="product-price">
          {product.price} EGP
        </p>

        <span className="product-category">
          {product.category?.name}
        </span>

        <button
          className="btn btn-primary w-100 mt-3"
          onClick={handleAdd}
        >
          Add to Cart 🛒
        </button>

        <button
          className="btn btn-outline-primary w-100 mt-2"
          onClick={() => navigate(`/products/${product.id}`)}
        >
          View Details
        </button>

      </div>
    </div>
  );
};

export default ProductCard;