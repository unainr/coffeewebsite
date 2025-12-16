"use client";

import { motion } from "framer-motion";

const stats = [
	{ label: "Years of Experience", value: "35+" },
	{ label: "Acres of Farmland", value: "1,200" },
	{ label: "Cups Served Daily", value: "50k+" },
	{ label: "Awards Won", value: "12" },
];

export default function Stats() {
	return (
		<section className="py-20 bg-[#D4A574] text-[#2C1E1A]">
			<div className="container mx-auto px-4 md:px-6">
				<div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-[#2C1E1A]/10">
					{stats.map((stat, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: index * 0.1 }}
							className="p-4">
							<h3 className="text-4xl md:text-6xl font-serif font-bold mb-2">
								{stat.value}
							</h3>
							<p className="font-medium uppercase tracking-wider text-sm">
								{stat.label}
							</p>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
