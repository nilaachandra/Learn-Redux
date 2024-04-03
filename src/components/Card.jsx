import React from "react";
import { useLocation } from "react-router-dom";
import Products from "./Products";

const Card = ({ className, onClick1,onClick2, itemImg, itemName, itemPrice }) => {

  const pathName = useLocation()

  

  return (
    <div
      className={`${className} h-[350px] w-[300px] p-2 border border-black flex flex-col justify-between items-center rounded-md`}
    >
      {itemImg && <img src={itemImg} className="w-[150px] h-[150px]" />}
      {itemName && <h3 className="font-bold text-center">{itemName}</h3>}
      {itemPrice && (
        <span className="font-bold text-center">Rs {itemPrice}</span>
      )}
      
      {pathName.pathname === '/' ? <button
        onClick={onClick1}
        className="border rounded-md border-blue-700 bg-blue-700 p-2 text-white font-bold "
      >
        Add To Cart
      </button> : <button
        onClick={onClick2}
        className="border rounded-md border-red-700 bg-red-700 p-2 text-white font-bold "
      >
        Remove From Cart
      </button>}
    </div>
  );
};

export default Card;
