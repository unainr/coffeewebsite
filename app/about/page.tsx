import Image from "next/image";
import Story from "@/components/Story";
import Features from "@/components/Features";
import PageHeader from "@/components/PageHeader";

import Stats from "@/components/Stats";
import { Metadata } from "next";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
	title: "Our Heritage",
	description:
		"Learn about our journey, our sustainable farming practices, and the family tradition that brings you the finest Brazilian coffee.",
};

export default function AboutPage() {
	return (
		<main className="min-h-screen bg-[#FAF7F2]">
			<PageHeader title="Our Heritage" breadcrumb="Home / about" />

			{/* Reusing Story Component for content */}
			<Story />

			<Stats />

			<section className="py-24 bg-white overflow-hidden">
				<div className="container mx-auto px-4 md:px-6">
					{/* Sustainable Farming Section */}
					<div className="relative grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
						<div className="order-2 lg:order-1 relative z-10">
							<div className="relative">
								<div className="absolute -top-10 -left-10 w-32 h-32 bg-[#D4A574]/10 rounded-full blur-3xl" />
								<span className="text-[#D4A574] font-bold tracking-widest uppercase text-sm mb-4 block">
									Eco-Conscious
								</span>
								<h2 className="text-4xl md:text-5xl font-serif font-bold text-[#2C1E1A] mb-8 leading-tight">
									Cultivating <br />
									<span className="italic relative z-10">
										Harmony
										<span className="absolute bottom-2 left-0 w-full h-3 bg-[#D4A574]/20 -z-10 transform -rotate-1 rounded-full"></span>
									</span>
								</h2>
								<div className="text-lg text-gray-600 space-y-6 leading-relaxed">
									<p>
										At the heart of our estate lies a profound respect for the
										land. Our commitment extends far beyond the harvest—we are
										stewards of a delicate ecosystem.
									</p>
									<p>
										Through shade-grown cultivation, natural composting, and
										advanced water conservation, we ensure that every bean is a
										testament to environmental harmony.
									</p>
									<div className="flex items-center gap-4 pt-4">
										<div className="flex flex-col">
											<span className="text-3xl font-bold text-[#D4A574]">
												100%
											</span>
											<span className="text-xs uppercase tracking-wider text-gray-500">
												Sustainable
											</span>
										</div>
										<div className="w-px h-12 bg-gray-200" />
										<div className="flex flex-col">
											<span className="text-3xl font-bold text-[#D4A574]">
												0%
											</span>
											<span className="text-xs uppercase tracking-wider text-gray-500">
												Chemicals
											</span>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="order-1 lg:order-2 relative">
							<div className="relative h-[600px] w-full rounded overflow-hidden shadow-2xl transform lg:translate-x-10 lg:rotate-3 transition-transform hover:rotate-0 duration-700">
								<Image
									src="/story/img27.JPG"
									alt="Sustainable Farming"
									fill
									className="object-cover scale-105 hover:scale-100 transition-transform duration-700"
								/>
								<div className="absolute inset-0 bg-linear-to-t from-[#2C1E1A]/40 to-transparent" />
							</div>
							{/* Floating Badge */}
							<div className="absolute -bottom-10 -left-10 bg-white p-6 rounded-xl shadow-xl max-w-[200px] z-20 hidden lg:block">
								<p className="font-serif text-[#2C1E1A] italic text-lg leading-tight">
									"We don't just grow coffee; we grow a future."
								</p>
							</div>
						</div>
					</div>

					{/* Philosophy Section */}
					<div className="relative grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
						<div className="relative h-[600px] rounded overflow-hidden shadow-2xl group">
							<Image
								src="/story/img26.JPG"
								alt="Our Philosophy"
								fill
								className="object-cover transition-transform duration-700 group-hover:scale-105"
							/>
							<div className="absolute inset-0 bg-[#2C1E1A]/20 group-hover:bg-[#2C1E1A]/10 transition-colors duration-500" />
							<div className="absolute top-8 right-8 w-20 h-20 border-2 border-white/30 rounded-full flex items-center justify-center text-white font-serif italic text-xl backdrop-blur-sm">
								Est. 1985
							</div>
						</div>

						<div className="relative z-10 lg:-ml-20 bg-white/90 backdrop-blur-md p-8 lg:p-12 rounded-2xl shadow-xl border border-white/50">
							<span className="text-[#D4A574] font-bold tracking-widest uppercase text-sm mb-4 block">
								Our Philosophy
							</span>
							<h2 className="text-4xl md:text-5xl font-serif font-bold text-[#2C1E1A] mb-8">
								The Ritual of <br /> Connection
							</h2>
							<div className="text-lg text-gray-600 space-y-6 leading-relaxed">
								<p>
									Coffee is more than a beverage; it is a ritual. We strive to
									bridge the gap between producer and consumer, offering
									transparency in every bag.
								</p>
								<p>
									From the careful selection of varietals to the precise art of
									drying and roasting, our process is guided by a single
									principle: uncompromised quality.
								</p>
								<p className="font-serif italic text-[#2C1E1A] text-xl pt-4">
									We invite you to taste the dedication, the tradition, and the
									soul of Brazil in every cup.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			<Features />
		<CTA/>
		</main>
	);
}
