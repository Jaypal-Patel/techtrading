import React, { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  LineChart,
  Line,
  CartesianGrid,
  ResponsiveContainer,
  Legend,
} from "recharts";

const dataUpperChart = [
  { strike: 23750, CEChange: 100000, PEChange: 200000 },
  { strike: 23850, CEChange: -300000, PEChange: 500000 },
  { strike: 23950, CEChange: -100000, PEChange: 700000 },
  { strike: 24050, CEChange: 200000, PEChange: 600000 },
  { strike: 24150, CEChange: -500000, PEChange: 300000 },
];

const dataLowerChart = [
  { strike: 23750, CEOverall: 400000, PEOverall: 600000 },
  { strike: 23850, CEOverall: 500000, PEOverall: 700000 },
  { strike: 23950, CEOverall: 600000, PEOverall: 800000 },
  { strike: 24050, CEOverall: 700000, PEOverall: 900000 },
  { strike: 24150, CEOverall: 800000, PEOverall: 1000000 },
];

const dataFutureLine = [
  { time: "10:00", value: 100 },
  { time: "10:30", value: 120 },
  { time: "11:00", value: 150 },
  { time: "11:30", value: 170 },
  { time: "12:00", value: 200 },
];

const OpenInterestAnalysis = () => {
  const [symbol, setSymbol] = useState("NIFTY");
  const [expiry, setExpiry] = useState("26/12/2024");
  const [strikeCount, setStrikeCount] = useState(30);
  const [duration, setDuration] = useState("Day");
  const [live, setLive] = useState(true);
  const [historicalDate, setHistoricalDate] = useState("2024-03-12");
  const [replay, setReplay] = useState(false);

  return (
    <div className="min-h-screen  mt-10">
      <div className="max-w-screen-xl mx-auto p-6 bg-white shadow-lg rounded-md border border-gray-200 mb-12">
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-700 mb-6 text-center">
          Open Interest Analysis
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="flex flex-col">
            <label className="text-sm sm:text-base font-medium text-gray-600 mb-2">
              Symbol
            </label>
            <select
              value={symbol}
              onChange={(e) => setSymbol(e.target.value)}
              className="w-full p-3 border rounded-md focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="NIFTY">NIFTY</option>
              <option value="BANKNIFTY">BANKNIFTY</option>
              <option value="MINDCPNIFTY">MINDCPNIFTY</option>
            </select>
          </div>

          <div className="flex flex-col">
            <label className="text-sm sm:text-base font-medium text-gray-600 mb-2">
              Expiry
            </label>
            <select
              value={expiry}
              onChange={(e) => setExpiry(e.target.value)}
              className="w-full p-3 border rounded-md focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="26/12/2024">26/12/2024</option>
              <option value="25/01/2025">25/01/2025</option>
            </select>
          </div>

          <div className="flex flex-col">
            <label className="text-sm sm:text-base font-medium text-gray-600 mb-2">
              Strike Count
            </label>
            <input
              type="number"
              value={strikeCount}
              onChange={(e) => setStrikeCount(e.target.value)}
              className="w-full p-3 border rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-sm sm:text-base font-medium text-gray-600 mb-2">
              Duration
            </label>
            <select
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              className="w-full p-3 border rounded-md focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="Day">Day</option>
              <option value="Week">Week</option>
              <option value="Month">Month</option>
            </select>
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              checked={live}
              onChange={(e) => setLive(e.target.checked)}
              className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
            <label className="ml-3 text-sm sm:text-base font-medium text-gray-600">
              Live
            </label>
          </div>

          <div className="flex flex-col">
            <label className="text-sm sm:text-base font-medium text-gray-600 mb-2">
              Historical Date
            </label>
            <input
              type="date"
              value={historicalDate}
              onChange={(e) => setHistoricalDate(e.target.value)}
              className="w-full p-3 border rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              checked={replay}
              onChange={(e) => setReplay(e.target.checked)}
              className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
            <label className="ml-3 text-sm sm:text-base font-medium text-gray-600">
              Replay
            </label>
          </div>

          {replay && (
            <div className="flex flex-col w-full">
              <label className="text-sm sm:text-base font-medium text-gray-600 mb-2">
                End Time
              </label>
              <input type="range" min="0" max="24" className="w-full" />
            </div>
          )}
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto p-6 bg-white shadow-lg mb-20 rounded-md border border-gray-200">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <h3 className="text-sm sm:text-base font-medium text-gray-600 mb-3">
              Open Interest (Change)
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={dataUpperChart}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="strike" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="CEChange" fill="#00C49F" />
                <Bar dataKey="PEChange" fill="#FF8042" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div>
            <h3 className="text-sm sm:text-base font-medium text-gray-600 mb-3">
              Open Interest (Overall)
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={dataLowerChart}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="strike" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="CEOverall" fill="#00C49F" />
                <Bar dataKey="PEOverall" fill="#FF8042" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="mt-10">
          <h3 className="text-sm sm:text-base font-medium text-gray-600 mb-3">
            Future Data
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={dataFutureLine}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="time" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="value" stroke="#8884d8" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default OpenInterestAnalysis;
