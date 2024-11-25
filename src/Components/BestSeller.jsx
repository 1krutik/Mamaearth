import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const BestSeller = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        let productData = await axios.get("http://localhost:3000/BestSeller");
        console.log(productData.data);
        setData(productData.data);
      } catch (error) {
        console.log("error fetching data", error);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="  justify-content-center" >
       
     
      <div className="d-flex flex-wrap justify-content-center  gap-3">
     <div>
     <hr />  <h3 className="container mt-3">Best  Seller
     <hr /></h3>
     <p className="">Explore best-selling safe, natural, and 100% toxin-free baby and beauty products from Mamaearth. Get amazing deals and start your toxin-free skin, hair, and baby care journey.</p>
     </div>
{data.map((item) => {
    
          return  <ProductCard key={item.id} item={item} />;
        })}
      </div>
    </div>
  );
};

export default BestSeller;
