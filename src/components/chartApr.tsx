import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  LineChart,
  Legend,
  Line
} from "recharts";
import moment from 'moment';

const data = [
  {
    month: "2022.04.01",
    a: 5,
  },
  {
    month: "2022.04.02",
    a: 10,
  },
  {
    month: "2022.04.03",
    a: 15,
  },
  {
    month: "2022.04.04",
    a: 20,
  },
  {
    month: "2022.04.05",
    a: 25,
  },
  {
    month: "2022.04.06",
    a: 30,
  },
  {
    month: "2022.04.07",
    a: 35,
  },
  {
    month: "2022.04.08",
    a: 40,
  },
  {
    month: "2022.04.09",
    a: 45,
  },
  {
    month: "2022.04.10",
    a: 50,
  },
  {
    month: "2022.04.11",
    a: 55,
  },
  {
    month: "2022.04.12",
    a: 60,
  },
  {
    month: "2022.04.13",
    a: 65,
  },
  {
    month: "2022.04.14",
    a: 70,
  },
  {
    month: "2022.04.15",
    a: 75,
  },
  {
    month: "2022.04.16",
    a: 80,
  },
];

function ChartApr() {

  const toPercent = (decimal: number) =>
    `${decimal.toFixed(0)}%`;

  const dateFormatter = (date: moment.MomentInput) => {
    return moment(date).format('D MMM');
  };

  const renderLineChart = (
    <LineChart width={1000} height={550} data={data}
      margin={{ top: 15, right: 10, left: 50, bottom: 5 }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis
        dataKey="month"
        tickFormatter={dateFormatter}
        domain={[data[0].month, data[data.length - 1].month]}
      />
      <YAxis
        tickFormatter={toPercent}
        domain={[0, 100]}
      />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="a" stroke="#8884d8" />
      <Area type="monotone" dataKey="a" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
    </LineChart>
  );

  const renderAreaChart = (
    <AreaChart width={750} height={400} data={data}
      margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
      <defs>
        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#3a5682" stopOpacity={0.7}/>
          <stop offset="95%" stopColor="#3a5682" stopOpacity={0.7}/>
        </linearGradient>
      </defs>
      <XAxis
        dataKey="month"
        color={'#fff'}
        tickFormatter={dateFormatter}
        domain={[data[0].month, data[data.length - 1].month]}
        tick={{ fill: 'white' }} 
      />
      <YAxis
        tickFormatter={toPercent}
        domain={[0, 100]}
        tick={{ fill: 'white' }} 
      />
      <CartesianGrid strokeDasharray="3 3" />
      <Tooltip />
      <Area type="monotone" dataKey="a" stroke="#bd4ce5" fillOpacity={1} fill="url(#colorUv)" />
    </AreaChart>
  );

return (
  <div className="Chart">
    <h3 className="ChartTitle">Asset APR</h3>
    <div>{renderAreaChart}</div>
  </div>
);
}

export default ChartApr;