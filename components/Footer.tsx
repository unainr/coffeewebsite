import Link from "next/link";
import Logo from "./layouts/Logo";
import {
	Facebook,
	Instagram,
	Twitter,
	Mail,
	MapPin,
	Phone,
} from "lucide-react";

export default function Footer() {
	return (
		<footer className="bg-[#1A110E] text-white py-16 relative">
			<div className="container mx-auto px-4 md:px-6">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
					{/* Brand Column */}
					<div className="space-y-6">
						<Logo />
						<p className="text-gray-400 leading-relaxed text-sm">
							Cultivating the finest Brazilian coffee beans since 1985. Our
							passion is delivering an authentic coffee experience from our
							family farm to your cup.
						</p>
						<div className="flex gap-4">
							<a
								href="#"
								className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#D4A574] hover:text-[#2C1E1A] transition-all">
								<Facebook className="w-5 h-5" />
							</a>
							<a
								href="#"
								className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#D4A574] hover:text-[#2C1E1A] transition-all">
								<Instagram className="w-5 h-5" />
							</a>
							<a
								href="#"
								className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#D4A574] hover:text-[#2C1E1A] transition-all">
								<Twitter className="w-5 h-5" />
							</a>
						</div>
					</div>

					{/* Quick Links */}
					<div>
						<h3 className="text-lg font-serif font-bold mb-6 text-[#D4A574]">
							Quick Links
						</h3>
						<ul className="space-y-4">
							<li>
								<Link
									href="/"
									className="text-gray-400 hover:text-white transition-colors flex items-center gap-2">
									<span className="w-1.5 h-1.5 rounded-full bg-[#D4A574]"></span>{" "}
									Home
								</Link>
							</li>
							<li>
								<Link
									href="/about"
									className="text-gray-400 hover:text-white transition-colors flex items-center gap-2">
									<span className="w-1.5 h-1.5 rounded-full bg-[#D4A574]"></span>{" "}
									About Us
								</Link>
							</li>
							<li>
								<Link
									href="/products"
									className="text-gray-400 hover:text-white transition-colors flex items-center gap-2">
									<span className="w-1.5 h-1.5 rounded-full bg-[#D4A574]"></span>{" "}
									Our Coffee
								</Link>
							</li>
							<li>
								<Link
									href="/gallery"
									className="text-gray-400 hover:text-white transition-colors flex items-center gap-2">
									<span className="w-1.5 h-1.5 rounded-full bg-[#D4A574]"></span>{" "}
									Gallery
								</Link>
							</li>
							<li>
								<Link
									href="/contact"
									className="text-gray-400 hover:text-white transition-colors flex items-center gap-2">
									<span className="w-1.5 h-1.5 rounded-full bg-[#D4A574]"></span>{" "}
									Contact
								</Link>
							</li>
						</ul>
					</div>

					{/* Contact Info */}
					<div>
						<h3 className="text-lg font-serif font-bold mb-6 text-[#D4A574]">
							Get in Touch
						</h3>
						<ul className="space-y-4">
							<li className="flex items-start gap-3 text-gray-400">
								<MapPin className="w-5 h-5 text-[#D4A574] shrink-0 mt-1" />
								<span>
									Av Yervant Kissajikian, 1153
									<br />
									Vila Constança, SP, Cep 04657001
									<br />
									Sumaiyya Borges galvao
								</span>
							</li>
							<li className="flex items-center gap-3 text-gray-400">
								<Phone className="w-5 h-5 text-[#D4A574] shrink-0" />
								<span>
									Adnan Mustafa
									<br />
									+973 36074003
								</span>
							</li>
							<li className="flex items-center gap-3 text-gray-400">
								<Phone className="w-5 h-5 text-[#D4A574] shrink-0" />
								<span>
									Brazil Office - São Paulo
									<br />
									+55 11 94570-2260
								</span>
							</li>
							<li className="flex items-center gap-3 text-gray-400">
								<Mail className="w-5 h-5 text-[#D4A574] shrink-0" />
								<span>info@braziliancoffee.com</span>
							</li>
						</ul>
					</div>

					{/* Newsletter */}
					<div>
						<h3 className="text-lg font-serif font-bold mb-6 text-[#D4A574]">
							Newsletter
						</h3>
						<p className="text-gray-400 text-sm mb-4">
							Subscribe to get special offers and brewing tips.
						</p>
						<form className="space-y-3">
							<input
								type="email"
								placeholder="Your email address"
								className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-[#D4A574] transition-colors"
							/>
							<button
								type="submit"
								className="w-full bg-[#D4A574] text-[#2C1E1A] font-bold py-3 px-4 rounded hover:bg-white transition-colors uppercase tracking-wide text-sm">
								Subscribe
							</button>
						</form>
					</div>
				</div>

				<div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
					<p className="text-gray-500 text-sm">
						© {new Date().getFullYear()} Brazilian Coffee. All rights reserved.
					</p>
					<div className="flex gap-6 text-sm text-gray-500">
						<a href="#" className="hover:text-[#D4A574] transition-colors">
							Privacy Policy
						</a>
						<a href="#" className="hover:text-[#D4A574] transition-colors">
							Terms of Service
						</a>
					</div>
				</div>
			</div>

			{/* Floating WhatsApp Button */}
			<a
				href="https://wa.me/97336074003"
				target="_blank"
				rel="noopener noreferrer"
				className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 flex items-center justify-center group"
				aria-label="Chat with us on WhatsApp">
				<svg
					viewBox="0 0 24 24"
					width="24"
					height="24"
					stroke="currentColor"
					strokeWidth="2"
					fill="none"
					strokeLinecap="round"
					strokeLinejoin="round"
					className="w-8 h-8 group-hover:animate-pulse">
					<path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
				</svg>
			</a>
		</footer>
	);
}
