import Image from "next/image";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import AboutSection from "@/components/AboutSection";
import ProjectSection from "@/components/ProjectSection";
import EmailSection from "@/components/EmailSection";
import Footer from "@/components/Footer";
import Resume from "@/components/Resume";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <div className="container mx-auto px-12 py-4">
        <Navbar />
        <div className="container mx-auto px-12 py-4">
          <HeroSection />
          <AboutSection />
          <Resume />
          <ProjectSection />
          <EmailSection />
        </div>
      </div>
      <Footer />
    </main>
  );
}
