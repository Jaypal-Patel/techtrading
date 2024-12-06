import React, { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
  
  PieChart,
  Pie,
  Cell,
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

const dataHistogram = [
  { bin: "0-10", frequency: 30 },
  { bin: "10-20", frequency: 45 },
  { bin: "20-30", frequency: 55 },
  { bin: "30-40", frequency: 60 },
  { bin: "40-50", frequency: 50 },
  { bin: "50-60", frequency: 40 },
];

const dataPieChart = [
  { name: "Category A", value: 400 },
  { name: "Category B", value: 300 },
  { name: "Category C", value: 300 },
  { name: "Category D", value: 200 },
];

const TrendingStrike = () => {
  const [symbol, setSymbol] = useState("NIFTY");
  const [expiry, setExpiry] = useState("26/12/2024");
  const [strikeCount, setStrikeCount] = useState(30);
  const [duration, setDuration] = useState("Day");
  const [live, setLive] = useState(true);
  const [historicalDate, setHistoricalDate] = useState("2024-03-12");
  const [replay, setReplay] = useState(false);

  return (
    <div className="min-h-screen sm:min-h-100 mt-10 ">
      <div className="max-w-screen-xl mx-auto p-6 bg-white shadow-lg rounded-md border border-gray-200 mb-12">
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-700 mb-6 text-center">
        Trending Strikes for Open Interest
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
            <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4">
              Open Interest (Change) - Bar Chart
            </h3>
            <ResponsiveContainer width="100%" height={350}>
              <BarChart data={dataUpperChart}>
                <CartesianGrid strokeDasharray="5 5" stroke="#e0e0e0" />
                <XAxis dataKey="strike" stroke="#8884d8" />
                <YAxis stroke="#8884d8" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#f5f5f5",
                    borderRadius: "5px",
                  }}
                />
                <Legend verticalAlign="top" height={36} />
                <Bar
                  dataKey="CEChange"
                  fill="url(#grad1)"
                  radius={[10, 10, 0, 0]}
                />
                <Bar
                  dataKey="PEChange"
                  fill="url(#grad2)"
                  radius={[10, 10, 0, 0]}
                />
                <defs>
                  <linearGradient
                    id="grad1"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop
                      offset="0%"
                      style={{ stopColor: "#ff7f50", stopOpacity: 1 }}
                    />
                    <stop
                      offset="100%"
                      style={{ stopColor: "#ff6347", stopOpacity: 1 }}
                    />
                  </linearGradient>
                  <linearGradient
                    id="grad2"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop
                      offset="0%"
                      style={{ stopColor: "#48c9b0", stopOpacity: 1 }}
                    />
                    <stop
                      offset="100%"
                      style={{ stopColor: "#1f8b81", stopOpacity: 1 }}
                    />
                  </linearGradient>
                </defs>
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div>
            <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4">
              Open Interest (Overall) - Line Chart
            </h3>
            <ResponsiveContainer width="100%" height={350}>
              <LineChart data={dataLowerChart}>
                <CartesianGrid strokeDasharray="5 5" stroke="#e0e0e0" />
                <XAxis dataKey="strike" stroke="#8884d8" />
                <YAxis stroke="#8884d8" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#f5f5f5",
                    borderRadius: "5px",
                  }}
                />
                <Legend verticalAlign="top" height={36} />
                <Line
                  type="monotone"
                  dataKey="CEOverall"
                  stroke="#ff6347"
                  strokeWidth={3}
                />
                <Line
                  type="monotone"
                  dataKey="PEOverall"
                  stroke="#48c9b0"
                  strokeWidth={3}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="mt-12">
          <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4">
            Future Trend - Line Chart
          </h3>
          <ResponsiveContainer width="100%" height={350}>
            <LineChart data={dataFutureLine}>
              <CartesianGrid strokeDasharray="5 5" />
              <XAxis dataKey="time" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="value"
                stroke="#8884d8"
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="mt-12">
          <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4">
            Category Distribution - Pie Chart
          </h3>
          <ResponsiveContainer width="100%" height={350}>
            <PieChart>
              <Pie
                data={dataPieChart}
                dataKey="value"
                outerRadius={150}
                fill="#8884d8"
                label
              >
                {dataPieChart.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={
                      entry.name === "Category A"
                        ? "#ff7f50"
                        : entry.name === "Category B"
                        ? "#48c9b0"
                        : "#1f8b81"
                    }
                  />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="mt-12">
          <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4">
            Frequency Distribution - Histogram
          </h3>
          <ResponsiveContainer width="100%" height={350}>
            <BarChart data={dataHistogram}>
              <CartesianGrid strokeDasharray="5 5" />
              <XAxis dataKey="bin" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="frequency" fill="#ff7f50" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default TrendingStrike;
   