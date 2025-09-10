"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, User, LogIn } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
// import { ThemeToggle } from "./theme-toggle";

const Navbar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const navItems = [
		{ label: "Home", href: "/" },
		{ label: "Our Package", href: "/paket" },
		{ label: "My Package", href: "/custom" },
		{ label: "Modal Hiling", href: "/modal" },
		{ label: "Review", href: "/review" },
	];

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth >= 768 && isMenuOpen) {
				setIsMenuOpen(false);
			}
		};

		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, [isMenuOpen]);

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			const target = event.target as HTMLElement | null;
			if (isMenuOpen && target && !target.closest("header")) {
				setIsMenuOpen(false);
			}
		};

		document.addEventListener("click", handleClickOutside);
		return () => document.removeEventListener("click", handleClickOutside);
	}, [isMenuOpen]);

	// Prevent body scroll when mobile menu is open
	useEffect(() => {
		if (isMenuOpen) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "unset";
		}

		return () => {
			document.body.style.overflow = "unset";
		};
	}, [isMenuOpen]);

	const handleMobileMenuToggle = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	const closeMobileMenu = () => {
		setIsMenuOpen(false);
	};

	const isAuthenticated = false; // Replace with actual authentication logic

	return (
		<header className="sticky top-0 z-50 w-full border-b shadow-sm bg-background border-gray-200/50">
			<div className="container mx-auto">
				<div className="flex items-center justify-between py-4">
					{/* Logo */}
					<Link href="/" className="flex-shrink-0 group" aria-label="Home">
						<Image
							src="/logo.png"
							alt="Company Logo"
							width={203}
							height={203}
							className="w-auto h-10"
							priority
						/>
					</Link>

					{/* Desktop Navigation */}
					<nav
						className="hidden md:block"
						role="navigation"
						aria-label="Main navigation"
					>
						<ul className="flex items-center gap-16">
							{navItems.map((item) => (
								<li key={item.href}>
									<Link
										href={item.href}
										className="relative py-2 font-semibold text-gray-700 transition-all duration-300 rounded hover:text-primary-600 group focus:outline-none"
									>
										{item.label}
										<span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-600 transition-all duration-300 group-hover:w-full"></span>
									</Link>
								</li>
							))}
						</ul>
					</nav>

					{/* Desktop Buttons */}
					{isAuthenticated ? (
						<div className="items-center hidden gap-3 md:flex">
							<Avatar className="size-10">
								<AvatarImage src="https://github.com/shadcn.png" />
								<AvatarFallback>CN</AvatarFallback>
							</Avatar>
							<div className="flex flex-col items-start">
								<p className="font-semibold">John Doe</p>
								<Link
									href="/logout"
									className="text-sm text-primary hover:underline "
									onClick={closeMobileMenu}
								>
									Logout
								</Link>
							</div>
						</div>
					) : (
						<div className="items-center hidden gap-4 md:flex">
							{/* <ThemeToggle /> */}
							<Link
								href="/login"
								className="flex items-center gap-2 px-4 py-2 text-white bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 border-0 font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:ring-opacity-50"
							>
								<LogIn size={18} aria-hidden="true" />
								Login
							</Link>
							<Link
								href="/register"
								className="flex items-center gap-2 px-4 py-2 text-white bg-gradient-to-r from-secondary-500 to-secondary-600 hover:from-secondary-600 hover:to-secondary-700 border-0 font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-secondary-400 focus:ring-opacity-50"
							>
								<User size={18} aria-hidden="true" />
								Register
							</Link>
						</div>
					)}

					{/* Mobile Menu Button */}
					<button
						onClick={handleMobileMenuToggle}
						className="p-2 text-gray-700 transition-colors rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300"
						aria-label={isMenuOpen ? "Close menu" : "Open menu"}
						aria-expanded={isMenuOpen}
						aria-controls="mobile-menu"
					>
						{isMenuOpen ? <X size={24} /> : <Menu size={24} />}
					</button>
				</div>

				{/* Mobile Menu */}
				<div
					id="mobile-menu"
					className={`md:hidden transition-all duration-300 ease-in-out ${
						isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
					} overflow-hidden`}
					role="navigation"
					aria-label="Mobile navigation"
				>
					<div className="py-4 border-t border-gray-200/50">
						<nav className="mb-4">
							<ul className="space-y-2" role="list">
								{navItems.map((item) => (
									<li key={item.href} role="listitem">
										<Link
											href={item.href}
											className="block px-4 py-3 font-medium text-gray-700 transition-all duration-200 rounded-lg hover:text-blue-600 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
											onClick={closeMobileMenu}
										>
											{item.label}
										</Link>
									</li>
								))}
							</ul>
						</nav>

						<div className="flex flex-col gap-3 px-4">
							<Link
								href="/login"
								className="flex items-center justify-center gap-2 px-4 py-3 font-medium text-gray-700 transition-all duration-300 border border-gray-200 rounded-lg hover:text-blue-600 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
								onClick={closeMobileMenu}
							>
								<LogIn size={18} aria-hidden="true" />
								Login
							</Link>
							<Link
								href="/register"
								className="flex items-center justify-center gap-2 px-4 py-3 font-medium text-white transition-all duration-300 transform rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:shadow-lg active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
								onClick={closeMobileMenu}
							>
								<User size={18} aria-hidden="true" />
								Register
							</Link>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Navbar;
