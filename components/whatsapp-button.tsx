import React from "react";
import { Button } from "./ui/button";

const WhatsappButton = () => {
  return (
    <Button className="fixed bottom-5 right-5 bg-success-300 border-success-400 hover:bg-success-400 text-white hover:text-white shadow-lg transition-all duration-300 z-50">
      Contact Us
    </Button>
  );
};

export default WhatsappButton;
