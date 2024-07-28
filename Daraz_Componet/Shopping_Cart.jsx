import React,{useState,useCallback,useEffect} from "react";
import Freedelivery from "./Delivery";

function Rating({ rating }) {
    const stars = Array.from({ length: 5 }, (_, index) => (
      <span key={index} className={index < rating ? "text-yellow-500" : "text-gray-300"}>
        ★
      </span>
    ));
    return <div>{stars}</div>;
  }

  function Shoppingcart({ image, productname = "USB 2.0 to RJ45 Wired Lan Ethernet NEtwork Adapater", ratingObtained, itemsSold,Price,Discountprice="",Productlink}) {
    return (<>
      <div className="w-52 delay-200 hover:text-blue-500 hover:shadow-2xl hover:cursor-pointer">
        <img src={image} alt="" className="h-52" />
        <h1 className="cursor-pointer pl-2 mr-3 text-sm font-sans mt-2">{productname}...</h1>
        <div className="flex items-center ml-2">
          <Rating rating={ratingObtained} />
          <span className="ml-2 text-gray-500">{itemsSold} items sold</span>
        </div>
        <Freedelivery link={Productlink}/>
      <div className="flex flex-row gap-2 pb-3">
        <span className="ml-2 text-orange-600 text-[22px]">{'Rs. '+ Price}</span>
        <del className="text-gray-500 text-[12px] mt-[9px]">{'Rs. '+Discountprice}</del>
      </div>
      </div>
      </>
    );
  }
export default Shoppingcart
