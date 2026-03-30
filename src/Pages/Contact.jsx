import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Swal from "sweetalert2";

export default function Contact() {
  const initialValues = { name: "", email: "", message: "" };

  const validationSchema = Yup.object({
    name: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    message: Yup.string().min(10, "Too Short!").required("Message is required"),
  });

  const onSubmit = (values, { resetForm }) => {
    Swal.fire({
      icon: "success",
      title: "Message Sent!",
      text: `Thanks ${values.name}, your message has been received!`,
      confirmButtonColor: "#802c6e",
    });
    resetForm();
  };

  return (
    <div className="container my-5">
      <h2 className="text-center mb-5">Contact Us</h2>
      <div className="row justify-content-center">
        <div className="col-lg-6 col-md-8">
          <div className="card shadow-sm p-4">
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={onSubmit}
            >
              {({ errors, touched }) => (
                <Form>
                  <div className="mb-3">
                    <label className="form-label fw-bold">Name</label>
                    <Field
                      type="text"
                      name="name"
                      className={`form-control form-control-lg ${errors.name && touched.name ? "is-invalid" : ""}`}
                      placeholder="Enter your name"
                    />
                    <ErrorMessage name="name" component="div" className="invalid-feedback" />
                  </div>

                  <div className="mb-3">
                    <label className="form-label fw-bold">Email</label>
                    <Field
                      type="email"
                      name="email"
                      className={`form-control form-control-lg ${errors.email && touched.email ? "is-invalid" : ""}`}
                      placeholder="Enter your email"
                    />
                    <ErrorMessage name="email" component="div" className="invalid-feedback" />
                  </div>

                  <div className="mb-4">
                    <label className="form-label fw-bold">Message</label>
                    <Field
                      as="textarea"
                      name="message"
                      rows="5"
                      className={`form-control form-control-lg ${errors.message && touched.message ? "is-invalid" : ""}`}
                      placeholder="Write your message here..."
                    />
                    <ErrorMessage name="message" component="div" className="invalid-feedback" />
                  </div>

                  <div className="d-grid">
                    <button type="submit" className="btn btn-primary btn-lg">
                      Send Message
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
}