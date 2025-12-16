import Products from "@/components/Products";
import PageHeader from "@/components/PageHeader";
import FAQ from "@/components/FAQ";
import { Coffee, Thermometer, Clock } from "lucide-react";

import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Our Coffee Collection",
	description:
		"Explore our range of premium roasted coffees. From light to dark roasts, find the perfect bean for your morning brew.",
};

export default function ProductsPage() {
	return (
		<main>
			<PageHeader title="Our Details Collection" breadcrumb="Home / products" />

			<Products />

			{/* Brewing Tips Section */}
			<section className="py-20 bg-[#FAF7F2]">
				<div className="container mx-auto px-4 md:px-6">
					<h2 className="text-3xl md:text-4xl font-serif font-bold text-[#2C1E1A] mb-12 text-center">
						Perfect Brewing
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						<div className="bg-white p-8 rounded-xl shadow-sm text-center">
							<div className="w-16 h-16 bg-[#2C1E1A] text-[#D4A574] rounded-full flex items-center justify-center mx-auto mb-6">
								<Coffee className="w-8 h-8" />
							</div>
							<h3 className="text-xl font-bold mb-4 text-[#2C1E1A]">
								The Right Grind
							</h3>
							<p className="text-gray-600">
								Match your grind to your method. Coarse for French Press, medium
								for Drip, and fine for Espresso.
							</p>
						</div>
						<div className="bg-white p-8 rounded-xl shadow-sm text-center">
							<div className="w-16 h-16 bg-[#2C1E1A] text-[#D4A574] rounded-full flex items-center justify-center mx-auto mb-6">
								<Thermometer className="w-8 h-8" />
							</div>
							<h3 className="text-xl font-bold mb-4 text-[#2C1E1A]">
								Water Temperature
							</h3>
							<p className="text-gray-600">
								Aim for 195°F - 205°F (90°C - 96°C). Boiling water can burn the
								grounds, while cool water under-extracts.
							</p>
						</div>
						<div className="bg-white p-8 rounded-xl shadow-sm text-center">
							<div className="w-16 h-16 bg-[#2C1E1A] text-[#D4A574] rounded-full flex items-center justify-center mx-auto mb-6">
								<Clock className="w-8 h-8" />
							</div>
							<h3 className="text-xl font-bold mb-4 text-[#2C1E1A]">
								Freshness Matters
							</h3>
							<p className="text-gray-600">
								Grind just before brewing. Store beans in an airtight container
								away from light to preserve flavor.
							</p>
						</div>
					</div>
				</div>
			</section>

			<FAQ />
		</main>
	);
}
