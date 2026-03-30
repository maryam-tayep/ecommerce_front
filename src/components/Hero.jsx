import heroImg from "../assets/hero.png";

const Hero = () => {
  return (
    <section className="hero-section d-flex align-items-center">
      <div className="container">
        <div className="row align-items-center">
          
          <div className="col-md-6">
            <h1>Discover the Best Electronics</h1>
            <p>
              Shop the latest computers, devices, and accessories with the best prices.
            </p>
            <button className="btn btn-primary">Shop Now</button>
          </div>

          <div className="col-md-6 text-center">
            <img src={heroImg} alt="hero" className="img-fluid hero-img" />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;