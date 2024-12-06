import React, { useState } from "react";

const data = [
  {
    Symbol: "SUPREMEIND",
    ltp: 4776.2,
    PriceChange: 342.65,
    ChangePercentage: 4.81,
    OI: 270,
    OIChange: 205700,
    OIChangePercentage: 76.27,
    Expiry: "26-12-24",
    type: "Long Build",
  },
  {
    Symbol: "SUPREMEIND",
    ltp: 4776.2,
    PriceChange: 342.65,
    ChangePercentage: 4.81,
    OI: 270,
    OIChange: 205700,
    OIChangePercentage: 76.27,
    Expiry: "26-12-24",
    type: "Long Build",
  },
  {
    Symbol: "CYIENT",
    ltp: 1946.85,
    PriceChange: -32.5,
    ChangePercentage: -1.67,
    OI: 330,
    OIChange: 194700,
    OIChangePercentage: 58.95,
    Expiry: "26-12-24",
    type: "Short Build",
  },
  {
    Symbol: "CYIENT",
    ltp: 1946.85,
    PriceChange: -32.5,
    ChangePercentage: -1.67,
    OI: 330,
    OIChange: 194700,
    OIChangePercentage: 58.95,
    Expiry: "26-12-24",
    type: "Short Build",
  },
  {
    Symbol: "KEI",
    ltp: 4450.0,
    PriceChange: -51.1,
    ChangePercentage: -1.15,
    OI: 144,
    OIChange: -78600,
    OIChangePercentage: -54.47,
    Expiry: "26-12-24",
    type: "Long Unwinding",
  },
  {
    Symbol: "KEI",
    ltp: 4450.0,
    PriceChange: -51.1,
    ChangePercentage: -1.15,
    OI: 144,
    OIChange: -78600,
    OIChangePercentage: -54.47,
    Expiry: "26-12-24",
    type: "Long Unwinding",
  },
  {
    Symbol: "KEAPE",
    ltp: 4450.0,
    PriceChange: 51.1,
    ChangePercentage: 1.15,
    OI: 144,
    OIChange: -78600,
    OIChangePercentage: -54.47,
    Expiry: "26-12-24",
    type: "Short Covering",
  },
  {
    Symbol: "KEAPE",
    ltp: 4450.0,
    PriceChange: 51.1,
    ChangePercentage: 1.15,
    OI: 144,
    OIChange: -78600,
    OIChangePercentage: -54.47,
    Expiry: "26-12-24",
    type: "Short Covering",
  },
];

function Analysis() {
  const [filterData, setFilterData] = useState(data);

  const handleButton = (filterType) => {
    if (filterType === "Full Data") {
      setFilterData(data);
    } else {
      const filtered = data.filter((item) => item.type === filterType);
      setFilterData(filtered);
    }
  };

  return (
    <div className="bg-gradient-to-r from-blue-50 to-blue-100 cw-full h-full px-4 sm:px-6 md:px-6 lg:px-16 py-10">
      <div className="bg-white border shadow-lg p-3 md:p-6 lg:p-8 my-5 ">
        <h2 className="text-2xl md:text-3xl font-bold mb-5">
          Futures OI Analysis
        </h2>
        <div className="border  w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 md:gap-4 lg:pr-[30%]">
          {[
            { label: "Full Data", color: "bg-[#006DAF] " },
            { label: "Long Build", color: "bg-[#02B3A9] " },
            { label: "Short Build", color: "bg-[#F3704D] " },
            { label: "Long Unwinding", color: "bg-[#02B3A9] " },
            { label: "Short Covering", color: "bg-[#F3704D] " },
          ].map((button, index) => (
            <button
              key={index}
              onClick={() => handleButton(button.label)}
              className={`text-sm md:text-base border md:px-4 py-2 md:py-3 rounded-lg flex justify-center items-center text-white ${button.color} `}
            >
              <span className="ml-2">{button.label}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="bg-white w-full border shadow-lg p-3 md:p-6 lg:p-8 mt-8 overflow-x-auto">
        <table className="hidden lg:table border w-full border-collapse text-left">
          <thead>
            <tr>
              <th className="border-b border-gray-300 px-4 py-3">Symbol</th>
              <th className="border-b border-gray-300 px-4 py-3">ltp</th>
              <th className="border-b border-gray-300 px-4 py-3">
                Price Change
              </th>
              <th className="border-b border-gray-300 px-4 py-3">% Change</th>
              <th className="border-b border-gray-300 px-4 py-3">OI</th>
              <th className="border-b border-gray-300 px-4 py-3">OI Change</th>
              <th className="border-b border-gray-300 px-4 py-3">
                % OI Change
              </th>
              <th className="border-b border-gray-300 px-4 py-2">Expiry</th>
            </tr>
          </thead>
          <tbody>
            {filterData.map((item, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="border-b border-gray-300 px-4 py-3">
                  {item.Symbol}
                </td>
                <td className=" border-b border-gray-300 px-4 py-3">
                  {item.ltp}
                </td>
                <td className="border-b border-gray-300 px-4 py-3">
                  <span
                    className={`${
                      item.PriceChange > 0 ? "text-[#02B3A9]" : "text-[#F3704D]"
                    }`}
                  >
                    {item.PriceChange}
                  </span>
                </td>
                <td className=" border-b border-gray-300 px-4 py-3">
                  <span
                    className={`${
                      item.ChangePercentage > 0
                        ? "text-[#02B3A9]"
                        : "text-[#F3704D]"
                    }`}
                  >
                    {item.ChangePercentage}%
                  </span>
                </td>
                <td className="border-b border-gray-300 px-4 py-3">
                  {item.OI}K
                </td>
                <td className=" border-b border-gray-300 px-4 py-3">
                  <span
                    className={`${
                      item.OIChange > 0 ? "text-[#02B3A9]" : "text-[#F3704D]"
                    }`}
                  >
                    {item.OIChange}
                  </span>
                </td>
                <td className=" border-b border-gray-300 px-4 py-3">
                  <span
                    className={`${
                      item.OIChangePercentage > 0
                        ? "text-[#02B3A9]"
                        : "text-[#F3704D]"
                    }`}
                  >
                    {item.OIChangePercentage}%
                  </span>
                </td>
                <td className="border-b border-gray-300 px-4 py-3">
                  {item.Expiry}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="lg:hidden grid grid-cols-1 md:grid-cols-2 gap-4">
          {filterData.map((item, index) => (
            <div key={index} className="bg-[#F2F7FF] mb-6 rounded-lg shadow-md">
              <div className="flex justify-between border-b border-gray-300 px-4 py-2">
                <span>Symbol</span> <span>{item.Symbol}</span>
              </div>
              <div className="flex justify-between border-b border-gray-300 px-4 py-2">
                <span>ltp</span>
                <span className="">{item.ltp}</span>
              </div>
              <div className="flex justify-between border-b border-gray-300 px-4 py-3">
                <span>Price Change</span>
                <span
                  className={`${
                    item.PriceChange > 0 ? "text-[#02B3A9]" : "text-[#F3704D]"
                  }`}
                >
                  {item.PriceChange}
                </span>
              </div>
              <div className="flex justify-between border-b border-gray-300 px-4 py-3">
                <span>% Change</span>
                <span
                  className={`${
                    item.ChangePercentage > 0
                      ? "text-[#02B3A9]"
                      : "text-[#F3704D]"
                  }`}
                >
                  {item.ChangePercentage}
                </span>
              </div>
              <div className="flex justify-between border-b border-gray-300 px-4 py-3">
                <span>OI</span>
                <span>{item.OI}</span>
              </div>
              <div className="flex justify-between border-b border-gray-300 px-4 py-3">
                <span>OI Change</span>
                <span
                  className={`${
                    item.OIChange > 0 ? "text-[#02B3A9]" : "text-[#F3704D]"
                  }`}
                >
                  {item.OIChange}
                </span>
              </div>
              <div className="flex justify-between border-b border-gray-300 px-4 py-3">
                <span>% OI Change</span>
                <span
                  className={`${
                    item.OIChangePercentage > 0
                      ? "text-[#02B3A9]"
                      : "text-[#F3704D]"
                  }`}
                >
                  {item.OIChangePercentage}
                </span>
              </div>
              <div className="flex justify-between border-b border-gray-300 px-4 py-3">
                <span>Expiry</span>
                <span>{item.Expiry}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Analysis;
