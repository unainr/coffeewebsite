"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function CTA() {
	return (
		<section className="relative py-32 bg-[#2C1E1A] text-white overflow-hidden">
			{/* Dynamic Background with Gradient Overlay */}
			<div className="absolute inset-0 bg-[url('/banner.png')] bg-cover bg-fixed bg-center opacity-30 mix-blend-overlay" />
			<div className="absolute inset-0 bg-linear-to-t from-[#2C1E1A] to-transparent opacity-90" />

			<div className="container relative z-10 mx-auto px-4 md:px-6 text-center">
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className="max-w-4xl mx-auto space-y-10">
					<div className="space-y-4">
						<span className="inline-block py-1 px-3 border border-[#D4A574]/50 rounded-full text-[#D4A574] text-sm tracking-wider uppercase backdrop-blur-sm">
							Limited Harvest
						</span>
						<h2 className="text-5xl md:text-7xl font-serif font-bold leading-tight">
							Ready to Taste the <br />
							<span className="text-transparent bg-clip-text bg-linear-to-r from-[#D4A574] to-[#f0e6d2]">
								Difference?
							</span>
						</h2>
					</div>

					<p className="text-lg md:text-2xl text-gray-300 font-light max-w-2xl mx-auto leading-relaxed">
						Join the thousands of coffee connoisseurs who have elevated their
						daily ritual. Direct trade, sustainable, and roasted to perfection.
					</p>

					<div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4">
						<Link href="/products" className="w-full sm:w-auto">
							<Button
								size="lg"
								className="w-full bg-[#D4A574] text-[#2C1E1A] hover:bg-white hover:text-[#2C1E1A] font-bold px-10 py-7 text-lg rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
								Shop Our Coffee
							</Button>
						</Link>
						<Link href="/contact" className="w-full sm:w-auto">
							<Button
								size="lg"
								variant="outline"
								className="w-full  border-white/30 backdrop-blur-sm hover:bg-white text-[#2C1E1A] font-bold px-10 py-7 text-lg rounded-full transition-all duration-300">
								Become a Partner
							</Button>
						</Link>
					</div>
				</motion.div>
			</div>
		</section>
	);
}
