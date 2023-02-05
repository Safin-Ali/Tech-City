import React from "react";

const DiscountBadge = ({ children }) => {
  return (
    <div className="absolute w-full right-2 top-1">
      <div className={`w-[20%] relative ml-auto`}>
        <img src="https://i.ibb.co/jfVL8rY/discount-rounded-badge.png" alt="discount_badge" />
        <div className={`absolute text-whitePrimary top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xl`}>
          <strong>{children}%</strong>
        </div>
      </div>
    </div>
  );
};

export default DiscountBadge;
