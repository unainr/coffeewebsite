"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ShoppingBag } from "lucide-react";
import Link from "next/link";

export default function Hero() {
	return (
		<section className="relative h-screen w-full overflow-hidden">
			{/* Background Video */}
			<div className="absolute inset-0 w-full h-full">
				<video
					className="object-cover w-full h-full"
					autoPlay
					muted
					loop
					playsInline>
					<source src="/hero/hero.mp4" type="video/mp4" />
					Your browser does not support the video tag.
				</video>
				{/* Dark Overlay for contrast */}
				<div className="absolute inset-0" />
			</div>

			{/* Content */}
			<div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 md:px-6">
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, ease: "easeOut" }}
					className="max-w-4xl">
					<h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight mb-6 drop-shadow-lg">
						Brazilian <span className="text-slate-200/90 italic">Coffee Beans</span>
					</h1>
					<p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed drop-shadow-md">
						Experience the rich, authentic taste of Brazil in every cup. Sourced
						from the finest plantations, roasted to perfection.
					</p>

					<motion.div
						initial={{ opacity: 0, scale: 0.9 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ delay: 0.4, duration: 0.5 }}>
							<Link href={'/products'}>
						<Button
							size="lg"
							variant={'outline'}
							className="text-lg px-8 py-6 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
							<ShoppingBag className="mr-2 h-5 w-5" />
							Shop Now
						</Button>
								</Link>
					</motion.div>
				</motion.div>
			</div>

			{/* Scroll indicator (optional but nice) */}
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 1, duration: 1 }}
				className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
				<div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center p-1">
					<motion.div
						animate={{ y: [0, 12, 0] }}
						transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
						className="w-1.5 h-1.5 bg-white rounded-full"
					/>
				</div>
			</motion.div>
		</section>
	);
}
