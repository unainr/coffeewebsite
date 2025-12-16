"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const ingredients = [
	{
		name: "Arabica Beans",
		desc: "Known for their smooth, complex flavor and lack of bitterness.",
		image: "/ingredients/img1.JPG",
	},
	{
		name: "Robusta Beans",
		desc: "Strong, bold, and packed with caffeine for that extra kick.",
		image: "/ingredients/img2.JPG",
	},
	{
		name: "Liberica Beans",
		desc: "A rare treat with a unique floral and fruity aroma.",
		image: "/ingredients/img3.JPG",
	},
	{
		name: "Excelsa Beans",
		desc: "Tart and fruity, adding depth to our signature blends.",
		image: "/ingredients/img12.JPG",
	},
];

export default function Ingredients() {
	return (
		<section className="py-24 bg-[#2C1E1A] text-white overflow-hidden">
			<div className="container mx-auto px-4 md:px-6">
				<div className="flex flex-col md:flex-row items-center gap-16">
					{/* Text Side */}
					<div className="md:w-1/2">
						<span className="text-[#D4A574] font-bold tracking-widest uppercase text-sm mb-4 block">
							Premium Ingredients
						</span>
						<h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 leading-tight">
							The Essence of <br />{" "}
							<span className="text-[#D4A574]">True Quality</span>
						</h2>
						<p className="text-gray-400 text-lg leading-relaxed mb-8">
							Great coffee starts with great ingredients. We source only the
							finest beans from sustainable farms, ensuring every cup is a
							masterpiece of flavor.
						</p>

						<div className="space-y-6">
							{ingredients.map((item, index) => (
								<motion.div
									key={index}
									initial={{ opacity: 0, x: -20 }}
									whileInView={{ opacity: 1, x: 0 }}
									viewport={{ once: true }}
									transition={{ delay: index * 0.1 }}
									className="flex items-center gap-4 group">
									<div className="w-16 h-16 relative rounded-full overflow-hidden border-2 border-[#D4A574]/30 group-hover:border-[#D4A574] transition-colors shrink-0">
										<Image
											src={item.image}
											alt={item.name}
											fill
											className="object-cover"
										/>
									</div>
									<div>
										<h3 className="font-serif font-bold text-xl group-hover:text-[#D4A574] transition-colors">
											{item.name}
										</h3>
										<p className="text-sm text-gray-500">{item.desc}</p>
									</div>
								</motion.div>
							))}
						</div>
					</div>

					{/* Visual Side */}
					<motion.div
						initial={{ opacity: 0, scale: 0.9 }}
						whileInView={{ opacity: 1, scale: 1 }}
						viewport={{ once: true }}
						className="md:w-1/2 relative">
						<div className="relative aspect-square w-full max-w-lg mx-auto">
							{/* Main circular image */}
							<div className="absolute inset-4 rounded-full overflow-hidden border-4 border-[#D4A574]/20 shadow-2xl z-10">
								<Image
									src="/ingredients/img73.JPG"
									alt="Coffee Ingredients"
									fill
									className="object-cover"
								/>
							</div>

							{/* Decorative rings */}
							<div className="absolute inset-0 rounded-full border border-[#D4A574]/10 animate-[spin_10s_linear_infinite]" />
							<div className="absolute -inset-4 rounded-full border border-[#D4A574]/5 animate-[spin_15s_linear_infinite_reverse]" />
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
