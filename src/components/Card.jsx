import React from "react";

const Card = ({ className, onClick, itemImg, itemName, itemPrice }) => {
  return (
    <div
      className={`${className} h-[350px] w-[300px] p-2 border border-black flex flex-col justify-between items-center rounded-md`}
    >
      {itemImg && <img src={itemImg} className="w-[150px] h-[150px]" />}
      {itemName && <h3 className="font-bold text-center">{itemName}</h3>}
      {itemPrice && (
        <span className="font-bold text-center">Rs {itemPrice}</span>
      )}
      <button
        onClick={onClick}
        className="border rounded-md border-blue-700 bg-blue-700 p-2 text-white font-bold "
      >
        Add To Cart
      </button>
    </div>
  );
};

export default Card;
