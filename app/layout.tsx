import type { Metadata } from "next";
import { Inter } from "next/font/google"; // Using a more standard font to avoid download issues
import "./globals.css";
import MainHeader from "@/components/layouts/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
	subsets: ["latin"],
	variable: "--font-inter",
});

export const metadata: Metadata = {
	title: {
		template: "%s | Brazilian Coffee Estate",
		default: "Brazilian Coffee Estate | Authentic Single Origin Beans",
	},
	description:
		"Experience the rich, authentic taste of Brazil. Directly from our family farm in Minas Gerais to your cup. Sustainable, single-origin, and roasted to perfection.",
	twitter: {
		card: "summary_large_image",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${inter.variable} font-sans antialiased`}>
				<MainHeader />
				{children}
				<Footer />
			</body>
		</html>
	);
}
