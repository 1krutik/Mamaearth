import "./Carousel.css";

const Carousel = () => {
  return (
    <>
      <div
        id="carouselExample"
        className="carousel slide "
        data-bs-ride="carousel"
        data-bs-interval="3000"
      >
        <div className="carousel-inner mx-3 zindex-1 " style={{ height: "auto" }}>
          <div className="carousel-item active">
            <img
              src="https://st-images.honasa.in/web3_04e8b773d3.jpg?format=auto&width=&qualilty="
              className=""
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://st-images.honasa.in/Vitamin_C_Range_copy_565e1c779f.gif?width=&qualilty="
              className=" "
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://st-images.honasa.in/rosemary_web_4f8718fca5.jpg?format=auto&width=&qualilty="
              className=" "
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://st-images.honasa.in/rice_wo_7c1f1e0187_ezgif_com_optimize_56079f82d8.gif?width=&qualilty="
              className=" "
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://st-images.honasa.in/web4_86fd5215f5.gif?width=&qualilty="
              className=" "
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
        <div className="banner d-flex gap-3  justify-content-center mt-2">
          <div>
            <img
              className=""
              style={{ width: "600px", height: "269px" }}
              src="https://images.mamaearth.in/wysiwyg/18-04-2023/Desktop_How-to-Shop.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              style={{ width: "600px", height: "269px" }}
              src="https://images.mamaearth.in/wysiwyg/18-04-2023/Desktop_T_C.jpg"
              alt=""
            />
          </div>
        </div>
        <div className=" timer d-flex justify-content-center flex-wrap">
          <div id="">
            <h1 className="text-danger mt-5"><i className="fa-solid fa-bars"></i> hurry Up <i className="fa-solid fa-bars"></i></h1>
            <h4 className="text-secondary"> Offer will Expire In</h4>
            <ul className="d-flex ">
          
              <li className="li">
                <span id="hours"></span>Hours
              </li>
              <li className="li">
                <span id="minutes"></span>Minutes
              </li>
              <li className="li">
                <span id="seconds"></span>Seconds
              </li>
            </ul>
          </div>
         
        </div>
      </div>
    </>
  );
};

export default Carousel;
