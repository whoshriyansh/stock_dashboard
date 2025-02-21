import React from "react";

const Card = ({ children }) => {
  return (
    <div
      className={`w-full h-full bg-card border-1 border-[#8957FF]/50 shadow-md py-2 text-primary-text rounded-lg px-4`}
    >
      {children}
    </div>
  );
};

export default Card;
