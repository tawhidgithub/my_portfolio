import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import ContactSection3D from "@/components/section/contactSections";
import ExperienceTimeline from "@/components/section/experinceSections";
import FooterSections from "@/components/section/footer";
import HeroSection from "@/components/section/Hero";
import ProductSection from "@/components/section/productSection";
import ProjectsSection from "@/components/section/projectSections";
import SkillsSection from "@/components/section/skillsSections";
import TestimonialsSection from "@/components/section/testimonialsSections";
import YoutubeSection from "@/components/section/youtubeSections";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen ">
      <HeroSection />
      <ProductSection />
      <ProjectsSection />
      <YoutubeSection />
      <SkillsSection />
      <ExperienceTimeline />
      <TestimonialsSection />
      <ContactSection3D />
      <FooterSections />
    </div>
  );
}
