import React from "react";

const Button = (props) => {
  const { buttonText, callBackFunction } = props;

  const handleOnclickButton = () => {
    if (!callBackFunction) return;
    callBackFunction();
  };
  return (
    <button
      className="bg-[#08059B] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-2 mt-2"
      onClick={handleOnclickButton}
    >
      {buttonText ? buttonText : "Button"}
    </button>
  );
};

export default Button;
