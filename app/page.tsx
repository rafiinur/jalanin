import DestinationSection from "@/components/sections/destination";
import FeaturesSection from "@/components/sections/features";
import HeroSection from "@/components/sections/hero";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import QuizSection from "@/components/sections/quiz";

export default async function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <DestinationSection />
      <QuizSection />
      <Footer />
    </>
  );
}
