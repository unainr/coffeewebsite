import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Products from "@/components/Products";
import Story from "@/components/Story";
import RoastGuide from "@/components/RoastGuide";
import Offerings from "@/components/Offerings";
import Ingredients from "@/components/Ingredients";
import Stats from "@/components/Stats";
import CTA from "@/components/CTA";



export default function Home() {
	return (
		<main>
			<Hero />
			<Features />
			<Stats />
			<Products limit={4} />
			<Offerings />
			<RoastGuide />
			<Ingredients />
			<Story />

			{/* Products Teaser */}

			<CTA />

		</main>
	);
}
