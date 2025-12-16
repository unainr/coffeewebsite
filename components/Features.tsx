"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Coffee, Flame, Nut, Monitor, Filter, CupSoda } from "lucide-react";

const featuresLeft = [
	{
		icon: Coffee,
		title: "THE PERFECT CUP",
		description:
			"Experience a balanced body with low acidity and distinct nutty notes.",
	},
	{
		icon: Flame, // Using Flame for Roast
		title: "TRADITIONAL ROAST",
		description:
			"Slow-roasted to preserve the authentic oils and aroma of the beans.",
	},
	{
		icon: Nut, // Using Nut for Beans/Nutty notes if available, else fallback to something generic
		title: "SUPREME BEANS",
		description:
			"100% Arabica beans sourced directly from Brazil's finest estates.",
	},
];

const featuresRight = [
	{
		icon: Monitor, // Using Monitor as proxy for Machine/Espresso Machine
		title: "THE COFFEE MACHINE",
		description:
			"Perfectly ground for espresso machines and automatic brewers.",
	},
	{
		icon: Filter, // Using Filter for French Press
		title: "FRENCH PRESS",
		description:
			"Coarse grind options available for a steep and full-bodied flavor.",
	},
	{
		icon: CupSoda, // Using CupSoda for To Go
		title: "COFFEE TO GO",
		description:
			"Stay energized throughout your day with our high-caffeine blend.",
	},
];

export default function Features() {
	return (
		<section className="w-full py-16 md:py-24 bg-white overflow-hidden">
			<div className="container mx-auto px-4 md:px-6">
				<div className="flex flex-col lg:grid lg:grid-cols-3 gap-12 items-center">
					{/* Left Column */}
					<div className="flex flex-col space-y-12 order-2 lg:order-1">
						{featuresLeft.map((feature, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, x: -50 }}
								whileInView={{ opacity: 1, x: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5, delay: index * 0.2 }}
								className="flex flex-col items-center lg:items-end text-center lg:text-right">
								<div className="flex items-center justify-center lg:justify-end mb-4">
									<h3 className="text-xl md:text-2xl font-serif text-gray-800 tracking-wide uppercase mr-0 lg:mr-4">
										{feature.title}
									</h3>
									<feature.icon
										className="w-8 h-8 md:w-10 md:h-10 text-primary hidden lg:block"
										strokeWidth={1.5}
									/>
								</div>
								{/* Mobile Icon (shown above title on mobile) */}
								<feature.icon
									className="w-10 h-10 text-primary mb-2 lg:hidden"
									strokeWidth={1.5}
								/>

								<p className="text-gray-500 max-w-xs leading-relaxed font-light">
									{feature.description}
								</p>
							</motion.div>
						))}
					</div>

					{/* Center Image */}
					<motion.div
						initial={{ opacity: 0, scale: 0.8 }}
						whileInView={{ opacity: 1, scale: 1 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8 }}
						className="flex justify-center items-center order-1 lg:order-2 relative">
						<div className="relative w-[280px] h-[350px] md:w-[350px] md:h-[450px]">
							{/* Decorative circle glow */}
							<div className="absolute inset-0 bg-primary/5 rounded-full blur-3xl transform scale-110" />
							<Image
								src="/p1.png"
								alt="Premium Brazilian Coffee Bag"
								fill
								className="object-contain drop-shadow-2xl z-10"
								priority
							/>
						</div>
					</motion.div>

					{/* Right Column */}
					<div className="flex flex-col space-y-12 order-3">
						{featuresRight.map((feature, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, x: 50 }}
								whileInView={{ opacity: 1, x: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5, delay: index * 0.2 }}
								className="flex flex-col items-center lg:items-start text-center lg:text-left">
								<div className="flex items-center justify-center lg:justify-start mb-4">
									<feature.icon
										className="w-8 h-8 md:w-10 md:h-10 text-primary hidden lg:block"
										strokeWidth={1.5}
									/>
									<h3 className="text-xl md:text-2xl font-serif text-gray-800 tracking-wide uppercase ml-0 lg:ml-4">
										{feature.title}
									</h3>
								</div>
								{/* Mobile Icon */}
								<feature.icon
									className="w-10 h-10 text-primary mb-2 lg:hidden"
									strokeWidth={1.5}
								/>

								<p className="text-gray-500 max-w-xs leading-relaxed font-light">
									{feature.description}
								</p>
							</motion.div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
