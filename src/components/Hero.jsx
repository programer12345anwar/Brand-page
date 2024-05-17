import '../App.css'
const Hero = () => {
  return (
    <>
    <div className="Hero-section">
      <div className="Hero-containts">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>
          YOUR FEET DESERVE THE BEST YOUR FEET DESERVE THE BEST AND WE’RE HERE
          TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE
          TO HELP YOU WITH OUR SHOES.
        </p>
        <div className="hero-btn">
          <button>Shop now</button>
          <button id='category'>Category</button>
        </div>
        <div className="shopping">
          <p>Also available on</p>
          <div className="Brand-logo">
            <img src="/public/images/flipkart.png" alt="Flipcart logo" />
            <img src="/public/images/amazon.png" alt="Amazon logo" />
          </div>
        </div>
      </div>
      <div className="Hero-image">
        <img src="/public/images/shoe_image.png" alt="shoe image" />
      </div>
      </div>
    </>
  );
};

export default Hero;
