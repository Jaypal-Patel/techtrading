import React from "react";

const data = [
  {
    Symbol: "NIFTY",
    Date: "2024-12-03",
    Time: "15:30",
    ltp: 24534.0,
    PriceChange: -19.2,
    ChangePercentage: -0.08,
    OI: 21300,
    OIChange: -21300,
    OIChangePercentage: -0.08,
    type: "Long Unwinding",
  },
  {
    Symbol: "NIFTY",
    Date: "2024-12-03",
    Time: "15:15",
    ltp: 24533.2,
    PriceChange: -4.55,
    ChangePercentage: -0.02,
    OI: 23275,
    OIChange: 23275,
    OIChangePercentage: 0.1,
    type: "Short Build",
  },
];

function LongShort() {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-blue-100 w-full p-6 md:px-20  pb-10">
      <div className=" bg-white border shadow-lg p-3 md:p-6 lg:p-8 my-5 ">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">
          Futures Long vs Short Analysis
        </h2>

        <div className="border p-4 flex gap-14">
          {/* {/ Symbol Option /} */}
          <div>
            <label
              htmlFor="symbol"
              className="block font-medium text-gray-700 mb-1"
            >
              Symbol
            </label>
            <select
              id="symbol"
              className="font-medium outline-none border-b-2 border-slate-300 px-4 py-2"
            >
              <option value="All">All</option>
              <option value="NIFTY">NIFTY</option>
              <option value="SUPREMEIND">SUPREMEIND</option>
              <option value="CYIENT">CYIENT</option>
            </select>
          </div>

          {/* {/ Expiry Date Option /} */}
          <div>
            <label
              htmlFor="expiry"
              className="block font-medium text-gray-700 mb-1"
            >
              Expiry Date
            </label>
            <select
              id="expiry"
              className="font-medium outline-none border-b-2 border-slate-300 px-4 py-2"
            >
              <option value="20-08-2024">20-08-2024</option>
              <option value="17-07-2024">17-07-2024</option>
              <option value="24-04-2024">24-04-2024</option>
              <option value="28-06-2024">28-06-2024</option>
            </select>
          </div>

          {/* {/ Interval /} */}
          <div>
            <label
              htmlFor="interval"
              className="block font-medium text-gray-700 mb-1"
            >
              Interval
            </label>
            <select
              id="interval"
              className="font-medium outline-none border-b-2 border-slate-300 px-4 py-2"
            >
              <option value="5M">5M</option>
              <option value="10M">10M</option>
              <option value="15M">15M</option>
              <option value="30M">30M</option>
            </select>
          </div>

          {/* {/ Live Option /} */}
          <div className="flex flex-col items-center gap-2">
            <label htmlFor="live" className="font-medium text-gray-700">
              Live
            </label>
            <input
              type="checkbox"
              id="live"
              className="w-5 h-5 mt-3 accent-blue-500 cursor-pointer"
            />
          </div>

          {/* {/ Historical Date /} */}
          <div>
            <label
              htmlFor="date"
              className="block font-medium text-gray-700 mb-1"
            >
              Historical Date
            </label>
            <input
              type="date"
              id="date"
              className="font-medium border-b-2 outline-none border-slate-300 px-4 py-2"
            />
          </div>
        </div>
      </div>

      {/* {/ Data Table /} */}
      <div className="bg-white w-full border shadow-lg p-3 md:p-6 lg:p-8 mt-8 overflow-x-auto">
        <table className="w-full border text-left bg-white overflow-hidden">
          <thead className=" text-black">
            <tr>
              <th className="border-b px-4 py-3">Date</th>
              <th className="border-b px-4 py-3">Time</th>
              <th className="border-b px-4 py-3">Symbol</th>
              <th className="border-b px-4 py-3">Last Price</th>
              <th className="border-b px-4 py-3">Price Change</th>
              <th className="border-b px-4 py-3">OI Change</th>
              <th className="border-b px-4 py-3">Long vs Short</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index} className={`hover:bg-gray-100 `}>
                <td className="border-b px-4 py-3">{item.Date}</td>
                <td className="border-b px-4 py-3">{item.Time}</td>
                <td className="border-b px-4 py-3">{item.Symbol}</td>
                <td className="border-b px-4 py-3">{item.ltp}</td>
                <td
                  className={`border-b px-4 py-3 font-semibold ${
                    item.PriceChange > 0 ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {item.PriceChange}
                </td>
                <td
                  className={`border-b px-4 py-3 font-semibold ${
                    item.OIChange > 0 ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {item.OIChange}
                </td>
                <td className="border-b px-4 py-3">{item.type}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default LongShort;
