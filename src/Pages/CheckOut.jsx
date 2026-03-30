import { useCart } from "../context/CartContext";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const Checkout = () => {
  const { cart, totalPrice } = useCart();

  const validationSchema = Yup.object({
    name: Yup.string().min(3, "Name must be at least 3 characters").required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    phone: Yup.string().matches(/^[0-9]{10,15}$/, "Invalid phone number").required("Phone is required"),
    address: Yup.string().min(10, "Address too short").required("Address is required"),
  });

  const handleSubmit = (values, { resetForm }) => {
    if (cart.length === 0) return;

    alert("Order placed successfully 🎉");

    localStorage.removeItem("cart");
    resetForm();
    window.location.href = "/";
  };

  return (
    <div className="container checkout-page mt-5">
      <h2 className="mb-4">Checkout 🧾</h2>

      <div className="row g-4">
        
        {/* FORM */}
        <div className="col-md-6">
          <div className="checkout-card p-4">
            <Formik
              initialValues={{
                name: "",
                email: "",
                phone: "",
                address: "",
              }}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              <Form>

                <div className="mb-3">
                  <Field
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    className="form-control"
                  />
                  <ErrorMessage name="name" component="div" className="text-danger" />
                </div>

                <div className="mb-3">
                  <Field
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="form-control"
                  />
                  <ErrorMessage name="email" component="div" className="text-danger" />
                </div>

                <div className="mb-3">
                  <Field
                    type="text"
                    name="phone"
                    placeholder="Phone"
                    className="form-control"
                  />
                  <ErrorMessage name="phone" component="div" className="text-danger" />
                </div>

                <div className="mb-3">
                  <Field
                    as="textarea"
                    name="address"
                    placeholder="Address"
                    className="form-control"
                  />
                  <ErrorMessage name="address" component="div" className="text-danger" />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary w-100"
                  disabled={cart.length === 0}
                >
                  Place Order
                </button>

                {cart.length === 0 && (
                  <p className="text-danger mt-2 text-center">
                    Your cart is empty
                  </p>
                )}

              </Form>
            </Formik>
          </div>
        </div>

        {/* ORDER SUMMARY */}
        <div className="col-md-6">
          <div className="checkout-card p-4">
            <h4 className="mb-3">Order Summary</h4>

            {cart.length === 0 ? (
              <p>No items in cart</p>
            ) : (
              cart.map((item) => (
                <div key={item.id} className="d-flex justify-content-between mb-2">
                  <span>
                    {item.name} × {item.quantity}
                  </span>
                  <span>{item.price * item.quantity} EGP</span>
                </div>
              ))
            )}

            <hr />

            <h5 className="text-success">
              Total: {totalPrice} EGP
            </h5>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Checkout;