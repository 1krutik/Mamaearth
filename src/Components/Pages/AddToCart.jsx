import React, {  useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decAction, IncAction, removeAction } from "./Action";
import { Link } from "react-router-dom";

const AddToCart = () => {



  function getDate() {
    const today = new Date();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    const date = today.getDate();
    return `${month}/${date + 1}/${year}`;
  }

  const data = useSelector((store) => store);

  const [currentDate] = useState(getDate());

  const dispatch = useDispatch();

  function IncQty(id) {
    dispatch(IncAction(id));
  }
  function DecQty(id) {
    dispatch(decAction(id));
  }
  function removeItem(id) {
    dispatch(removeAction(id));
  }

  const totalprice = data.reduce(
    (total, el) => total + parseInt(el.price) * el.qty,
    0
  );

  return (
    <div className="mb-5 mt-5 ">
      {data.length === 0 ? (
        <div className="d-flex w-100 gap-2 align-items-center flex-column">
          <h3 className="align-item-center">Your Cart is Empty</h3>
          <Link to={"/"}>
            <button className="btn btn-outline-secondary">Shop Now</button>
          </Link>
        </div>
      ) : (
        <>
          <div className="w-100">
            {data.map((el, i) => {
              return (
                <div key={el.id} className="d-flex justify-content-around my-3">
                  <div className="">
                    <img
                      style={{
                        height: "100%",
                        width: "100%",
                        objectFit: "cover",
                        objectPosition: "top",

                        borderRadius: "50px",
                        padding: "10px",
                      }}
                      src={el.img}
                      alt="not found"
                    />
                  </div>
                  <div className="">
                    <div>
                      <h4>{el.name}</h4>
                    </div>
                    <div>
                      <h5 className="text-success">
                        ₹ {el.price} Incl. of all taxes
                      </h5>
                    </div>
                    <div>
                      <img
                        className="w-50"
                        src="https://images.mamaearth.in/wysiwyg/goodness-icons.png"
                        alt=""
                      />
                    </div>
                    <h4 className="d-flex mt-3 gap-3">
                      Quantity:
                      <button
                        onClick={() => DecQty(el.id)}
                        className="btn btn-primary"
                      >
                        -
                      </button>
                      <h4
                        style={{ width: "50px" }}
                        className="rounded border border-primary m-1 "
                      >
                        <span className="p-3 ">{el.qty}</span>
                      </h4>
                      <button
                        onClick={() => IncQty(el.id)}
                        className="btn btn-primary"
                      >
                        +
                      </button>
                      <button
                        onClick={() => removeItem(el.id)}
                        className="btn btn-danger"
                      >
                        Remove
                      </button>
                      <Link to={"/buy"} className="btn btn-outline-secondary">Buy Now</Link>
                    </h4>
                    <p className="w-50 ">{el.details}</p>
                    <div>
                      <h3 className="totalprice">Total Price: {totalprice} </h3>
                      <hr />
                    </div>

                    {/* Coupen */}
                    {/* <div className="coupen">
                      <div>
                        <p>
                          <b>Buy Any 3 Product @ Flat 899</b>
                        </p>
                        <div className="d-flex justify-content-between">
                          <p>ViewDetails</p>
                          <p>GET3</p>
                        </div>
                        <hr />
                        <p>Add More 3 Eligible Items To Avail</p>
                      <button className="btn btn-outline-secondary"></button>
                      </div>
                    </div> */}
                    <div>
                      <div className="card">
                        <div className="cpn">
                          <div className="co-img">
                            <img
                              src="https://cdn.kindlife.in/images/feature_variant/9/mamaearth_brand_kindlife_200x200.png?t=1692456976"
                              alt=""
                            />
                          </div>
                          <div className="vertical"></div>
                          <div className="content">
                            <h2>MamaEarth</h2>
                            <h1>
                              10% <span>Coupon</span>
                            </h1>

                            <p>Available Till {currentDate}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
};

export default AddToCart;
