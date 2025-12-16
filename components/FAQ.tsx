"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function FAQ() {
	const [activeIndex, setActiveIndex] = useState<number | null>(null);

	const toggleAccordion = (index: number) => {
		setActiveIndex(activeIndex === index ? null : index);
	};

	const faqs = [
		{
			question: "Do you ship internationally?",
			answer:
				"Yes, we ship our roasted coffee beans worldwide. Shipping rates and delivery times vary depending on the destination.",
		},
		{
			question: "Are your beans organic?",
			answer:
				"A significant portion of our selection is certified organic. We prioritize sustainable farming practices across all our partner estates.",
		},
		{
			question: "How should I store my coffee?",
			answer:
				"For freshness, store your beans in an opaque, airtight container at room temperature. Avoid direct sunlight and moisture.",
		},
		{
			question: "Do you offer wholesale pricing?",
			answer:
				"Absolutely! We partner with cafes, restaurants, and offices. Please contact our sales team using the form above for wholesale inquiries.",
		},
	];

	return (
		<section className="py-20 bg-white">
			<div className="container mx-auto px-4 md:px-6 max-w-3xl">
				<h2 className="text-3xl font-serif font-bold text-[#2C1E1A] mb-8 text-center">
					Frequently Asked Questions
				</h2>
				<div className="space-y-4">
					{faqs.map((faq, index) => (
						<div key={index} className="border-b border-gray-200 pb-4">
							<button
								onClick={() => toggleAccordion(index)}
								className="w-full flex justify-between items-center text-left text-lg font-medium text-[#2C1E1A] focus:outline-none py-2">
								{faq.question}
								<ChevronDown
									className={`w-5 h-5 transition-transform duration-300 ${
										activeIndex === index
											? "rotate-180 text-[#D4A574]"
											: "text-gray-400"
									}`}
								/>
							</button>
							<AnimatePresence>
								{activeIndex === index && (
									<motion.div
										initial={{ height: 0, opacity: 0 }}
										animate={{ height: "auto", opacity: 1 }}
										exit={{ height: 0, opacity: 0 }}
										transition={{ duration: 0.3 }}
										className="overflow-hidden">
										<p className="text-gray-600 pt-2 pb-4">{faq.answer}</p>
									</motion.div>
								)}
							</AnimatePresence>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
