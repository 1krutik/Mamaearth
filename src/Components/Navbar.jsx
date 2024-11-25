import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Navbar = () => {
  const data = useSelector((store) => store);

  const [index, setIndex] = useState(0);
  const placeholders = [
    "Search for Ubtan",
    "Search for Face Wash",
    "Search for Ubtan",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % placeholders.length);
    }, 2000);

    // Clear interval on component unmount
    return () => clearInterval(interval);
  }, [placeholders.length]);

  return (
    <div className="sticky ">
    <div className="main ">
      <div
        style={{ backgroundColor: "rgb(240, 68, 56) ", height: "28px" }}
        className=" text-white w-100  d-flex  justify-content-around"
      >
        <div className="">
          <p style={{ fontSize: "12px" }}>
            Asia's First Brand With Made SAFE Certified Products{" "}
          </p>
        </div>
        <div className="mt-1">
          <p style={{ fontSize: "12px" }}>
            OMG Sale is live - Buy 1 Get 1 FREE | Coupon: OMG | Click To Shop
          </p>
        </div>
      </div>


          <nav
            style={{ position: "sticky", top: "0", height: "50px" }}
            className="navbar  navbar-expand-lg bg-body-tertiary"
          >
            <div className=" d-flex justify-content-end">
              <div className="mx-5">
                <Link className="link" to={"/"}>
                  <img
                    className="mb-2 "
                    style={{ width: "180px", height: "40px" }}
                    src="https://images.mamaearth.in/wysiwyg/mamaearth-logo.png?format=auto&fit=scale"
                    alt=""
                  />
                </Link>
              </div>
              <div>
                <button
                  className="navbar-toggler  "
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon "></span>
                </button>
              </div>
            </div>
            <div className="container ">
              <div
                className="collapse navbar-collapse "
                id="navbarSupportedContent"
              >
                <form className="d-flex  col-6" role="search">
                  <input
                    id="dynamic-placeholder"
                    className="form-control "
                    type="search"
                    placeholder={placeholders[index]}
                    aria-label="Search"
                  />
                </form>
                <div className="container mt-3 ">
                  <ul
                    style={{ textDecoration: "none", listStyle: "none" }}
                    className=" d-flex gap-3  justify-content-evenly"
                  >
                    <li>
                      <img
                        style={{ width: "150px" }}
                        src="https://images.mamaearth.in/svg/gi-home-button.svg"
                        alt=""
                      />
                    </li>

                    <li className=" ">
                      <Link className="link" to={"/login"}>
                      <button className="btn btn-outline-primary">

                        <i className="fa-regular fa-user"> </i>
                        <span className="mt-2 px-2"> Login</span>
                      </button>
                      </Link>
                    </li>
                    {/* <li className=" mt-1">
                      <i className="fa-solid fa-cart-shopping fa-lg"></i> Cart
                    </li> */}
                     <li className="nav-item">
              <Link className="nav-link" to={"/cart"}>
                <button className="btn btn-outline-secondary position-relative">
                   Cart
                   <i className="fa-solid fa-cart-shopping px-2"> </i>
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {data.length}
                  </span>
                </button>
              </Link>
            </li>
                  </ul>
                </div>
              </div>
            </div>
          </nav>
        </div>

        <div
          style={{
            backgroundColor: "white",
            boxShadow:
              " 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
          }}
          className="border"
        >
          <div>
            <ul
              style={{ listStyle: "none" }}
              className="headtul flex-wrap d-flex gap-5 m-2 justify-content-center "
            >
              <Link className="Link" to={"/"}>
                <li>HOME</li>
              </Link>
            <Link to={"/"}>
              <li>FACE</li>
            </Link>
              <li>HAIR</li>
              <li>MAKEUP</li>
              <li>BODY</li>
              <li>BABY</li>
              <li>COMBOS</li>
              <li>NEW LAUNCHES</li>
              <li>INGREIDENT</li>
              <li>ALL PRODUCTS</li>
              <li>BLOG</li>
              <li>PLANT GOODNESS</li>
              <li>STORE LOCATOR</li>
            </ul>
          </div>
        </div>
      </div>
  );
};

export default Navbar;
