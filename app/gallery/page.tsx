import PageHeader from "@/components/PageHeader";
import GalleryGrid from "@/components/GalleryGrid";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Gallery",
	description:
		"Take a visual journey through our plantation. See the harvest, the roasting process, and the life behind our coffee.",
};

export default function GalleryPage() {
	return (
		<main className="min-h-screen bg-stone-50">
			<PageHeader title="Life on the Plantation" breadcrumb="Home / gallery" />
			<GalleryGrid />
		</main>
	);
}
