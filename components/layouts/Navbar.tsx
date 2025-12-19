"use client";

import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
	Menu,
	ShoppingBag,
	X,
	Home,
	Info,
	Coffee,
	Image,
	Mail,
	Phone,
	MapPin,
	Facebook,
	Instagram,
	Twitter,
} from "lucide-react";
import {
	Sheet,
	SheetContent,
	SheetTrigger,
	SheetClose,
} from "@/components/ui/sheet";
import Logo from "./Logo";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export default function MainHeader() {
	const [isScrolled, setIsScrolled] = React.useState(false);
	const [isOpen, setIsOpen] = React.useState(false);
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
		{ href: "/", label: "Home", icon: Home },
		{ href: "/about", label: "About Us", icon: Info },
		{ href: "/products", label: "Products", icon: Coffee },
		{ href: "/gallery", label: "Gallery", icon: Image },
		{ href: "/contact", label: "Contact", icon: Mail },
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
					<Sheet open={isOpen} onOpenChange={setIsOpen}>
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
							className="w-[320px] bg-linear-to-br from-[#2C1E1A] via-[#3E2D26] to-[#2C1E1A] border-l-[#D4A574]/30 p-0 overflow-y-auto">
							{/* Header Section */}
							<div className="relative p-6 pb-4 border-b border-[#D4A574]/20">
								<div className="mt-2">
									<Logo />
								</div>
								<p className="text-[#D4A574]/80 text-sm mt-3 font-light">
									Premium Brazilian Coffee
								</p>
							</div>

							{/* Navigation Links */}
							<nav className="flex flex-col gap-1 p-4">
								{navLinks.map((link, index) => {
									const Icon = link.icon;
									const active = isActive(link.href);
									return (
										<SheetClose asChild key={link.href}>
											<Link
												href={link.href}
												className={cn(
													"group relative flex items-center gap-4 px-4 py-4 rounded-lg transition-all duration-300",
													active
														? "bg-[#D4A574] text-[#2C1E1A] shadow-lg shadow-[#D4A574]/20"
														: "text-white/90 hover:bg-white/10 hover:text-white"
												)}
												style={{
													animationDelay: `${index * 50}ms`,
												}}>
												<div
													className={cn(
														"p-2 rounded-lg transition-all duration-300",
														active
															? "bg-[#2C1E1A]/10"
															: "bg-white/5 group-hover:bg-white/10"
													)}>
													<Icon className="w-5 h-5" />
												</div>
												<span className="font-medium text-base tracking-wide">
													{link.label}
												</span>
												{active && (
													<div className="absolute right-4 w-2 h-2 rounded-full bg-[#2C1E1A] animate-pulse" />
												)}
											</Link>
										</SheetClose>
									);
								})}
							</nav>

							{/* Divider */}
							<div className="mx-4 my-2 h-px bg-linear-to-r from-transparent via-[#D4A574]/30 to-transparent" />

							{/* Contact Info Section */}
							<div className="px-4 py-4 space-y-4">
								<h3 className="text-[#D4A574] font-serif font-semibold text-sm uppercase tracking-wider mb-3">
									Get in Touch
								</h3>
								<div className="space-y-3">
									<a
										href="tel:+97336074003"
										className="flex items-center gap-3 text-white/80 hover:text-[#D4A574] transition-colors group">
										<div className="p-2 rounded-lg bg-white/5 group-hover:bg-[#D4A574]/20 transition-colors">
											<Phone className="w-4 h-4" />
										</div>
										<div className="text-sm">
											<p className="font-medium">+973 36074003</p>
											<p className="text-xs text-white/60">Adnan Mustafa</p>
										</div>
									</a>
									<a
										href="tel:+5511945702260"
										className="flex items-center gap-3 text-white/80 hover:text-[#D4A574] transition-colors group">
										<div className="p-2 rounded-lg bg-white/5 group-hover:bg-[#D4A574]/20 transition-colors">
											<Phone className="w-4 h-4" />
										</div>
										<div className="text-sm">
											<p className="font-medium">+55 11 94570-2260</p>
											<p className="text-xs text-white/60">Brazil Office</p>
										</div>
									</a>
									<a
										href="mailto:info@braziliancoffee.com"
										className="flex items-center gap-3 text-white/80 hover:text-[#D4A574] transition-colors group">
										<div className="p-2 rounded-lg bg-white/5 group-hover:bg-[#D4A574]/20 transition-colors">
											<Mail className="w-4 h-4" />
										</div>
										<span className="text-sm font-medium">
											info@braziliancoffee.com
										</span>
									</a>
								</div>
							</div>

							{/* Divider */}
							<div className="mx-4 my-2 h-px bg-linear-to-r from-transparent via-[#D4A574]/30 to-transparent" />

							{/* Social Media */}
							<div className="px-4 py-4 pb-6">
								<h3 className="text-[#D4A574] font-serif font-semibold text-sm uppercase tracking-wider mb-3">
									Follow Us
								</h3>
								<div className="flex gap-3">
									<a
										href="#"
										className="flex-1 flex items-center justify-center gap-2 p-3 rounded-lg bg-white/5 hover:bg-[#D4A574] hover:text-[#2C1E1A] text-white/80 transition-all duration-300 group">
										<Facebook className="w-5 h-5" />
									</a>
									<a
										href="#"
										className="flex-1 flex items-center justify-center gap-2 p-3 rounded-lg bg-white/5 hover:bg-[#D4A574] hover:text-[#2C1E1A] text-white/80 transition-all duration-300 group">
										<Instagram className="w-5 h-5" />
									</a>
									<a
										href="#"
										className="flex-1 flex items-center justify-center gap-2 p-3 rounded-lg bg-white/5 hover:bg-[#D4A574] hover:text-[#2C1E1A] text-white/80 transition-all duration-300 group">
										<Twitter className="w-5 h-5" />
									</a>
								</div>
							</div>

							{/* Footer */}
							<div className="px-4 py-4 border-t border-[#D4A574]/20 bg-black/20">
								<p className="text-center text-xs text-white/50">
									© {new Date().getFullYear()} Brazilian Coffee
								</p>
							</div>
						</SheetContent>
					</Sheet>
				</div>
			</div>
		</header>
	);
}
