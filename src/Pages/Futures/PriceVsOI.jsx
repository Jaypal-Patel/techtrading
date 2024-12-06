import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  { name: "Jan", Price: 4000, OI: 2400 },
  { name: "Feb", Price: 3000, OI: 1398 },
  { name: "Mar", Price: 2000, OI: 9800 },
  { name: "Apr", Price: 2780, OI: 3908 },
  { name: "May", Price: 1890, OI: 4800 },
  { name: "Jun", Price: 2390, OI: 3800 },
  { name: "Jul", Price: 3490, OI: 4300 },
];

function PriceVsOI() {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-blue-100 w-full p-6 md:px-20  pb-10">
      <div className="bg-white border shadow-lg p-3 md:p-6 lg:p-8 my-5">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">
          Futures Price Vs OI
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

      {/* {/ Graph Section /} */}
      <div className="bg-white w-full border shadow-lg p-3 md:p-6 lg:p-8 mt-8 overflow-x-auto flex flex-col items-center">
        <h3 className="text-xl font-semibold text-gray-700 mb-4">
          Price vs OI Chart
        </h3>
        <div>
          <LineChart
            width={800}
            height={400}
            data={data}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="Price"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
            <Line type="monotone" dataKey="OI" stroke="#82ca9d" />
          </LineChart>
        </div>
      </div>
    </div>
  );
}

export default PriceVsOI;
