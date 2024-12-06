import React, { useState } from "react";
import { LiaBorderAllSolid, LiaCoinsSolid } from "react-icons/lia";
import { PiCurrencyDollarLight } from "react-icons/pi";

const data = [
  {
    pair: "BTC_USDT",
    type: "Crypto",
    price: 3607.064,
    change1h: 16.9472,
    change24h: 132.3953,
    marketcap: 434850646385.1459,
  },
  {
    pair: "BTC_USDT",
    type: "Crypto",
    price: 3607.064,
    change1h: 16.9472,
    change24h: 132.3953,
    marketcap: 434850646385.1459,
  },
  {
    pair: "GBP_USD",
    type: "Fiat",
    price: 1.38,
    change1h: -0.001,
    change24h: 0.02,
    marketcap: 500000000,
  },
  {
    pair: "GBP_USD",
    type: "Fiat",
    price: 1.38,
    change1h: -0.001,
    change24h: 0.02,
    marketcap: 500000000,
  },
];

function DataViewPage() {
  const [activeButton, setActiveButton] = useState(null);
  const [filterData, setFilterData] = useState(data);

  const handleOnClick = (button) => {
    setActiveButton(button);
    handleData(button);
  };

  const handleData = (button) => {
    if (button === "All") {
      setFilterData(data);
    } else {
      setFilterData(data.filter((item) => item.type === button));
    }
  };

  return (
    <div className="px-4 sm:px-6 md:px-10 lg:px-16 py-10">
      {/ Button Section /}
      <div className="flex flex-row justify-between mb-8 md:10">
        <div className="flex gap-2 md:gap-4">
          {["All", "Crypto", "Fiat"].map((button) => (
            <button
              key={button}
              onClick={() => handleOnClick(button)}
              className={`text-sm md:text-base text-gray-500 border px-2 md:px-4 py-1 md:py-2 rounded-lg flex justify-center items-center ${
                activeButton === button ? "bg-[#B2D1FF] text-black" : ""
              }`}
            >
              {button === "All" && <LiaCoinsSolid className="inline" />}
              {button === "Crypto" && <LiaBorderAllSolid className="inline" />}
              {button === "Fiat" && (
                <PiCurrencyDollarLight className="inline" />
              )}
              <span className="ml-2">{button}</span>
            </button>
          ))}
        </div>
        <div>
          <button className="text-sm md:text-base text-[#0066FF] border border-[#0066FF] px-1 md:px-4 py-1 md:py-2 rounded-lg flex justify-center items-center hover:bg-[#0066FF] hover:text-white">
            <PiCurrencyDollarLight className="inline" />
            <span>All Pair</span>
          </button>
        </div>
      </div>

      {/ Data Section /}
      <div className="overflow-x-auto">
        {/ Desktop View /}
        <table className="hidden sm:table w-full border-collapse text-left">
          <thead>
            <tr>
              <th className="border-b border-gray-300 px-4 py-2">Pair</th>
              <th className="border-b border-gray-300 px-4 py-2">Price</th>
              <th className="border-b border-gray-300 px-4 py-2">1h Change</th>
              <th className="border-b border-gray-300 px-4 py-2">24h Change</th>
              <th className="border-b border-gray-300 px-4 py-2">Marketcap</th>
              <th className="border-b border-gray-300 px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {filterData.map((item, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="border-b border-gray-300 px-4 py-2">
                  {item.pair}
                </td>
                <td className="text-red-600 border-b border-gray-300 px-4 py-2">
                  {item.price}
                </td>
                <td className="text-red-600 border-b border-gray-300 px-4 py-2">
                  {item.change1h}
                </td>
                <td className="text-red-600 border-b border-gray-300 px-4 py-2">
                  {item.change24h}
                </td>
                <td className="border-b border-gray-300 px-4 py-2">
                  {item.marketcap}
                </td>
                <td className="border-b border-gray-300 px-4 py-2">
                  <button className="border border-gray-600 hover:border-[#005CE6] hover:text-[#005CE6] py-1 px-5 rounded-lg">
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/ Mobile View /}
        <div className="sm:hidden">
          {filterData.map((item, index) => (
            <div key={index} className="bg-[#F2F7FF] mb-6 rounded-lg shadow-md">
              <div className="flex justify-between border-b border-gray-300 px-4 py-2">
                <span>Pair</span> <span>{item.pair}</span>
              </div>
              <div className="flex justify-between border-b border-gray-300 px-4 py-2">
                <span>Price</span>
                <span className="text-red-500">{item.price}</span>
              </div>
              <div className="flex justify-between border-b border-gray-300 px-4 py-2">
                <span>1h Change</span>
                <span className="text-red-500">{item.change1h}</span>
              </div>
              <div className="flex justify-between border-b border-gray-300 px-4 py-2">
                <span>24h Change</span>
                <span className="text-red-500">{item.change24h}</span>
              </div>
              <div className="flex justify-between border-b border-gray-300 px-4 py-2">
                <span>Marketcap</span>
                <span>{item.marketcap}</span>
              </div>
              <div className="flex justify-between px-4 py-2">
                <span>Action</span>
                <button className="border border-gray-600 hover:border-[#005CE6] hover:text-[#005CE6] py-1 px-5 rounded-lg">
                  View
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default DataViewPage;
