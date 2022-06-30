import React, { useEffect, useState } from 'react';
import type { Asset, SelectedFarm, History } from "../types/types";

import { AreaChart, Area, LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';
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
        var item = lookup.slice().reverse().find(function (item) {
            return num >= item.value;
        });
        return item ? (num / item.value).toFixed(digits).replace(rx, "$1") + item.symbol : "0";
    }

    const renderLineChart = (
        <LineChart width={1000} height={550} data={data}
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

    const renderAreaChart = (
        <AreaChart width={750} height={400} data={data}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <defs>
                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3a5682" stopOpacity={0.7} />
                    <stop offset="95%" stopColor="#3a5682" stopOpacity={0.7} />
                </linearGradient>
            </defs>
            <XAxis
                dataKey="date"
                tickFormatter={dateFormatter}
                domain={[data[0].date, data[data.length - 1].date]}
                tick={{ fill: 'white' }} 
            />
            <YAxis tickFormatter={nFormatter}  tick={{ fill: 'white' }}  />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Area type="monotone" dataKey="value" stroke="#bd4ce5" fillOpacity={1} fill="url(#colorUv)" />
        </AreaChart>
    );

    return (
        <div className="Chart">
            <h3 className="ChartTitle">Asset TVL</h3>
            <div>{renderAreaChart}</div>
        </div>
    );
}

export default ChartTvl;

