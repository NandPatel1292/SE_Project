import React from "react";

const DashboardButtons = (props) => {
  const { buttonText, callBackFunction } = props;

  const handleOnclickButton = () => {
    if (!callBackFunction) return;
    callBackFunction();
  };
  return (
    <button
      className="bg-[#cabdfe80] hover:bg-gray-400 text-gray-800 font-bold  p-8 rounded-xl "
      onClick={handleOnclickButton}
    >
      {buttonText ? buttonText : "Button"}
    </button>
  );
};

export default DashboardButtons;
