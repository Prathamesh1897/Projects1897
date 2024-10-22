const Hero = () => {
  return (
    <>
      <main className="Hero">
        <div className="Hero-content">
          <h1>LET'S HAVE FUN EVERYDAY</h1>
          <p1>
            Where quality meets convenience! Explore our diverse selection of
            top-notch products, curated just for you. With secure payment
            options and fast shipping.
          </p1>
          <div className="Hero-buttons ">
            <button>Shop Now</button>
            <button className="second-button">Category</button>
          </div>
          <div className="Online">
            <p>Exclusively available on</p>
            <div className="brand-icons">
              <img src="" alt="amazon-icon"></img>
              <img src="" alt="flipkart-icon"></img>
            </div>
          </div>
        </div>
        <div clasName="Hero-image">
          <img src="/images/brand_logo1.png" alt="hero-icon"></img>
        </div>
      </main>
    </>
  );
};

export default Hero;
