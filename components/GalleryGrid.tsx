"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const galleryImages = [
	"/gallery/img35.JPG",
	"/gallery/img36.JPG",
	"/gallery/img37.JPG",
	"/gallery/img38.JPG",
	"/gallery/img39.JPG",
	"/gallery/img40.JPG",
	"/gallery/img41.JPG",
	"/gallery/img42.JPG",
	"/gallery/img43.JPG",
	"/gallery/m9.jpg",
	"/gallery/m10.jpg",
	"/gallery/m11.jpg",
	"/gallery/img44.JPG",
	"/gallery/img45.JPG",
	"/gallery/img49.jpg",
	"/gallery/img50.jpg",
	"/gallery/img51.jpg",
	"/gallery/img52.jpg",
];

export default function GalleryGrid() {
	return (
		<section className="container mx-auto px-4 md:px-6 py-16">
			<div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
				{galleryImages.map((src, index) => (
					<motion.div
						key={index}
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ delay: index * 0.05 }}
						className="break-inside-avoid relative group rounded-xl overflow-hidden shadow-md">
						<Image
							src={src}
							alt={`Gallery image ${index + 1}`}
							width={600}
							height={800}
							className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
						/>
						<div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
					</motion.div>
				))}
			</div>
		</section>
	);
}
