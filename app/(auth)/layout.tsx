// app/(auth)/layout.tsx atau components/AuthLayout.tsx
import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex items-center">
      <div className="grid lg:grid-cols-2 w-full container mx-auto items-center gap-26">
        {/* Left Side - Form */}
        <div className="flex flex-col ">
          {/* Logo */}
          <Link href="/" className="mb-8">
            <Image src="/logo.png" alt="Logo" width={120} height={40} />
          </Link>
          {children}
        </div>

        {/* Right Side - Image */}
        <div className="relative w-full h-[calc(100vh-72px)] rounded-3xl overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1555400038-63f5ba517a47?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Login illustration"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </div>
  );
}
