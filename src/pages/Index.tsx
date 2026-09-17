import Seo from "@/components/Seo";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import ProblemSolution from "@/components/ProblemSolution";
import Services from "@/components/Services";
import HowItWorks from "@/components/HowItWorks";
import ROIStrip from "@/components/ROIStrip";
import Industries from "@/components/Industries";
import Testimonials from "@/components/Testimonials";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Seo
        title="Digital Gems — AI Integration Specialists"
        description="Custom AI agents that automate admin, speed up customer replies and give your team back hours every week. Book a free discovery call."
        path="/"
      />
      <Navbar />
      <Hero />
      <StatsBar />
      <ProblemSolution />
      <Services />
      <HowItWorks />
      <ROIStrip />
      <Industries />
      <Testimonials />
      <CTASection />
      <Footer />
    </>
  );
};

export default Index;
