"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ContactContent() {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		subject: "General Inquiry",
		message: "",
	});

	const handleChange = (
		e: React.ChangeEvent<
			HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
		>
	) => {
		setFormData({ ...formData, [e.target.id]: e.target.value });
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		const message = `Hello, I am ${formData.name}. My email is ${formData.email}. \n\nSubject: ${formData.subject}\n\nMessage: ${formData.message}`;
		const encodedMessage = encodeURIComponent(message);
		window.open(`https://wa.me/97336074003?text=${encodedMessage}`, "_blank");
	};

	return (
		<section className="py-16 container mx-auto px-4 md:px-6">
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
				{/* Contact Info */}
				<motion.div
					initial={{ opacity: 0, x: -30 }}
					animate={{ opacity: 1, x: 0 }}
					className="space-y-8">
					<h2 className="text-3xl font-serif font-bold text-[#2C1E1A]">
						Contact Information
					</h2>

					<div className="flex items-start space-x-4">
						<div className="bg-[#D4A574]/20 p-3 rounded-full text-[#D4A574]">
							<MapPin className="w-6 h-6" />
						</div>
						<div>
							<h3 className="font-bold text-[#2C1E1A]">Visit Us</h3>
							<p className="text-gray-600">
								Sumaiyya Borges galvao
								<br />
								Av Yervant Kissajikian, 1153
								<br />
								Vila Constança, SP, Cep 04657001
							</p>
						</div>
					</div>

					<div className="flex items-start space-x-4">
						<div className="bg-[#D4A574]/20 p-3 rounded-full text-[#D4A574]">
							<Phone className="w-6 h-6" />
						</div>
						<div>
							<h3 className="font-bold text-[#2C1E1A]">Call Us</h3>
							<p className="text-gray-600 font-medium">Adnan Mustafa</p>
							<p className="text-gray-600">+973 36074003</p>
							<p className="text-sm text-gray-500">Mon-Fri: 9am - 6pm</p>
						</div>
					</div>

					<div className="flex items-start space-x-4">
						<div className="bg-[#D4A574]/20 p-3 rounded-full text-[#D4A574]">
							<Mail className="w-6 h-6" />
						</div>
						<div>
							<h3 className="font-bold text-[#2C1E1A]">Email Us</h3>
							<p className="text-gray-600">info@braziliancoffee.com</p>
						</div>
					</div>

					<div className="mt-8 pt-8 border-t border-gray-200">
						<iframe
							src="https://maps.google.com/maps?q=Av.+Yervant+Kissajikian,+1153+Vila+Constanca+SP&t=&z=15&ie=UTF8&iwloc=&output=embed"
							width="100%"
							height="300"
							style={{ border: 0, borderRadius: "0.75rem" }}
							allowFullScreen
							loading="lazy"
							referrerPolicy="no-referrer-when-downgrade"
							title="Map"></iframe>
					</div>
				</motion.div>

				{/* Contact Form */}
				<motion.div
					initial={{ opacity: 0, x: 30 }}
					animate={{ opacity: 1, x: 0 }}
					className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
					<h2 className="text-2xl font-serif font-bold text-[#2C1E1A] mb-6">
						Send us a Message
					</h2>
					<form className="space-y-6" onSubmit={handleSubmit}>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
							<div className="space-y-2">
								<label
									htmlFor="name"
									className="text-sm font-medium text-gray-700">
									Name
								</label>
								<input
									type="text"
									id="name"
									value={formData.name}
									onChange={handleChange}
									required
									className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#D4A574] focus:border-[#D4A574] outline-none transition-all"
									placeholder="Your Name"
								/>
							</div>
							<div className="space-y-2">
								<label
									htmlFor="email"
									className="text-sm font-medium text-gray-700">
									Email
								</label>
								<input
									type="email"
									id="email"
									value={formData.email}
									onChange={handleChange}
									required
									className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#D4A574] focus:border-[#D4A574] outline-none transition-all"
									placeholder="your@email.com"
								/>
							</div>
						</div>

						<div className="space-y-2">
							<label
								htmlFor="subject"
								className="text-sm font-medium text-gray-700">
								Subject
							</label>
							<select
								id="subject"
								value={formData.subject}
								onChange={handleChange}
								className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#D4A574] focus:border-[#D4A574] outline-none transition-all">
								<option>General Inquiry</option>
								<option>Wholesale</option>
								<option>Support</option>
							</select>
						</div>

						<div className="space-y-2">
							<label
								htmlFor="message"
								className="text-sm font-medium text-gray-700">
								Message
							</label>
							<textarea
								id="message"
								rows={4}
								value={formData.message}
								onChange={handleChange}
								required
								className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#D4A574] focus:border-[#D4A574] outline-none transition-all"
								placeholder="How can we help you?"></textarea>
						</div>

						<Button
							type="submit"
							size="lg"
							className="w-full bg-[#2C1E1A] text-white hover:bg-[#3E2D26]">
							Send Message via WhatsApp
						</Button>
					</form>
				</motion.div>
			</div>
		</section>
	);
}
