import PageHeader from "@/components/PageHeader";
import FAQ from "@/components/FAQ";
import ContactContent from "@/components/ContactContent"; // Import the client component
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Contact Us",
	description:
		"Get in touch with us. Visit our estate, call us, or send a message. We'd love to hear from you.",
};

export default function ContactPage() {
	return (
		<main className="min-h-screen bg-[#FAF7F2]">
			<PageHeader title="Get in Touch" breadcrumb="Home / contact" />
			<ContactContent />
			<FAQ />
		</main>
	);
}
