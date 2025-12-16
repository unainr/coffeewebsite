"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const roastLevels = [
	{
		level: "Light Roast",
		color: "#D4A574",
		textColor: "text-[#8B5E3C]",
		description:
			"Bright acidity with fruity & floral notes. Retains original bean character.",
		bestFor: "Pour-over, Drip",
		image: "/ingredients/img1.JPG", // Using representative light/greenish bean image if available, or just a generic one
		intensity: 30,
	},
	{
		level: "Medium Roast",
		color: "#8B5E3C",
		textColor: "text-[#5D3A29]",
		description:
			"Balanced flavor, aroma, and acidity. Sweet caramel and nutty undertones.",
		bestFor: "Drip, Espresso, AeroPress",
		image: "/ingredients/img2.JPG",
		intensity: 60,
	},
	{
		level: "Dark Roast",
		color: "#3E2D26",
		textColor: "text-[#2C1E1A]",
		description:
			"Full body with bold, smoky, and chocolate notes. Low acidity.",
		bestFor: "Espresso, French Press",
		image: "/ingredients/img3.JPG",
		intensity: 90,
	},
];

export default function RoastGuide() {
	return (
		<section className="py-24 bg-white relative overflow-hidden">
			{/* Background texture hint */}
			<div className="absolute top-0 left-0 w-full h-full opacity-[0.03] bg-[url('/p1.png')] bg-repeat space-x-4"></div>

			<div className="container mx-auto px-4 md:px-6 relative z-10">
				<div className="text-center mb-16">
					<motion.h2
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="text-3xl md:text-5xl font-bold font-serif mb-4 text-[#2C1E1A]">
						Know Your Roast
					</motion.h2>
					<p className="text-gray-500 max-w-2xl mx-auto">
						Discover the spectrum of flavors unlocked by different roasting
						techniques.
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 lg:gap-8">
					{roastLevels.map((roast, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: index * 0.2 }}
							className="flex flex-col items-center text-center group">
							{/* Image Circle */}
							<div className="relative w-48 h-48 mb-8 rounded-full overflow-hidden border-4 border-white shadow-xl group-hover:scale-105 transition-transform duration-500">
								<Image
									src={roast.image}
									alt={roast.level}
									fill
									className="object-cover"
								/>
								<div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
							</div>

							{/* Intensity Bar */}
							<div className="w-24 h-1.5 bg-gray-200 rounded-full mb-6 overflow-hidden">
								<div
									className="h-full rounded-full"
									style={{
										width: `${roast.intensity}%`,
										backgroundColor: roast.color,
									}}
								/>
							</div>

							<h3
								className={`text-2xl font-serif font-bold mb-3 ${roast.textColor}`}>
								{roast.level}
							</h3>

							<p className="text-gray-600 mb-4 px-4 leading-relaxed">
								{roast.description}
							</p>

							<div className="mt-auto pt-4 border-t border-gray-100 w-full max-w-[200px]">
								<span className="text-xs font-bold uppercase tracking-wider text-gray-400">
									Best For
								</span>
								<p className="font-medium text-gray-800 mt-1">
									{roast.bestFor}
								</p>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
