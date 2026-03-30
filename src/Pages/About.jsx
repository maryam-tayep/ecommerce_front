import React from "react";

export default function About() {
  return (
    <div className="container my-5">
      {/* Hero Section مع الصورة */}
      <div className="text-center mb-5">
        
        <h1 className="mt-3">Welcome to E-Commerce Store</h1>
        <p className="text-muted">
          Your one-stop shop for amazing products. Browse, discover, and enjoy
          the best online shopping experience.
        </p>
      </div>

      {/* Content Section */}
      <div className="row align-items-center">
        <div className="col-md-6">
          <h3>Our Mission</h3>
          <p>
            At FakeStore, we aim to provide our customers with high-quality
            products, a user-friendly interface, and excellent customer
            support. Your satisfaction is our top priority.
          </p>
          <h3>Our Vision</h3>
          <p>
            To become the go-to online store for everyone, offering a wide
            variety of products while keeping shopping fun, easy, and secure.
          </p>
        </div>
        <div className="col-md-6 text-center">
         
        </div>
      </div>

      {/* Fun Facts Section */}
      <div className="row text-center mt-5">
        <div className="col-md-4 mb-3">
          <h2>1000+</h2>
          <p>Products Available</p>
        </div>
        <div className="col-md-4 mb-3">
          <h2>500+</h2>
          <p>Happy Customers</p>
        </div>
        <div className="col-md-4 mb-3">
          <h2>24/7</h2>
          <p>Support</p>
        </div>
      </div>
    </div>
  );
}