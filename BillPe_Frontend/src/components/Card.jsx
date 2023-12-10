import React from "react";

const Card = ({ title, offer, handleCardClick, isSelected }) => {
  const handleClick = () => {
    handleCardClick(title);
  };

  return (
    <>
      <div
        onClick={handleClick}
        // className="flex flex-col justify-between items-center h-96 pt-6 max-w-sm  bg-white border border-gray-200 rounded-lg shadow hover:scale-105 transition-transform"
        className={`flex flex-col justify-between items-center h-96 pt-6 max-w-sm  bg-white border ${
          isSelected
            ? "border-blue-500 shadow-lg ring-4 ring-blue-700"
            : "border-gray-200"
        } rounded-lg cursor-pointer shadow hover:scale-105 transition-transform`}
      >
        <h5
          // className="flex items-center p-6 h-24 text-2xl font-bold tracking-tight text-blue-950 bg-yellow-400 ">
          className={`flex items-center p-6 h-24 text-2xl font-bold tracking-tight ${
            isSelected ? "text-blue-500" : "text-black"
          } bg-yellow-400 `}
        >
          {title}
        </h5>
        <p
          // className="mb-3 p-6 font-bold text-2xl text-black ">{offer}</p>
          className={`mb-3 p-6 font-bold text-2xl ${
            isSelected ? "text-blue-500" : "text-black"
          }`}
        >
          {offer}
        </p>
      </div>
    </>
  );
};

export default Card;
