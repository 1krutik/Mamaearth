import axios from "axios";
import React, { useEffect,  useState } from "react";
import { useDispatch } from "react-redux";
import {   useNavigate, useParams } from "react-router-dom";
import { myAction } from "./Action";

const ProductDetail = () => {
  const {category,id} = useParams();
  
  const [state,setState]=useState({})

  const dispatch=useDispatch()
  const navigate=useNavigate()




  
    const abc = async ()=>{
      const xyz = await axios.get(`http://localhost:3000/${category}`)
      const pi = parseInt(id);
      const product = xyz.data.find((item)=>{
        let itemid = parseInt(item.id)
        return itemid === pi
        
      })
      
      setState(product)
      
    }
    useEffect(()=>{
      abc()
       // eslint-disable-next-line
    },[category,id])
 
function addToCart() {
  dispatch(myAction(state))
  navigate("/cart")
  }
function buyNow (){
  dispatch(myAction(state))
  navigate("/buy")
}

  return (
    <>
    <div className="border">
      
      <h5 className="container mt-3 px-5">Best Product Selected </h5>
    <div className=" container d-flex ">
    
    <div className="">

       <img  style={{height:"300px",objectFit:"cover" ,objectPosition:"top", width:"300px", borderRadius:"50px", padding:"10px"}} src={state.img} alt="" />

       <div className="d-flex mx-5 gap-2">
       <button className="btn btn-outline-secondary " onClick={addToCart}>Add To Cart</button>
       <button className="btn btn-outline-success" onClick={buyNow}>Buy Now</button>

       </div>
       <div className="d-flex gap-3 justify-content-center p-4">


</div>
      </div>
  
      <div className="container w-50 p-5 ">

      <h5>{state.name}</h5>
      <h4 className="text-success">{state.price}

      <p className="text-danger"><s>{state.mrp}</s></p>

      </h4>
      <p>{state.details}</p>
      <h6 className="text-success"> <img style={{width:"20px"}} src="https://rukminim2.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90" alt="" /> {state.offer}</h6>
      </div>
    </div>
    </div>
    </>
  );
};


export default ProductDetail;
