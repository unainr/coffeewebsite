"use client";

import { motion } from "framer-motion";
import { Coffee, GraduationCap, Truck, Users } from "lucide-react";

const offerings = [
	{
		icon: Coffee,
		title: "Wholesale Beans",
		description:
			"Premium roasted beans supplied directly to cafes and restaurants with competitive pricing.",
	},
	{
		icon: GraduationCap,
		title: "Barista Training",
		description:
			"Professional courses to master the art of brewing, latte art, and machine maintenance.",
	},
	{
		icon: Truck,
		title: "Equipment Rental",
		description:
			"Top-tier espresso machines and grinders available for events and short-term needs.",
	},
	{
		icon: Users,
		title: "Cupping Events",
		description:
			"Join our community tasting sessions to explore rare blends and single-origin specialties.",
	},
];

export default function Offerings() {
	return (
		<section className="py-24 bg-white">
			<div className="container mx-auto px-4 md:px-6">
				<div className="text-center mb-16">
					<span className="text-[#D4A574] font-bold tracking-widest uppercase text-sm mb-3 block">
						Our Services
					</span>
					<h2 className="text-3xl md:text-5xl font-serif font-bold text-[#2C1E1A]">
						What We Offer
					</h2>
					<div className="w-20 h-1 bg-[#D4A574] mx-auto rounded-full mt-6"></div>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
					{offerings.map((offer, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: index * 0.1 }}
							whileHover={{ y: -10 }}
							className="group bg-[#FAF7F2] p-8 rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-300 border border-transparent hover:border-[#D4A574]/30 relative overflow-hidden">
							<div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-[#D4A574] to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />

							<div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-8 mx-auto group-hover:bg-[#2C1E1A] transition-colors shadow-md">
								<offer.icon className="w-10 h-10 text-[#2C1E1A] group-hover:text-[#D4A574] transition-colors" />
							</div>

							<h3 className="text-2xl font-serif font-bold text-[#2C1E1A] mb-4 text-center group-hover:text-[#D4A574] transition-colors">
								{offer.title}
							</h3>

							<p className="text-gray-600 text-center leading-relaxed text-sm px-2">
								{offer.description}
							</p>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
