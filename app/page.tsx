import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/section/Hero";
import ProductSection from "@/components/section/productSection";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <ProductSection />
    </div>
  );
}
