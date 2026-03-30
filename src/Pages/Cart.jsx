import { useCart } from "../context/CartContext";

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, totalPrice } = useCart();

  return (
    <div className="container mt-4">
      <h2>Your Cart 🛒</h2>

      {cart.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item.id} className="card mb-3 p-3 d-flex flex-row align-items-center">
              
              <img
                src={`http://127.0.0.1:8000/storage/${item.image}`}
                style={{ width: "80px", height: "80px", objectFit: "cover" }}
              />

              <div className="ms-3 flex-grow-1">
                <h5>{item.name}</h5>
                <p>{item.price} EGP</p>
              </div>

              <input
                type="number"
                min="1"
                value={item.quantity}
                onChange={(e) =>
                  updateQuantity(item.id, parseInt(e.target.value))
                }
                style={{ width: "60px" }}
              />

              <button
                className="btn btn-danger ms-3"
                onClick={() => removeFromCart(item.id)}
              >
                Delete
              </button>
            </div>
          ))}

          <h4>Total: {totalPrice} EGP</h4>
        </>
      )}
    </div>
  );
};

export default Cart;