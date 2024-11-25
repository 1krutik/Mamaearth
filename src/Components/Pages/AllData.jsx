import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function AllData() {
  const { category } = useParams();
  console.log(category);

  const [state, setState] = useState([]);

  const abc = async () => {
    const xyz = await axios.get(`http://localhost:3000/${category}`);
    console.log(xyz.data);
    setState(xyz.data);
  };

  useEffect(() => {
    abc(); // eslint-disable-next-line
  }, [category]);

  return (
    <>
      <h4 className="mt-5"> Best Products</h4>
      <div className="d-flex  mb-5 flex-wrap gap-4  justify-content-center">
        {state.map((item) => {
          return (
            <>
              <div className="mt-2" style={{ backgroundColor: "#f2f3f4" }}>
                <div
                  className="card"
                  style={{ width: "18rem", textAlign: "center" }}
                >
                  <Link to={`/productdetails/${category}/${item.id}`}>
                   <div>
                   <img
                src={item.img}
                className="card-img-top "
                style={{
                  padding: "0px 30px",
                  width: "100%",
                  height: "300px",
                  objectPosition: "top",
                  objectFit: "cover",
                }}
                alt="..."
              />
                 
                      </div>
                  </Link>
                <div className="card-body ">

                  <p style={{
              color: "ActiveBorder",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis"}}>{item.name}</p>
              
                  <div >
                    <h6 className="text-success">{item.price}</h6>

                    <p className="text-danger">
                      <s>{item.mrp}</s> <span className="text-success">{item.Discount}</span>
                    </p>
                    <p className="text-success"></p>
                    <Link to={`/productdetails/${category}/${item.id}`}>
                    <button className="btn btn-outline-success col-12">See More</button>
                    </Link>
                  </div>
                </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}

export default AllData;
