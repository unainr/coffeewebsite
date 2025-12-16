"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MessageCircle, ArrowRight } from "lucide-react";

// Product data mapping to available images
const products = [
	{
		id: 1,
		name: "Santos Bourbon",
		image: "/products/img56.JPG",
		roast: "Light Roast",
		desc: "Sweet and smooth with mild acidity.",
	},
	{
		id: 2,
		name: "Minas Gerais Gold",
		image: "/products/img58.JPG",
		roast: "Medium Roast",
		desc: "Caramel notes with a clean finish.",
	},
	{
		id: 3,
		name: "Espresso Supreme",
		image: "/products/img59.JPG",
		roast: "Dark Roast",
		desc: "Intense flavor, perfect for espresso.",
	},
	{
		id: 4,
		name: "Fazenda Special",
		image: "/products/img61.JPG",
		roast: "Medium-Dark",
		desc: "Chocolatey aroma with rich body.",
	},
	{
		id: 5,
		name: "Rainforest Blend",
		image: "/products/img63.JPG",
		roast: "Organic",
		desc: "A bright, complex cup from nature.",
	},
	{
		id: 6,
		name: "Peaberry Reserve",
		image: "/products/img65.JPG",
		roast: "Light Roast",
		desc: "Rare beans with concentrated flavor.",
	},
	{
		id: 7,
		name: "Cerrado Classic",
		image: "/products/img67.JPG",
		roast: "Medium Roast",
		desc: "Nutty and consistent quality.",
	},
	{
		id: 8,
		name: "Sul de Minas",
		image: "/products/img69.JPG",
		roast: "Dark Roast",
		desc: "Full-bodied with a lingering taste.",
	},
];

export default function Products({ limit }: { limit?: number }) {
	const handleContact = (productName: string) => {
		const message = `Hello, I am interested in the ${productName}. Can you please provide more information?`;
		const encodedMessage = encodeURIComponent(message);
		window.open(`https://wa.me/97336074003?text=${encodedMessage}`, "_blank");
	};

	const displayedProducts = limit ? products.slice(0, limit) : products;

	return (
		<section className="py-24 bg-[#F9F5F1]">
			<div className="container mx-auto px-4 md:px-6">
				<div className="text-center mb-20">
					<span className="text-[#D4A574] font-semibold tracking-wider uppercase text-sm mb-2 block">
						Our Collection
					</span>
					<motion.h2
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="text-4xl md:text-5xl font-bold font-serif mb-6 text-[#2C1E1A]">
						{limit ? "Highlighted Selections" : "Complete Collection"}
					</motion.h2>
					<div className="w-20 h-1 bg-[#D4A574] mx-auto rounded-full mb-6"></div>
					<motion.p
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ delay: 0.2 }}
						className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
						Explore our curated range of authentic Brazilian coffees. Interested
						in bulk orders or specific blends? Get in touch with us.
					</motion.p>
				</div>

				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
					{displayedProducts.map((product, index) => (
						<motion.div
							key={product.id}
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: index * 0.1 }}
							whileHover={{ y: -8 }}
							className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col">
							{/* Image Container */}
							<div className="relative h-72 w-full overflow-hidden bg-gray-100">
								<Image
									src={product.image}
									alt={product.name}
									fill
									className="object-cover transition-transform duration-700 group-hover:scale-105"
								/>

								{/* Roast Badge */}
								<div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-[#2C1E1A] shadow-sm uppercase tracking-wide">
									{product.roast}
								</div>
							</div>

							{/* Product Info */}
							<div className="p-6 flex flex-col grow">
								<h3 className="font-serif text-xl font-bold text-[#2C1E1A] mb-2 group-hover:text-[#D4A574] transition-colors">
									{product.name}
								</h3>
								<p className="text-gray-500 text-sm mb-6 grow">
									{product.desc}
								</p>

								<Button
									onClick={() => handleContact(product.name)}
									className="w-full bg-transparent border-2 border-[#2C1E1A] text-[#2C1E1A] hover:bg-[#2C1E1A] hover:text-white transition-all duration-300 group-hover:shadow-md">
									<MessageCircle className="mr-2 h-4 w-4" />
									Inquire on WhatsApp
								</Button>
							</div>
						</motion.div>
					))}
				</div>

				
			</div>
		</section>
	);
}
