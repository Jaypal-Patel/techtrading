import React from "react";
import stocksData from "./stocks.json";

const InfoBar = () => {
  return (
    <div className="overflow-hidden bg-gray-800 text-white py-2 ">
      <div
        className="flex gap-10 whitespace-nowrap animate-scroll"
        style={{
          animation: "scroll 20s linear infinite",
        }}
      >
        {/* Loop through the stocks data from the JSON */}
        {[...stocksData.stocks, ...stocksData.stocks].map((stock, index) => (
          <div key={index} className="flex items-center space-x-2">
            <span>{stock.name}</span>
            <span className="text-gray-200">{stock.price}</span>
            <span
              className={
                stock.color === "red" ? "text-red-400" : "text-green-400"
              }
            >
              {stock.change} ({stock.percent})
            </span>
          </div>
        ))}
      </div>
      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }
      `}</style>
    </div>
  );
};

export default InfoBar;
