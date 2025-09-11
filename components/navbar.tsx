"use client";

import React, { useState } from "react";
import { Menu, X, User, LogIn } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
	Sheet,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
	SheetClose,
} from "@/components/ui/sheet";
// import { ThemeToggle } from "./theme-toggle";

const Navbar = () => {
	const [open, setOpen] = useState(false);

	const navItems = [
		{ label: "Home", href: "/" },
		{ label: "Our Package", href: "/paket" },
		{ label: "My Package", href: "/custom" },
		{ label: "Modal Hiling", href: "/modal" },
		{ label: "Review", href: "/review" },
	];

	const closeMobileMenu = () => setOpen(false);

	const isAuthenticated = false; // Replace with actual authentication logic

	return (
		<header className="sticky top-0 z-50 w-full border-b shadow-sm bg-background border-border/50">
			<div className="container px-4 mx-auto sm:px-6 lg:px-8">
				<div className="flex items-center justify-between py-3 md:py-4">
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
										className="relative py-2 font-semibold transition-all duration-300 rounded text-foreground/80 hover:text-primary group focus:outline-none"
									>
										{item.label}
										<span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
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
								className="flex items-center gap-2 px-4 py-2 font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-ring bg-primary text-primary-foreground hover:bg-primary/90"
							>
								<LogIn size={18} aria-hidden="true" />
								Login
							</Link>
							<Link
								href="/register"
								className="flex items-center gap-2 px-4 py-2 font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-ring bg-secondary text-white hover:bg-secondary/90"
							>
								<User size={18} aria-hidden="true" />
								Register
							</Link>
						</div>
					)}

					{/* Mobile Menu Button */}
					<Sheet open={open} onOpenChange={setOpen}>
						<SheetTrigger asChild>
							<button
								className="p-2 transition-colors rounded-lg text-foreground md:hidden hover:bg-accent focus:outline-none focus:ring-2 focus:ring-ring"
								aria-label={open ? "Close menu" : "Open menu"}
								aria-expanded={open}
							>
								{open ? <X size={24} /> : <Menu size={24} />}
							</button>
						</SheetTrigger>
						<SheetContent side="right" className="px-0">
							<SheetHeader className="px-4 pt-6 pb-2">
								<SheetTitle className="sr-only">Main Menu</SheetTitle>
								<div className="flex items-center gap-3">
									<Image
										src="/logo.png"
										alt="Company Logo"
										width={32}
										height={32}
										className="w-auto h-8"
									/>
									<span className="text-base font-semibold">Menu</span>
								</div>
							</SheetHeader>
							<nav className="mb-4">
								<ul className="space-y-2" role="list">
									{navItems.map((item) => (
										<li key={item.href} role="listitem">
											<SheetClose asChild>
												<Link
													href={item.href}
													className="block px-4 py-3 font-medium transition-all duration-200 rounded-lg text-foreground/80 hover:text-primary hover:bg-accent focus:outline-none focus:ring-2 focus:ring-ring"
												>
													{item.label}
												</Link>
											</SheetClose>
										</li>
									))}
								</ul>
							</nav>

							<div className="flex flex-col gap-3 px-4">
								<SheetClose asChild>
									<Link
										href="/login"
										className="flex items-center justify-center gap-2 px-4 py-3 font-medium transition-all duration-300 border rounded-lg border-border hover:bg-accent hover:text-primary focus:outline-none focus:ring-2 focus:ring-ring"
									>
										<LogIn size={18} aria-hidden="true" />
										Login
									</Link>
								</SheetClose>
								<SheetClose asChild>
									<Link
										href="/register"
										className="flex items-center justify-center gap-2 px-4 py-3 font-medium transition-all duration-300 transform rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-ring"
									>
										<User size={18} aria-hidden="true" />
										Register
									</Link>
								</SheetClose>
							</div>
						</SheetContent>
					</Sheet>
				</div>
			</div>
		</header>
	);
};

export default Navbar;
