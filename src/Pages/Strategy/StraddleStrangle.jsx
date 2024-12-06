import React from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  { time: "9:15", "24650.00": 400, "24700.00": 420, "24750.00": 440 },
  { time: "9:30", "24650.00": 420, "24700.00": 430, "24750.00": 450 },
  { time: "9:45", "24650.00": 450, "24700.00": 470, "24750.00": 480 },
  { time: "10:00", "24650.00": 430, "24700.00": 450, "24750.00": 460 },
];

function StraddleStrangle() {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-blue-100 w-full p-6 md:px-20 md:mt-[80px] mt-[30px] pb-10">
      <div className="bg-white border shadow-lg p-3 md:p-6 lg:p-8 my-5">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">
          Straddle Snapshot
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

          {/* {/ Strike Count /} */}
          <div>
            <label
              htmlFor="strike"
              className="block font-medium text-gray-700 mb-1"
            >
              Strike Count
            </label>
            <select
              id="strike"
              className="font-medium outline-none border-b-2 border-slate-300 px-4 py-2"
            >
              <option value="5M">5</option>
              <option value="10M">10</option>
              <option value="15M">15</option>
              <option value="30M">30</option>
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
      <div className="bg-white w-full border shadow-lg p-3 md:p-6 lg:p-8 mt-8 overflow-x-auto flex justify-center">
        <LineChart
          width={800}
          height={400}
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="24650.00" stroke="#8884d8" />
          <Line type="monotone" dataKey="24700.00" stroke="#82ca9d" />
          <Line type="monotone" dataKey="24750.00" stroke="#ff7300" />
        </LineChart>
      </div>
    </div>
  );
}

export default StraddleStrangle;
