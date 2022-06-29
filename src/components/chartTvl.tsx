import React, { useEffect, useState } from 'react';
import type { Asset, SelectedFarm, History } from "../types/types";

import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import moment from 'moment';

type IProps = {
    data: History[];
}

function ChartTvl({ data }: IProps) {

    const dateFormatter = (date: moment.MomentInput) => {
        return moment(date).format('D MMM');
    };

    function nFormatter(num: any, digits: number = 2) {
        const lookup = [
          { value: 1, symbol: "" },
          { value: 1e3, symbol: "k" },
          { value: 1e6, symbol: "M" },
          { value: 1e9, symbol: "G" },
          { value: 1e12, symbol: "T" },
          { value: 1e15, symbol: "P" },
          { value: 1e18, symbol: "E" }
        ];
        const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
        var item = lookup.slice().reverse().find(function(item) {
          return num >= item.value;
        });
        return item ? (num / item.value).toFixed(digits).replace(rx, "$1") + item.symbol : "0";
      }

    const renderLineChart = (
        <LineChart width={1400} height={550} data={data}
            margin={{ top: 15, right: 10, left: 50, bottom: 5 }}
            >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
                dataKey="date"
                tickFormatter={dateFormatter}
                domain={[data[0].date, data[data.length - 1].date]}
            />
            <YAxis tickFormatter={nFormatter} />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="value" stroke="#8884d8" />
        </LineChart>
    );

    return (
        <div className="Chart">
            <h3>Asset TVL</h3>
            <div>{renderLineChart}</div>
        </div>
    );
}

export default ChartTvl;

