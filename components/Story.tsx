"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function Story() {
	return (
		<section className="py-24 bg-[#FAF7F2] overflow-hidden">
			<div className="container mx-auto px-4 md:px-6">
				<div className="flex flex-col lg:flex-row items-center gap-16">
					{/* Image Side */}
					<motion.div
						initial={{ opacity: 0, x: -50 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8 }}
						className="w-full lg:w-1/2 relative">
						<div className="relative aspect-4/5 w-full max-w-lg mx-auto rounded overflow-hidden shadow-2xl">
							<Image
								src="/story/img21.JPG" // Using representative image
								alt="Coffee harvesting process"
								fill
								className="object-cover"
							/>
							<div className="absolute inset-0 bg-black/10" />
						</div>
						{/* Decorative elements */}
						<div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#D4A574]/20 rounded-full blur-2xl z-0" />
						<div className="absolute -top-6 -left-6 w-40 h-40 bg-[#2C1E1A]/10 rounded-full blur-2xl z-0" />

						<div className="absolute bottom-10 -right-4 bg-white p-6 rounded-lg shadow-xl max-w-xs z-10 hidden md:block">
							<p className="font-serif text-2xl font-bold text-[#2C1E1A] mb-1">
								100%
							</p>
							<p className="text-gray-600 text-sm">
								Maintained sustainable farming practices since 1985.
							</p>
						</div>
					</motion.div>

					{/* Content Side */}
					<motion.div
						initial={{ opacity: 0, x: 50 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8 }}
						className="w-full lg:w-1/2">
						<span className="text-[#D4A574] font-bold tracking-widest uppercase text-sm mb-4 block">
							Our Journey
						</span>
						<h2 className="text-4xl md:text-6xl font-serif font-bold text-[#2C1E1A] mb-8 leading-tight">
							From Seed to <br />
							<span className="italic text-[#D4A574]">Perfect Cup</span>
						</h2>

						<div className="space-y-6 text-gray-600 text-lg leading-relaxed">
							<p>
								Deep in the heart of Brazil's Minas Gerais region, our story
								begins with the fertile terra roxa soil. For generations, our
								family has cultivated coffee with a respect for tradition and an
								eye for innovation.
							</p>
							<p>
								We believe that great coffee isn't just made; it's grown. Every
								cherry is hand-picked at peak ripeness, sun-dried on traditional
								patios, and meticulously sorted to ensure only the finest beans
								make it to your cup.
							</p>
						</div>

						{/* <div className="mt-10 flex gap-4">
							<Button
								size="lg"
								className="bg-[#2C1E1A] text-white hover:bg-[#3E2D26]">
								Read Full Story
							</Button>
						</div> */}
					</motion.div>
				</div>
			</div>
		</section>
	);
}
