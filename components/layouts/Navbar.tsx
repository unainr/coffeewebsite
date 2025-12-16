"use client";

import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, ShoppingBag } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Logo from "./Logo";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export default function MainHeader() {
	const [isScrolled, setIsScrolled] = React.useState(false);
	const pathname = usePathname();
	const isActive = (path: string) => pathname === path;

	React.useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 0);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const navLinks = [
		{ href: "/", label: "Home" },
		{ href: "/about", label: "About Us" },
		{ href: "/products", label: "Products" },
		{ href: "/gallery", label: "Gallery" },
		{ href: "/contact", label: "Contact" },
	];

	return (
		<header
			className={`fixed top-0 z-50 w-full transition-all duration-300 ${
				isScrolled
					? "bg-white/90 backdrop-blur-md shadow-md py-2"
					: "bg-transparent py-4"
			}`}>
			<div className="mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
				<Logo />

				<nav className="hidden md:flex items-center gap-8">
					{navLinks.map((link) => (
						<Link
							key={link.href}
							href={link.href}
							className={cn(
								"text-sm font-medium transition-colors tracking-wide",
								isActive(link.href)
									? "text-[#D4A574] font-semibold"
									: isScrolled
									? "text-[#2C1E1A] hover:text-[#D4A574]"
									: "text-white hover:text-[#D4A574]"
							)}>
							{link.label}
						</Link>
					))}

					
				</nav>

				{/* Mobile Menu Trigger */}
				<div className="md:hidden flex items-center gap-2">
					<Sheet>
						<SheetTrigger asChild>
							<Button variant="ghost" size="icon" className="hover:bg-white/20">
								<Menu
									className={cn(
										"h-6 w-6 transition-colors",
										isScrolled ? "text-[#2C1E1A]" : "text-white"
									)}
								/>
							</Button>
						</SheetTrigger>
						<SheetContent
							side="right"
							className="w-[300px] bg-[#FAF7F2] border-l-[#D4A574]/20">
							<nav className="flex flex-col gap-6 mt-12 items-center">
								{navLinks.map((link) => (
									<Link
										key={link.href}
										href={link.href}
										className="text-lg font-serif font-medium text-[#2C1E1A] hover:text-[#D4A574] transition-colors">
										{link.label}
									</Link>
								))}
								
							</nav>
						</SheetContent>
					</Sheet>
				</div>
			</div>
		</header>
	);
}
