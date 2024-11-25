import { Link } from "react-router-dom";

const ProductCard = ({ item }) => {
  console.log(item.category);
  return (
    <div
      className="d-flex "
      style={{
        cursor: "pointer",
        backgroundColor: "#F2F3F4",
        marginTop: "20px",
      }}
    >
      <Link to={`/alldata/${item.category}`} className="Link">
        <div className="card" style={{ width: "20rem", textAlign: "center" }}>
          <p className="bestseller">Best Seller</p>

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

          <div className="card-body">
            <p
              style={{
                color: "black",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
              className="card-title"
            >
              {item.name}
            </p>
            <h5 className="card-text text-success">{item.Discount}</h5>
            <p className="" style={{ color: "rgb(255, 195, 0)" }}>
              ★ 4.8{" "}
              <img
                style={{ width: "30px" }}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyjOkdvT-mfcMvdObQettSMxX0OAaJ4vM9gw&s"
                alt=""
              />{" "}
              <span className="text-dark">382 Reviews</span>{" "}
            </p>
          </div>
          <button
            style={{ backgroundColor: "rgb(0, 174, 239)", height: "52px" }}
            className="btn text-white "
          >
            {" "}
            SEE MORE
          </button>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
