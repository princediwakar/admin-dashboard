"use client"
import React from 'react'
import { FiUser } from 'react-icons/fi'
import {
	XAxis,
	YAxis,
	Tooltip,
	ResponsiveContainer,
	CartesianGrid,
	LineChart,
	Line,
    Legend,
} from "recharts";

const data = [
	{
		name: "Page A",
		New: 4000,
		Returning: 2400,
		amt: 2400,
	},
	{
		name: "Page B",
		New: 3000,
		Returning: 1398,
		amt: 2210,
	},
	{
		name: "Page C",
		New: 2000,
		Returning: 9800,
		amt: 2290,
	},
	{
		name: "Page D",
		New: 2780,
		Returning: 3908,
		amt: 2000,
	},
	{
		name: "Page E",
		New: 1890,
		Returning: 4800,
		amt: 2181,
	},
	{
		name: "Page F",
		New: 2390,
		Returning: 3800,
		amt: 2500,
	},
	{
		name: "Page G",
		New: 3490,
		Returning: 4300,
		amt: 2100,
	},
];


export const ActivityGraph = () => {
  return (
		<div className="col-span-8 overflow-hidden rounded border border-stone-300">
			<div className="p-4">
				<h3 className="flex items-center gap-1.5 font-medium">
					<FiUser />
					Activity
				</h3>
				{/* TODO: Our Graph */}
			</div>
			<div className="h-64 px-4">
				<ResponsiveContainer
					width="100%"
					height="100%"
				>
					<LineChart
						width={500}
						height={400}
						data={data}
						margin={{
							top: 0,
							right: 0,
							left: -8,
							bottom: 0,
						}}
					>
						<CartesianGrid stroke="#e4e4e7" />
						<XAxis
							dataKey="name"
							axisLine={false}
							tickLine={false}
							className="text-xs font-bold"
							padding={{ right: 4 }}
						/>
						<YAxis
                        className='text-xs font-bold'
							// dataKey="amt"
							axisLine={false}
							tickLine={false}
						/>
						<Tooltip
							wrapperClassName="text-sm rounded"
							labelClassName="text-xs text-stone-500"
						/>
						<Legend />
						<Line
							type="monotone"
							dataKey="New"
							stroke="#18181b"
							fill="#18181b"
							activeDot={{ r: 8 }}
						/>
						<Line
							type="monotone"
							dataKey="Returning"
							stroke="#5b21b6"
							fill="#5b21b6"
						/>
					</LineChart>
				</ResponsiveContainer>
			</div>
		</div>
  );
}


