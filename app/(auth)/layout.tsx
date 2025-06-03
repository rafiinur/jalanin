import React from "react";
import Image from "next/image";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen lg:grid lg:grid-cols-2 container mx-auto">
      {/* Content Section */}
      <div className="flex items-center justify-center p-8">
        <div className="w-full max-w-xl">{children}</div>
      </div>

      {/* Image Section */}
      <div className="hidden lg:flex items-center justify-center p-8">
        <div className="relative w-full h-full max-w-lg">
          <Image
            src="https://images.unsplash.com/photo-1555400038-63f5ba517a47?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Authentication background"
            fill
            className="object-cover rounded-3xl"
            priority
          />
        </div>
      </div>
    </div>
  );
}
