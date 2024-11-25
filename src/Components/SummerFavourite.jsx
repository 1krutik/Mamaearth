import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const SummerFavourite = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        let productData = await axios.get("http://localhost:3000/SummerFavourites");
        console.log(productData.data);
        setData(productData.data);
      } catch (error) {
        console.log("error fetching data", error);
      }
    }
    fetchData();
  }, []);

  return (
    <div>
       
     
      <div className="d-flex flex-wrap justify-content-center mt-2  gap-3">
     <h3  className="container bestsellerh3 ">
      <hr />Summer Favourite
      <hr />
     </h3>
{data.map((item) => {
    
          return  <ProductCard key={item.id} item={item} />;
        })}
      </div>
    </div>
  );
};

export default SummerFavourite;
