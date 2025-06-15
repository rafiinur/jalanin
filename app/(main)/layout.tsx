import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import WhatsappButton from "@/components/whatsapp-button";
import React from "react";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative">
      <Navbar />
      {children}
      <Footer />
      <WhatsappButton />
    </div>
  );
};

export default MainLayout;
