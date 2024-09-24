"use client";
import React from "react";
import { FiEye } from "react-icons/fi";
import {
	Radar,
	RadarChart,
	PolarGrid,
	Legend,
	PolarAngleAxis,
	PolarRadiusAxis,
	ResponsiveContainer,
} from "recharts";


const data = [
	{
		subject: "Tracking",
		mobile: 120,
		desktop: 110,
		max: 150,
	},
	{
		subject: "Builder",
		mobile: 98,
		desktop: 130,
		max: 150,
	},
	{
		subject: "Schedule",
		mobile: 86,
		desktop: 130,
		max: 150,
	},
	{
		subject: "AI Chart",
		mobile: 99,
		desktop: 100,
		max: 150,
	},
	{
		subject: "Interval",
		mobile: 85,
		desktop: 90,
		max: 150,
	},
];


export const UsageRadar = () => {
	return (
		<div className="col-span-4 overflow-hidden rounded border border-stone-300">
			<div className="p-4">
				<h3 className="flex items-center gap-1.5 font-medium">
					<FiEye />
					Activity
				</h3>
			</div>
			<div className="h-64 px-4">
				<ResponsiveContainer
					width="100%"
					height="100%"
				>
					<RadarChart
						cx="50%"
						cy="50%"
						outerRadius="80%"
						data={data}
					>
						<PolarGrid />
						<PolarAngleAxis dataKey="subject" />
						<PolarRadiusAxis
							angle={30}
							domain={[0, 150]}
						/>
						<Radar
							dataKey="mobile"
							stroke="#18181b"
							fill="#18181b"
							fillOpacity={0.3}
						/>
						<Radar
							dataKey="desktop"
							stroke="#5b21b6"
							fill="#5b21b6"
							fillOpacity={0.3}
						/>
						<Legend />
					</RadarChart>
				</ResponsiveContainer>
			</div>
		</div>
	);
};
