"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface PageHeaderProps {
	title: string;
	breadcrumb: string; // e.g., "Home / about"
	bgImage?: string;
}

export default function PageHeader({
	title,
	breadcrumb,
	bgImage = "/banner.png",
}: PageHeaderProps) {
	// Parse breadcrumb to create links if needed, for simplicity treating as static string mostly
	// But let's try to make it slightly smart
	const parts = breadcrumb.split("/").map((p) => p.trim());

	return (
		<div
			className="relative w-full h-[400px] flex items-center justify-center bg-cover bg-center bg-no-repeat overflow-hidden"
			style={{ backgroundImage: `url(${bgImage})` }}>
			{/* Overlay */}
			<div className="absolute inset-0 bg-black/60" />

			{/* Content */}
			<div className="relative z-10 text-center text-white px-4">
				<motion.h1
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					className="text-5xl md:text-7xl font-bold font-serif mb-4">
					{title}
				</motion.h1>

				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.2 }}
					className="flex items-center justify-center gap-2 text-lg uppercase tracking-wide text-gray-300 font-medium">
					{/* Simple implementation assuming Home is always first */}
					<Link href="/" className="hover:text-[#D4A574] transition-colors">
						Home
					</Link>
					{parts.length > 1 &&
						parts.slice(1).map((part, index) => (
							<span key={index} className="flex items-center gap-2">
								<span className="text-[#D4A574]">/</span>
								<span
									className={index === parts.length - 2 ? "text-white" : ""}>
									{part}
								</span>
							</span>
						))}
				</motion.div>
			</div>
		</div>
	);
}
