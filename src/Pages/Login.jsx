import { useFormik } from "formik";
import * as Yup from "yup";
import { login } from "../services/authService";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email().required(),
      password: Yup.string().required(),
    }),
    onSubmit: async (values) => {
      try {
        const res = await login(values);

        localStorage.setItem("token", res.data.token);

        toast.success("Logged in");
        navigate("/products");
      } catch (err) {
        toast.error("Invalid credentials");
      }
    },
  });

  return (
    <div className="container mt-5">
      <h2>Login</h2>

      <form onSubmit={formik.handleSubmit}>
        <input
          name="email"
          placeholder="Email"
          onChange={formik.handleChange}
          className="form-control mb-2"
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={formik.handleChange}
          className="form-control mb-2"
        />

        <button className="btn btn-success w-100" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;