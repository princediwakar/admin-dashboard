import React from "react";
import {
	FiTrendingDown,
	FiTrendingUp,
} from "react-icons/fi";

export const StatCards = () => {
	return (
		<>
			<Card
				title="Gross Revenue"
				value="$120,000"
				pillText="2.75%"
				trend="up"
				period="From Jan 1st - July 31st"
			/>
			<Card
				title="Avg Order"
				value="$30"
				pillText="1.25%"
				trend="down"
				period="From Jan 1st - July 31st"
			/>
			<Card
				title="Trailing Year"
				value="$1,200,000"
				pillText="60.50%"
				trend="up"
				period="Previous 365 days"
			/>
		</>
	);
};

const Card = ({
	title,
	value,
	pillText,
	trend,
	period,
}: {
	title: string;
	value: string;
	pillText: string;
	trend: "up" | "down";
	period: string;
}) => {
	return (
		<div className="p-4 col-span-4 rounded border border-stone-300">
			<div className="flex mb-8 items-start justify-between">
				<div>
					<h3 className="text-stone-500 mb-2 text-sm">
						{title}
					</h3>
					<p className="text-3xl font-semibold">
						{value}
					</p>
				</div>
				<span
					className={`text-xs flex items-center gap-1 font-medium
					px-2 py-1 rounded ${
						trend === "up"
							? "bg-green-100 text-green-700"
							: "bg-red-100 text-red-700"
					}
					}`}
				>
					{trend === "up" ? (
						<FiTrendingUp />
					) : (
						<FiTrendingDown />
					)}
				</span>
			</div>
			<p className="text-xs text-stone-500">
				{period}
			</p>
		</div>
	);
};
