import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const Foundation = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const productData = await axios.get("http://localhost:3000/foundation");
        setData(productData.data);
      } catch (error) {
        console.log("Error", error);
      }
    }
    fetchData()
  }, []);

  return <div>

    <div className="d-flex flex-wrap mt-2 justify-content-center gap-3">
        <h3 className="container bestsellerh3"><hr />Foundation   <hr /></h3>
     
        {
            data.map((el)=>{
                return <ProductCard key={el.id} item={el}/>
            })
        }

    
    </div>
  </div>;
};

export default Foundation;
