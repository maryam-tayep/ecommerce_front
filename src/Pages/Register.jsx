import { useFormik } from "formik";
import * as Yup from "yup";
import { register } from "../services/authService";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      password_confirmation: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name required"),
      email: Yup.string().email().required("Email required"),
      password: Yup.string().min(6).required("Password required"),
      password_confirmation: Yup.string()
        .oneOf([Yup.ref("password")], "Passwords must match")
        .required(),
    }),
    onSubmit: async (values) => {
      try {
        const res = await register(values);

        localStorage.setItem("token", res.data.token);

        toast.success("Registered successfully");
        navigate("/products");
      } catch (err) {
        toast.error("Registration failed");
      }
    },
  });

  return (
    <div className="container mt-5">
      <h2>Register</h2>

      <form onSubmit={formik.handleSubmit}>
        <input
          name="name"
          placeholder="Name"
          onChange={formik.handleChange}
          className="form-control mb-2"
        />

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

        <input
          type="password"
          name="password_confirmation"
          placeholder="Confirm Password"
          onChange={formik.handleChange}
          className="form-control mb-2"
        />

        <button className="btn btn-primary w-100">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;