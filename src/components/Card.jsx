import React, { useContext } from "react";

const Card = ({ children }) => {
  return (
    <div className={`w-full h-full rounded-xl relative p-2 bg-primary`}>
      {children}
    </div>
  );
};

export default Card;
