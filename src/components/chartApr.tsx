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
    <LineChart width={1400} height={550} data={data}
      margin={{ top: 15, right: 10, left: 50, bottom: 5 }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis
        dataKey="month"
        tickFormatter={dateFormatter}
        domain={[data[0].month, data[data.length - 1].month]}
      />
      <YAxis tickFormatter={toPercent} />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="a" stroke="#8884d8" />
    </LineChart>
  );

  return (
    <div className="Chart">
      <h3>Asset APR</h3>
      <div>{renderLineChart}</div>
    </div>
  );
}

export default ChartApr;